function generateRandomUPC() {
    let upc = '';
    for (let i = 0; i < 11; i++) {
        upc += Math.floor(Math.random() * 10);
    }
    const checksum = calculateUPCChecksum(upc);
    return upc + checksum;
}

function calculateUPCChecksum(upc) {
    let sum = 0;
    for (let i = 0; i < upc.length; i++) {
        sum += (i % 2 === 0 ? 3 : 1) * parseInt(upc[i]);
    }
    return (10 - (sum % 10)) % 10;
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

document.getElementById('upc').addEventListener('click', function() {
    const upc = generateRandomUPC();
    document.getElementById('code').innerText = upc;
    copyToClipboard(upc);
});
