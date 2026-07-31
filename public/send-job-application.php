<?php
/**
 * AI Personnel Australia — Job Application Handler
 * Receives multipart/form-data POST (fields + CV file), sends HTML email with CV attached via SMTP SSL/465.
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

// ── Validate required fields ─────────────────────────────────────────────────
$required = ['name','age','gender','nationality','email','phone','visaStatus','jobTitle'];
foreach ($required as $field) {
    if (empty(trim($_POST[$field] ?? ''))) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit;
    }
}
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// ── Validate CV upload ────────────────────────────────────────────────────────
if (empty($_FILES['cv']) || $_FILES['cv']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['error' => 'CV file is required']);
    exit;
}
$allowedMimes = ['application/pdf','application/msword',
                 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
$fileMime = mime_content_type($_FILES['cv']['tmp_name']);
if (!in_array($fileMime, $allowedMimes)) {
    http_response_code(400);
    echo json_encode(['error' => 'Only PDF, DOC or DOCX files are accepted']);
    exit;
}
if ($_FILES['cv']['size'] > 5 * 1024 * 1024) {
    http_response_code(400);
    echo json_encode(['error' => 'File must be under 5 MB']);
    exit;
}

// ── Sanitise ──────────────────────────────────────────────────────────────────
$name        = htmlspecialchars(trim($_POST['name']),        ENT_QUOTES, 'UTF-8');
$age         = htmlspecialchars(trim($_POST['age']),         ENT_QUOTES, 'UTF-8');
$gender      = htmlspecialchars(trim($_POST['gender']),      ENT_QUOTES, 'UTF-8');
$nationality = htmlspecialchars(trim($_POST['nationality']), ENT_QUOTES, 'UTF-8');
$email       = htmlspecialchars(trim($_POST['email']),       ENT_QUOTES, 'UTF-8');
$phone       = htmlspecialchars(trim($_POST['phone']),       ENT_QUOTES, 'UTF-8');
$visaStatus  = htmlspecialchars(trim($_POST['visaStatus']),  ENT_QUOTES, 'UTF-8');
$jobTitle    = htmlspecialchars(trim($_POST['jobTitle']),    ENT_QUOTES, 'UTF-8');
$submittedAt = date('d M Y, H:i:s T');

$visaLabels = [
    'have-visa'   => 'Yes — already holds an Australian work visa',
    'applied'     => 'Yes — applied, awaiting approval',
    'in-process'  => 'Yes — currently in application process',
    'not-started' => 'No — has not yet started the process',
    'au-citizen'  => 'Australian citizen or permanent resident',
];
$visaLabel   = $visaLabels[$visaStatus] ?? $visaStatus;
$genderLabel = ucfirst(str_replace('-', ' ', $gender));
$cvFileName  = basename($_FILES['cv']['name']);
$cvData      = file_get_contents($_FILES['cv']['tmp_name']);
$cvBase64    = base64_encode($cvData);
$cvMime      = $fileMime;

// ── SMTP Configuration ────────────────────────────────────────────────────────
$smtpHost     = 'mail.aipersonnelaustralia.com';
$smtpPort     = 465;
$smtpUser     = 'mail@aipersonnelaustralia.com';
$smtpPassword = 'rgWe&FSV(Whn?s7o';
$toEmail      = 'office@aipersonnelaustralia.com';
$fromName     = 'AI Personnel Australia Website';
$subject      = "[Job Application] $name — $jobTitle";

// ── HTML Email Body ────────────────────────────────────────────────────────────
$html = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Job Application — $name</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;color:#1e2d3d;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f4f8;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background-color:#1b3a5c;border-radius:12px 12px 0 0;padding:32px 36px;">
            <p style="margin:0 0 6px 0;color:#3ecfcf;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">AI Personnel Australia</p>
            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;line-height:1.3;">New Job Application</h1>
            <p style="margin:8px 0 0 0;color:rgba(255,255,255,0.6);font-size:13px;">Received $submittedAt</p>
          </td>
        </tr>

        <!-- Role Banner -->
        <tr>
          <td style="background-color:#3ecfcf;padding:14px 36px;">
            <p style="margin:0;color:#0a2e3a;font-size:14px;font-weight:700;">
              Applying for: $jobTitle
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background-color:#ffffff;padding:36px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">

            <!-- Personal Details -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td style="padding-bottom:14px;border-bottom:2px solid #f0f4f8;">
                  <p style="margin:0;font-size:11px;font-weight:700;color:#3ecfcf;letter-spacing:1.5px;text-transform:uppercase;">Applicant Details</p>
                </td>
              </tr>
              <tr>
                <td style="padding-top:16px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td width="160" style="padding:10px 0;color:#64748b;font-size:13px;font-weight:600;">Full Name</td>
                      <td style="padding:10px 0;color:#1e2d3d;font-size:14px;font-weight:700;">$name</td>
                    </tr>
                    <tr style="background-color:#f8fafc;">
                      <td width="160" style="padding:10px 12px;color:#64748b;font-size:13px;font-weight:600;border-radius:6px 0 0 6px;">Age</td>
                      <td style="padding:10px 12px;color:#1e2d3d;font-size:14px;border-radius:0 6px 6px 0;">$age years old</td>
                    </tr>
                    <tr>
                      <td width="160" style="padding:10px 0;color:#64748b;font-size:13px;font-weight:600;">Gender</td>
                      <td style="padding:10px 0;color:#1e2d3d;font-size:14px;">$genderLabel</td>
                    </tr>
                    <tr style="background-color:#f8fafc;">
                      <td width="160" style="padding:10px 12px;color:#64748b;font-size:13px;font-weight:600;border-radius:6px 0 0 6px;">Nationality</td>
                      <td style="padding:10px 12px;color:#1e2d3d;font-size:14px;border-radius:0 6px 6px 0;">$nationality</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Contact Info -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td style="padding-bottom:14px;border-bottom:2px solid #f0f4f8;">
                  <p style="margin:0;font-size:11px;font-weight:700;color:#3ecfcf;letter-spacing:1.5px;text-transform:uppercase;">Contact Information</p>
                </td>
              </tr>
              <tr>
                <td style="padding-top:16px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td width="160" style="padding:10px 0;color:#64748b;font-size:13px;font-weight:600;">Email</td>
                      <td style="padding:10px 0;">
                        <a href="mailto:$email" style="color:#1b3a5c;font-size:14px;font-weight:600;text-decoration:none;">$email</a>
                      </td>
                    </tr>
                    <tr style="background-color:#f8fafc;">
                      <td width="160" style="padding:10px 12px;color:#64748b;font-size:13px;font-weight:600;border-radius:6px 0 0 6px;">Phone / WhatsApp</td>
                      <td style="padding:10px 12px;border-radius:0 6px 6px 0;">
                        <a href="https://wa.me/{$phone}" style="color:#25d366;font-size:14px;font-weight:600;text-decoration:none;">$phone</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Visa Status -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td style="padding-bottom:14px;border-bottom:2px solid #f0f4f8;">
                  <p style="margin:0;font-size:11px;font-weight:700;color:#3ecfcf;letter-spacing:1.5px;text-transform:uppercase;">Visa Status</p>
                </td>
              </tr>
              <tr>
                <td style="padding-top:16px;">
                  <span style="display:inline-block;background-color:#e8f8f8;color:#1b6b6b;font-size:13px;font-weight:600;padding:8px 16px;border-radius:8px;border-left:4px solid #3ecfcf;">$visaLabel</span>
                </td>
              </tr>
            </table>

            <!-- CV Attachment Note -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
              <tr>
                <td style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;">
                  <p style="margin:0;font-size:13px;color:#1e2d3d;">
                    <strong style="color:#1b3a5c;">CV attached:</strong> $cvFileName
                  </p>
                  <p style="margin:6px 0 0 0;font-size:11px;color:#94a3b8;">The applicant's CV is attached to this email. Please download and review before responding.</p>
                </td>
              </tr>
            </table>

            <!-- Quick Reply -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
              <tr>
                <td>
                  <a href="mailto:$email?subject=Re: Your application for $jobTitle" style="display:inline-block;background-color:#1b3a5c;color:#ffffff;text-decoration:none;font-size:13px;font-weight:600;padding:12px 24px;border-radius:8px;margin-right:12px;">Reply by Email</a>
                  <a href="https://wa.me/{$phone}" style="display:inline-block;background-color:#25d366;color:#ffffff;text-decoration:none;font-size:13px;font-weight:600;padding:12px 24px;border-radius:8px;">Reply on WhatsApp</a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:#f0f4f8;border-radius:0 0 12px 12px;padding:20px 36px;border:1px solid #e2e8f0;border-top:none;">
            <p style="margin:0;font-size:11px;color:#94a3b8;text-align:center;">
              This application was submitted via the <strong>AI Personnel Australia</strong> website jobs board.<br>
              Do not reply directly to this system email — use the quick action buttons above.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
HTML;

// ── Send via SMTP with attachment (MIME multipart) ────────────────────────────
function smtp_send_with_attachment(
    string $host, int $port, string $user, string $pass,
    string $from, string $fromName, string $to, string $subject,
    string $htmlBody, string $attachBase64, string $attachMime, string $attachName
): bool {
    $socket = @fsockopen("ssl://$host", $port, $errno, $errstr, 15);
    if (!$socket) return false;

    $boundary = '==AIP_' . md5(uniqid(rand(), true)) . '==';
    $msgId    = '<' . md5(uniqid()) . '@aipersonnelaustralia.com>';

    // Build MIME message
    $msg  = "Date: " . date('r') . "\r\n";
    $msg .= "From: =?UTF-8?B?" . base64_encode($fromName) . "?= <$from>\r\n";
    $msg .= "To: $to\r\n";
    $msg .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $msg .= "Message-ID: $msgId\r\n";
    $msg .= "MIME-Version: 1.0\r\n";
    $msg .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n\r\n";

    // HTML part
    $msg .= "--$boundary\r\n";
    $msg .= "Content-Type: text/html; charset=UTF-8\r\n";
    $msg .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $msg .= rtrim(chunk_split(base64_encode($htmlBody), 76, "\r\n")) . "\r\n";

    // Attachment part
    $msg .= "--$boundary\r\n";
    $msg .= "Content-Type: $attachMime; name=\"" . addslashes($attachName) . "\"\r\n";
    $msg .= "Content-Transfer-Encoding: base64\r\n";
    $msg .= "Content-Disposition: attachment; filename=\"" . addslashes($attachName) . "\"\r\n\r\n";
    $msg .= rtrim(chunk_split($attachBase64, 76, "\r\n")) . "\r\n";
    $msg .= "--$boundary--\r\n";

    $cmd = function(string $c) use ($socket): string {
        fwrite($socket, $c . "\r\n");
        $r = '';
        while (!feof($socket)) { $l = fgets($socket, 512); $r .= $l; if (isset($l[3]) && $l[3] === ' ') break; }
        return $r;
    };

    fgets($socket, 512); // 220 banner
    $cmd("EHLO aipersonnelaustralia.com");
    $cmd("AUTH LOGIN");
    $cmd(base64_encode($user));
    $r = $cmd(base64_encode($pass));
    if (strpos($r, '235') === false) { fclose($socket); return false; }

    $cmd("MAIL FROM:<$from>");
    $cmd("RCPT TO:<$to>");
    $cmd("DATA");
    fwrite($socket, $msg . "\r\n.\r\n");
    $r = fgets($socket, 512);
    fwrite($socket, "QUIT\r\n");
    fclose($socket);

    return strpos($r, '250') !== false;
}

$sent = smtp_send_with_attachment(
    $smtpHost, $smtpPort, $smtpUser, $smtpPassword,
    $smtpUser, $fromName, $toEmail, $subject,
    $html, $cvBase64, $cvMime, $cvFileName
);

if ($sent) {
    http_response_code(200);
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email. Please try again or contact us directly.']);
}
exit;
?>
