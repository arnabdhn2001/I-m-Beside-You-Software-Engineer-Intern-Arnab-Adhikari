import React, {useState} from 'react'
import QrScanner from 'qr-scanner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function QrReader() {
const [image, setImage] =  useState(false);
const [text, setText] = useState("Upload An Image To Detect"); 
const [copy, SetCopy] = useState(0);
const handleChange = (e)=>{
    setImage(URL.createObjectURL(e.target.files[0]));
    QrScanner.scanImage(e.target.files[0]).then(res => {setText(res);}).catch(err => console.log(err));
    SetCopy(0);
}
  return (
    <div style={{textAlign: 'center'}}>
     
    <Form.Control type="file" size="md" onChange={handleChange} />
{
  image ? (<img src = {image} style={{marginTop: '10px'}} height={300} width={300} alt="none"/>) : (null)
}
<Form.Control style={{marginTop: '10px'}} type="text" value={text} placeholder="Normal text" disabled={true}/>
<Button variant="success" style={{marginTop: '10px'}} onClick={()=>{
  navigator.clipboard.writeText(text);
  SetCopy(1);
}}>{
  copy ? "Copied!" : 'Copy Text!'
}</Button>
    </div>
  )
}
