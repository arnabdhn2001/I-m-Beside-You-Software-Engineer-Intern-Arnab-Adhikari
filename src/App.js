import React, {useState} from 'react';
import './App.css';
import QrGenerator from './components/QrGenerator';
import QrReader from './components/QrReader';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import QrScanner from './components/QrScanner';
function App() {
  const [start, setStart] = useState(false);
  const [cam, setCam] = useState(0);
  return (
 <> 
      <Header start={()=>setStart(!start)} status={start} />

{
  start ? (      <Row >
    <Col  sm={12} xl={4} style={{marginTop: '50px' , marginBottom: '50px'}}>
    <QrGenerator/>
    </Col>
    <Col sm = {12} xl={4} style={{marginTop: '50px' , marginBottom: '50px'}}>
    <QrReader/>
    </Col>
    <Col sm={12} xl={4} style={{textAlign: 'center', marginTop: '50px' , marginBottom: '50px'}} >
    <button onClick={()=> setCam(!cam)}>
      {
        cam ? "Turn Off Camera!" : "Scan QR With Camera"
      }
    </button>
    
    {
      cam ? <QrScanner/> : null
    }
    </Col>
    </Row>): (<h1 style={{textAlign: 'center', color: '#28a745'}}>Welcome</h1>)
}

      <Footer/>
</>
  );
}

export default App;
