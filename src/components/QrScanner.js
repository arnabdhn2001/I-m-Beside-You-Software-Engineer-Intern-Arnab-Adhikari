import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const QrScanner = (props) => {
  const [data, setData] = useState('No result');
  const [copy, setCopy] =useState(0);
  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <Form.Control type="text" value={data} disabled />
      <Button variant="success" style={{marginTop: '10px'}} onClick={()=>{
          navigator.clipboard.writeText(data); setCopy(1);
      }}>{
      copy ? "Copied!" : 'Copy Text!'
        
      }</Button>
    </>
  );
};

export default QrScanner;