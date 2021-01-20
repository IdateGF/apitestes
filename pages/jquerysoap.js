import React from 'react';

let $ = require('jquery');
require('jquery.soap');

function request(){
  $.soap({
    url:'https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente',
    method: 'consultaCEP',
    data:{
      cep: '35669000'
    },

    success: (res) =>{
      console.log(res)
    },
    error: (res) =>{
      console.log(res)
    }
  })
}

function jqsoap() {
  return <>
    <button onClick={request}>submit</button>
  </>;
}

export default jqsoap;