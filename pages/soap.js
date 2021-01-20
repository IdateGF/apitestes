import React from 'react';
import Head from 'next/head'

async function getSoap() {
  const url = "https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?WSDL";
  var xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
    <soapenv:Body>
      <tns:consultaCEP xmlns:tns="http://cliente.bean.master.sigep.bsb.correios.com.br/">
       <cep>30520240</cep>
      </tns:consultaCEP>
     </soapenv:Body>
    </soapenv:Envelope>`
  //   var xmlhttp = new XMLHttpRequest();
  //   xmlhttp.open('POST', url, true);

  //   xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
  //   xmlhttp.setRequestHeader("Content-Type", "text/xml");

  //   xmlhttp.onreadystatechange = () => {console.log(xmlhttp.responseText)};

  //   xmlhttp.send(`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  //   <soapenv:Body>
  //    <tns:consultaCEP xmlns:tns="http://cliente.bean.master.sigep.bsb.correios.com.br/">
  //     <cep>30520240</cep>
  //    </tns:consultaCEP>
  //   </soapenv:Body>
  //  </soapenv:Envelope>`)

  let res = await fetch(url, {
    crossDomain: true,
    method: 'post',
    body: xml,
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'text/xml',
      'Accept': '*/*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT'
    })
  });
  return (res.setHeader('Access-Control-Allow-Origin', '*'))
}

function soap() {
  return <>
    <button onClick={getSoap}>Enviar</button>
  </>;
}

export default soap;