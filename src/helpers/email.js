const getEmailHtml = ({ name, email, message }) =>
  `<!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Example</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
        }
        .container {
          display: 'flex';
          direction: 'column';
          align-items: 'flex-start';
          gap: 16px;
        }
        h1 {
          color: black;
          font-size: 18px;
        }
        p {
          color: black;
          font-size: 16px;
        }
      </style>
      </head>
      <body>
      
      <div class="container">
        <h1>From: ${name}, email: ${email}</h1>
        <p>
          ${message}
        </p>
      </div>
      
      </body>
      </html>
      `;

module.exports = getEmailHtml;
