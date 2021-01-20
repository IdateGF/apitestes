import React, { useState } from 'react';

// import { Container } from './styles';

function Input() {

  const [cert64, setCert64] = useState();
  const [pem, setPem] = useState({});

  const toBase64 = file => new Promise((res, rej)=>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => res(reader.result);
    reader.onerror = error => rej(error);
  })
  async function handleFilmes(){
    const file = document.querySelector("#fileipt").files[0];
    let url = await toBase64(file)
    setCert64(url);
  }
  return (
    <>
      <input type="file" name="fileinput" id="fileipt" onChange={handleFilmes}/><br/>
      <label htmlFor="pass">Senha: </label>
      <input type="text" id="pass"/><br/>
      <button onClick={async ()=>{
        let res = await fetch('http://localhost:3333/cert', {
          method: 'post',
          body: JSON.stringify({"cert": cert64, "password": document.querySelector("#pass").value}),
          mode: 'cors',
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        });
        let certjson = await res.json();
        setPem(certjson);
        
      }}>Enviar</button><br/>
      <pre>{pem.cert}<br/><br/>{pem.key}</pre>
    </>
  );
}

export default Input;