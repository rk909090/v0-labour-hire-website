<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON data from request
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (empty($data['firstName']) || empty($data['lastName']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

// Extract form data
$firstName = htmlspecialchars($data['firstName'], ENT_QUOTES, 'UTF-8');
$lastName = htmlspecialchars($data['lastName'], ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($data['email'], ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars($data['phone'] ?? '', ENT_QUOTES, 'UTF-8');
$company = htmlspecialchars($data['company'] ?? '', ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($data['message'], ENT_QUOTES, 'UTF-8');
$inquiryType = htmlspecialchars($data['inquiryType'] ?? 'employer', ENT_QUOTES, 'UTF-8');

// SMTP Configuration
$smtpHost = 'mail.aipersonnelaustralia.com';
$smtpPort = 465;
$smtpUser = 'mail@aipersonnelaustralia.com';
$smtpPassword = 'rgWe&FSV(Whn?s7o';
$toEmail = 'office@aipersonnelaustralia.com';

// Determine email subject based on inquiry type
if ($inquiryType === 'employer') {
    $subject = 'New Staffing Inquiry - Looking to Hire';
    $inquiryLabel = 'Employer Inquiry';
} else {
    $subject = 'Job Seeker Inquiry - Looking for Work';
    $inquiryLabel = 'Job Seeker Inquiry';
}

// Build HTML email body
$emailBody = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
        .header { background-color: #003d82; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { background-color: white; padding: 20px; border: 1px solid #ddd; }
        .section { margin-bottom: 20px; }
        .section-title { font-weight: bold; color: #003d82; font-size: 14px; text-transform: uppercase; margin-bottom: 8px; }
        .detail { margin-bottom: 10px; }
        .label { font-weight: bold; color: #555; display: inline-block; width: 120px; }
        .value { color: #333; }
        .message-box { background-color: #f0f4f8; padding: 15px; border-left: 4px solid #ff6b35; margin-top: 10px; }
        .footer { background-color: #f0f0f0; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 5px 5px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>$inquiryLabel</h1>
        </div>
        <div class='content'>
            <div class='section'>
                <div class='section-title'>Contact Information</div>
                <div class='detail'>
                    <span class='label'>Name:</span>
                    <span class='value'>$firstName $lastName</span>
                </div>
                <div class='detail'>
                    <span class='label'>Email:</span>
                    <span class='value'><a href='mailto:$email'>$email</a></span>
                </div>" . (!empty($phone) ? "
                <div class='detail'>
                    <span class='label'>Phone:</span>
                    <span class='value'>$phone</span>
                </div>" : "") . (!empty($company) ? "
                <div class='detail'>
                    <span class='label'>Company:</span>
                    <span class='value'>$company</span>
                </div>" : "") . "
            </div>
            <div class='section'>
                <div class='section-title'>Inquiry Type</div>
                <div class='detail'>
                    <span class='value'>" . ($inquiryType === 'employer' ? 'Looking to Hire' : 'Looking for Work') . "</span>
                </div>
            </div>
            <div class='section'>
                <div class='section-title'>Message</div>
                <div class='message-box'>
                    " . nl2br($message) . "
                </div>
            </div>
        </div>
        <div class='footer'>
            <p>This email was sent from the AI Personnel Australia website contact form.</p>
        </div>
    </div>
</body>
</html>
";

// Use PHPMailer or mail() function to send email
// For this implementation, we'll use a simple SMTP approach via mail() with headers
// Note: For production, consider using PHPMailer or SwiftMailer for better SMTP handling

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Inquiry-Type: $inquiryType\r\n";

// Send email
if (mail($toEmail, $subject, $emailBody, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Inquiry sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send inquiry']);
}
exit;
?>
