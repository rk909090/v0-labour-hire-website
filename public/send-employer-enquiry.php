<?php
/**
 * AI Personnel Australia — Employer Staffing Enquiry Handler
 * Receives JSON POST, sends beautifully formatted HTML email via SMTP (SSL/465).
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

// ── Validate ────────────────────────────────────────────────────────────────
$required = ['companyName','contactName','email','whatsapp','state','preferredContact'];
foreach ($required as $field) {
    if (empty(trim($data[$field] ?? ''))) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit;
    }
}

if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// ── Sanitise ────────────────────────────────────────────────────────────────
$companyName      = htmlspecialchars(trim($data['companyName']),      ENT_QUOTES, 'UTF-8');
$contactName      = htmlspecialchars(trim($data['contactName']),      ENT_QUOTES, 'UTF-8');
$email            = htmlspecialchars(trim($data['email']),            ENT_QUOTES, 'UTF-8');
$whatsapp         = htmlspecialchars(trim($data['whatsapp']),         ENT_QUOTES, 'UTF-8');
$state            = htmlspecialchars(trim($data['state']),            ENT_QUOTES, 'UTF-8');
$preferredContact = htmlspecialchars(trim($data['preferredContact']), ENT_QUOTES, 'UTF-8');
$submittedAt      = date('d M Y, H:i:s T');

// ── SMTP Configuration ───────────────────────────────────────────────────────
require __DIR__ . '/smtp-config.php';   // $smtpHost, $smtpPort, $smtpUser, $smtpPassword, $toEmail, $fromName
$subject      = "[Employer Enquiry] $companyName — Staffing Request";

// ── HTML Email Template ──────────────────────────────────────────────────────
$html = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Employer Staffing Enquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;color:#1e2d3d;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f4f8;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background-color:#1b3a5c;border-radius:12px 12px 0 0;padding:32px 36px;">
            <p style="margin:0 0 6px 0;color:#3ecfcf;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">AI Personnel Australia</p>
            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;line-height:1.3;">Employer Staffing Enquiry</h1>
            <p style="margin:8px 0 0 0;color:rgba(255,255,255,0.6);font-size:13px;">Received $submittedAt</p>
          </td>
        </tr>

        <!-- Alert Banner -->
        <tr>
          <td style="background-color:#3ecfcf;padding:14px 36px;">
            <p style="margin:0;color:#0a2e3a;font-size:13px;font-weight:600;">
              A company is enquiring about staffing solutions. Please respond within 24 hours.
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background-color:#ffffff;padding:36px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">

            <!-- Company Info -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td style="padding-bottom:14px;border-bottom:2px solid #f0f4f8;">
                  <p style="margin:0;font-size:11px;font-weight:700;color:#3ecfcf;letter-spacing:1.5px;text-transform:uppercase;">Company Information</p>
                </td>
              </tr>
              <tr>
                <td style="padding-top:16px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td width="160" style="padding:10px 0;color:#64748b;font-size:13px;font-weight:600;">Company Name</td>
                      <td style="padding:10px 0;color:#1e2d3d;font-size:14px;font-weight:700;">$companyName</td>
                    </tr>
                    <tr style="background-color:#f8fafc;">
                      <td width="160" style="padding:10px 12px;color:#64748b;font-size:13px;font-weight:600;border-radius:6px 0 0 6px;">Operating State</td>
                      <td style="padding:10px 12px;color:#1e2d3d;font-size:14px;border-radius:0 6px 6px 0;">$state</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Contact Info -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td style="padding-bottom:14px;border-bottom:2px solid #f0f4f8;">
                  <p style="margin:0;font-size:11px;font-weight:700;color:#3ecfcf;letter-spacing:1.5px;text-transform:uppercase;">Contact Person</p>
                </td>
              </tr>
              <tr>
                <td style="padding-top:16px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td width="160" style="padding:10px 0;color:#64748b;font-size:13px;font-weight:600;">Name</td>
                      <td style="padding:10px 0;color:#1e2d3d;font-size:14px;">$contactName</td>
                    </tr>
                    <tr style="background-color:#f8fafc;">
                      <td width="160" style="padding:10px 12px;color:#64748b;font-size:13px;font-weight:600;border-radius:6px 0 0 6px;">Email</td>
                      <td style="padding:10px 12px;border-radius:0 6px 6px 0;">
                        <a href="mailto:$email" style="color:#1b3a5c;font-size:14px;font-weight:600;text-decoration:none;">$email</a>
                      </td>
                    </tr>
                    <tr>
                      <td width="160" style="padding:10px 0;color:#64748b;font-size:13px;font-weight:600;">WhatsApp</td>
                      <td style="padding:10px 0;color:#1e2d3d;font-size:14px;">
                        <a href="https://wa.me/{$whatsapp}" style="color:#25d366;font-weight:600;text-decoration:none;">$whatsapp</a>
                      </td>
                    </tr>
                    <tr style="background-color:#f8fafc;">
                      <td width="160" style="padding:10px 12px;color:#64748b;font-size:13px;font-weight:600;border-radius:6px 0 0 6px;">Preferred Contact</td>
                      <td style="padding:10px 12px;border-radius:0 6px 6px 0;">
                        <span style="display:inline-block;background-color:#e8f8f8;color:#1b6b6b;font-size:12px;font-weight:700;padding:4px 12px;border-radius:999px;text-transform:capitalize;">$preferredContact</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Quick Reply Buttons -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:8px;">
              <tr>
                <td>
                  <p style="margin:0 0 14px 0;font-size:13px;font-weight:600;color:#64748b;">Quick Actions</p>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="mailto:$email?subject=Re: Staffing Enquiry from $companyName" style="display:inline-block;background-color:#1b3a5c;color:#ffffff;text-decoration:none;font-size:13px;font-weight:600;padding:12px 24px;border-radius:8px;margin-right:12px;">Reply by Email</a>
                  <a href="https://wa.me/{$whatsapp}" style="display:inline-block;background-color:#25d366;color:#ffffff;text-decoration:none;font-size:13px;font-weight:600;padding:12px 24px;border-radius:8px;">Reply on WhatsApp</a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:#f0f4f8;border-radius:0 0 12px 12px;padding:20px 36px;border:1px solid #e2e8f0;border-top:none;">
            <p style="margin:0;font-size:11px;color:#94a3b8;text-align:center;">
              This enquiry was submitted via the <strong>AI Personnel Australia</strong> website contact form.<br>
              Do not reply directly to this email — use the quick action buttons above.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
HTML;

// ── Send via SMTP (SSL socket, no PHPMailer dependency) ──────────────────────
function smtp_send(string $host, int $port, string $user, string $pass,
                   string $from, string $fromName, string $to, string $subject,
                   string $htmlBody): bool
{
    $socket = @fsockopen("ssl://$host", $port, $errno, $errstr, 15);
    if (!$socket) return false;

    $boundary = md5(uniqid(rand(), true));
    $msgId    = '<' . md5(uniqid()) . '@aipersonnelaustralia.com>';
    $encoded  = base64_encode($htmlBody);
    $b64Lines = rtrim(chunk_split($encoded, 76, "\r\n"));

    $rawMsg  = "Date: " . date('r') . "\r\n";
    $rawMsg .= "From: =?UTF-8?B?" . base64_encode($fromName) . "?= <$from>\r\n";
    $rawMsg .= "To: $to\r\n";
    $rawMsg .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $rawMsg .= "Message-ID: $msgId\r\n";
    $rawMsg .= "MIME-Version: 1.0\r\n";
    $rawMsg .= "Content-Type: text/html; charset=UTF-8\r\n";
    $rawMsg .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $rawMsg .= $b64Lines;

    $cmd = function(string $c) use ($socket): string {
        fwrite($socket, $c . "\r\n");
        $r = '';
        while (!feof($socket)) { $l = fgets($socket, 512); $r .= $l; if (isset($l[3]) && $l[3] === ' ') break; }
        return $r;
    };

    $cmd('');  // read greeting
    fgets($socket, 512); // 220 banner

    $cmd("EHLO aipersonnelaustralia.com");
    $cmd("AUTH LOGIN");
    $cmd(base64_encode($user));
    $r = $cmd(base64_encode($pass));
    if (strpos($r, '235') === false) { fclose($socket); return false; }

    $cmd("MAIL FROM:<$from>");
    $cmd("RCPT TO:<$to>");
    $cmd("DATA");
    fwrite($socket, $rawMsg . "\r\n.\r\n");
    $r = fgets($socket, 512);
    fwrite($socket, "QUIT\r\n");
    fclose($socket);

    return strpos($r, '250') !== false;
}

$sent = smtp_send($smtpHost, $smtpPort, $smtpUser, $smtpPassword,
                  $smtpUser, $fromName, $toEmail, $subject, $html);

if ($sent) {
    http_response_code(200);
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email. Please try again or contact us directly.']);
}
exit;
?>
