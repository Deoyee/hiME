export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Welcome to Messenger</title>
    <style>
      body {
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        font-family: "Segoe UI", Arial, Helvetica, sans-serif;
        background-color: #eaebed;
      }
      table {
        border-collapse: collapse !important;
      }
      a {
        text-decoration: none;
      }
      @media screen and (max-width: 600px) {
        .container {
          width: 100% !important;
          border-radius: 0 !important;
        }
      }
    </style>
  </head>

  <body style="margin:0; padding:30px 0;">

    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center">

          <table class="container" width="600" cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:600px; max-width:600px; background-color:#ffffff; border-radius:10px; box-shadow:0 4px 10px rgba(0,0,0,0.05); overflow:hidden;">

            <!-- Header with Chat Icon -->
            <tr>
              <td align="center" style="background-color:#006989; padding:24px 16px;">
                <div style="display:inline-block; background:#ffffff; border-radius:50%; padding:12px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#006989" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.065 2 11.078c0 2.858 1.434 5.437 3.755 7.22L4.5 22l4.229-1.797C9.933 20.725 10.954 21 12 21c5.523 0 10-4.065 10-8.978C22 6.065 17.523 2 12 2zm0 2c4.411 0 8 3.134 8 7.078 0 3.944-3.589 7.078-8 7.078-0.888 0-1.763-0.143-2.598-0.421l-0.396-0.133-2.286.972.587-2.186-0.43-0.335C5.15 15.146 4 13.166 4 11.078 4 7.134 7.589 4 12 4zm-3.707 6.707 2.854 2.854 2.146-2.146 3.707 3.707-1.414 1.414-2.293-2.293-2.146 2.146-4.268-4.268 1.414-1.414z"></path>
                  </svg>
                </div>
                <h1 style="color:#ffffff; margin:14px 0 0; font-size:24px; font-weight:600;">Welcome to Messenger!</h1>
              </td>
            </tr>

            <!-- Hero Section -->
            <tr>
              <td style="padding:32px 24px; color:#333333; font-size:16px; line-height:1.6;">
                <p style="margin:0 0 14px;">Hello <strong>${name}</strong>,</p>
                <p style="margin:0 0 14px;">
                  We’re excited to have you join <strong>Messenger</strong> — your space to connect, chat, and share moments effortlessly.
                </p>
                <p style="margin:0 0 20px;">
                  Click the button below to open your Messenger dashboard and start chatting with friends instantly.
                </p>

                <!-- CTA Button -->
                <div style="text-align:center; margin:26px 0;">
                  <a href="${clientURL}"
                    style="background-color:#006989; color:#ffffff; padding:14px 28px; border-radius:6px; display:inline-block; font-weight:600; font-size:15px;">
                    Open hiMe
                  </a>
                </div>

                <p style="margin:20px 0 0; color:#444;">
                  If you didn’t create this account, you can safely ignore this email.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#eaebed; padding:20px 24px; text-align:left; font-size:13px; color:#555;">
                <p style="margin:0 0 6px;"><strong style="color:#006989;">Best regards,</strong><br>
                The hiME Team 💬</p>
                <p style="margin:10px 0 0; color:#777;">
                  Need help? Contact us at
                  <a href="mailto:support@hiME.com" style="color:#006989;">support@hiME.com</a>
                </p>
                <p style="margin-top:8px; font-size:12px; color:#888;">
                  &copy; ${new Date().getFullYear()} hiME Inc. All rights reserved.
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
}
