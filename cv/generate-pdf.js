const puppeteer = require('puppeteer');
const fs = require('fs');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Read the CV content
  const cvContent = fs.readFileSync('Samuel Connor CV - Updated.txt', 'utf8');
  
  // Convert plain text to HTML with proper formatting
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 40px;
          font-size: 12px;
        }
        .header {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .section {
          margin-bottom: 20px;
        }
        .section-title {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .achievement {
          margin-bottom: 5px;
        }
        .project {
          margin-bottom: 15px;
        }
        .project-title {
          font-weight: bold;
        }
        .project-details {
          margin-left: 20px;
        }
      </style>
    </head>
    <body>
      <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">${cvContent}</pre>
    </body>
    </html>
  `;
  
  await page.setContent(htmlContent);
  await page.pdf({
    path: 'Samuel_Connor_CV_Updated_New.pdf',
    format: 'A4',
    margin: {
      top: '20mm',
      right: '20mm',
      bottom: '20mm',
      left: '20mm'
    }
  });
  
  await browser.close();
  console.log('PDF generated successfully: Samuel_Connor_CV_Updated_New.pdf');
}

generatePDF().catch(console.error); 