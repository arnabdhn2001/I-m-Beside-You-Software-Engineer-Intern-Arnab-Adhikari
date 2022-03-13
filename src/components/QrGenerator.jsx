import React, {useState} from 'react'
import QRCode from "qrcode.react";
import Form from 'react-bootstrap/Form';

export default function QrGenerator() {
const [qr, setqr] = useState(false);
const setQR = (e)=>{
    setqr(e.target.value);
}
const downloadQR = () => {
    const canvas = document.getElementById("qr");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "GeneratedQr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div style={{textAlign: 'center'}}>
        
         <Form.Control type="text" placeholder="Enter A Text To Generate QR" onChange={setQR}/>
     
     {
       qr ? (<div>
        <QRCode
          id="qr"
          value={qr}
          size={290}
          level={"H"}
          includeMargin={true}
        />
        <br/>
        <a onClick={downloadQR}><button > Download QR </button></a>
      </div>) : (null)
     }
    </div>
  )
}