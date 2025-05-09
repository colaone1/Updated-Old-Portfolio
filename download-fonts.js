const https = require('https');
const fs = require('fs');
const path = require('path');

const fonts = {
    'Lexend': {
        weights: [500, 600, 700],
        url: 'https://fonts.googleapis.com/css2?family=Lexend:wght@500;600;700&display=swap'
    },
    'Cinzel': {
        weights: [400, 600, 700],
        url: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap'
    }
};

// Create fonts directory if it doesn't exist
if (!fs.existsSync('fonts')) {
    fs.mkdirSync('fonts');
}

// Function to download a file
function downloadFile(url, filename) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filename);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filename, () => {}); // Delete the file if there was an error
            reject(err);
        });
    });
}

// Function to get font URLs from Google Fonts CSS
async function getFontUrls(cssUrl) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        };
        https.get(cssUrl, options, (response) => {
            let data = '';
            response.on('data', (chunk) => data += chunk);
            response.on('end', () => {
                const urls = data.match(/https:\/\/fonts\.gstatic\.com\/s\/[^)]+\.woff2/g) || [];
                resolve(urls);
            });
        }).on('error', reject);
    });
}

// Main function to download all fonts
async function downloadFonts() {
    for (const [fontName, fontInfo] of Object.entries(fonts)) {
        console.log(`Processing ${fontName}...`);
        try {
            const urls = await getFontUrls(fontInfo.url);
            console.log(`Found ${urls.length} URLs for ${fontName}`);
            
            for (let i = 0; i < urls.length; i++) {
                const url = urls[i];
                const weight = fontInfo.weights[i];
                const filename = path.join('fonts', `${fontName.toLowerCase()}-${weight}.woff2`);
                
                console.log(`Downloading ${filename} from ${url}`);
                await downloadFile(url, filename);
                console.log(`Successfully downloaded ${filename}`);
            }
        } catch (error) {
            console.error(`Error processing ${fontName}:`, error);
        }
    }
}

// Run the download
downloadFonts().then(() => {
    console.log('Font download process completed!');
}).catch((error) => {
    console.error('Error in font download process:', error);
}); 