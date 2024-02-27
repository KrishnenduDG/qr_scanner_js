// script.js file

function domReady(fn) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 1000);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

domReady(function () {
  var myQr = document.getElementById("QR_CODE_result");
  var lresult = 0;
  var cresult = 0;
  // If found you qr code
  function onScanSuccess(decodeText, decodeResult) {
    if (decodeText !== lresult) {
      ++cresult;
      lresult = decodeText;

      alert("You Qr is : " + decodeText, decodeResult);
      myQr.innerHTML = `your scan $(cresults):$(decodeText) `;
    }
  }
  //Rendering Camera QR
  var htmlscanner = new Html5QrcodeScanner("QR_Reading", {
    fps: 10,
    qrbos: 250,
  });

  htmlscanner.render(onScanSuccess);
});
