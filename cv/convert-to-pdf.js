const puppeteer = require('puppeteer');
const path = require('path');

async function convertHTMLToPDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Load the HTML file
    const htmlPath = path.join(__dirname, 'Samuel_Connor_CV_Updated.html');
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    
    // Generate PDF
    await page.pdf({
        path: 'Samuel_Connor_CV_Updated.pdf',
        format: 'A4',
        margin: {
            top: '15mm',
            bottom: '15mm',
            left: '15mm',
            right: '15mm'
        },
        printBackground: true
    });
    
    console.log('PDF generated successfully: Samuel_Connor_CV_Updated.pdf');
    await browser.close();
}

convertHTMLToPDF().catch(console.error); 