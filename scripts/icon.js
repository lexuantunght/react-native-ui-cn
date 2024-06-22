const fs = require('fs');

const args = process.argv.slice(2);

const inputDir = args[0] + '/';
const outDir = args[1];
fs.readdir(inputDir, async (err, filenames) => {
    if (err) {
        console.error(err);
        return;
    }
    const iconMap = {};
    for (const filename of filenames) {
        if (filename.endsWith('.svg')) {
            const content = await readFile(inputDir + filename);
            iconMap[filename.substring(0, filename.length - 4)] = content;
        }
    }
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
    }
    fs.writeFile(`${outDir}/icon.map.json`, JSON.stringify(iconMap), () => {
        console.log(`Generated ${Object.keys(iconMap).length} icons into ${outDir}`);
    });
});

function readFile(filePath, encode = 'utf-8') {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encode, function (e, content) {
            if (e) {
                console.error(e);
                reject(e);
                return;
            }
            resolve(content);
        });
    });
}
