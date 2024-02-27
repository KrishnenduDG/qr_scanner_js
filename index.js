// Targetting the Containers
const qrScannerDiv = document.getElementById("QR_Reading");
const qrResultDiv = document.getElementById("QR_CODE_result");

// Callback for the scenario when scan is successful
const onScanSuccess = (decodeText, decodeResult) => {
  var lresult = 0;
  var cresult = 0;
  if (decodeText !== lresult) {
    ++cresult;
    lresult = decodeText;

    alert("You Qr is : " + decodeText, decodeResult);
    qrResultDiv.innerHTML = `your scan ${cresult}:${decodeText} `;
  }
};

// On DOMContentLoaded event, the scanner is initialised and mounted
window.addEventListener("DOMContentLoaded", () => {
  var htmlscanner = new Html5QrcodeScanner("QR_Reading", {
    fps: 10,
    qrbos: 250,
  });

  htmlscanner.render(onScanSuccess);
});
