import { html } from 'lit';

export { html };

export const layout = data => html`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="/">
    <title-server-only>${data.title}</title-server-only>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="apple-touch-icon" sizes="180x180" href="../public/assets/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="96x96" href="../public/assets/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../public/assets/android-chrome-384x384.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../public/assets/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../public/assets/favicon-32x32.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#54e4e5">
    <link rel="stylesheet" href="../src/assets/css/globals.css"/>
    <link rel="stylesheet" href="../src/assets/css/utilities.css"/>
  </head>
  <body>
  <main class="text-center">
    ${data.content()}
  </main>
  <script type="module" src="../src/main.mjs"></script>
  </body>
  </html>
`;
