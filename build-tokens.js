const fs = require('fs');

const rawData = fs.readFileSync('tokens.json', 'utf8');
const tokens = JSON.parse(rawData);

let cssContent = "/* Generalva tokens.json-bol */\n:root {\n";

for (const [key, value] of Object.entries(tokens.primitive.green)) {
    cssContent += `  --green-${key}: ${value.value};\n`;
}

cssContent += "}\n";

fs.writeFileSync('generated-tokens.css', cssContent);
console.log('Tokenek sikeresen generalva!');