import { useState } from "react";


import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="pagina-uno">
        <Navbar />
        <div className="contenedor-presentacion">
          <div className="presentacion-uno">
            <h1>Hola </h1> <br />
            <h2 className="titulo">Soy Yandy Briceño</h2>
          </div>

          <div className="presentacion-dos">
            <h2>Full-Stack Web-Developer</h2>
          </div>

          <div className="button">
            <button className="Contact-me-btn">Contactame</button>
          </div>
          <div className="icons">
            <i className="fa-brands fa-github fa-3x"></i>

            <i className="fa-brands fa-linkedin-in fa-3x"></i>
          </div>
        </div>

        <img className="se" src="https://cdn.discordapp.com/attachments/968368069514772502/997768504713429062/boniMesa_de_trabajo_8.webp" alt="" />
      </div>
      <div className="second-container">
        <span className="aboutme-text margin-top">
          <h2 className="principal-color margin-top">Acerca de mi</h2>
          <p className="secondary-color margin-top">
            Hola, soy Yandy: Una persona trabajadora, alegre, responsable,
            soñadora y apasionada por la programación. Entre las cosas que mas
            disfruto está la de trabajar en equipo, asumir el lidezgo en pro de
            mejorar mi ambiente laboral y la de mis compañeros; por eso
            actualmente me encuentro trabajando para una compañia que se en
            encarga del procesamiento de pagos para multiples plaformas a nivel
            mundial. Para mejorar mis habilidades y profundizar mis
            conocimientos estoy estudiando ingenería en sofware y desarrollo we
            full-stack en Academlo, considero que debo seguir aprendiendo,
            nutriendome con diferenter modalidades de estudio con el fin de
            llegar a las personas y prestarles mis servivios como una forma de
            aportar a la sociedad que me ha visto crecer en lo personal y
            profesional.
          </p>

        </span>
        <span className="margin-left">
        <img className="aboutme-img" src="https://cdn.discordapp.com/attachments/968368069514772502/997768325243359323/boniMesa_de_trabajo_4.webp" alt="" />
        </span>
        
        
      


      </div>
      <div className="pagina-3 margin-top">

        <span className="margin-left" >
          
       <img className="estudios-width" src="https://cdn.discordapp.com/attachments/968368069514772502/998075183254474822/boniMesa_de_trabajo_6.webp" alt="" />
       <div className="position2">
       <div className="estudios-title ">Estudios</div>
       <ul className="secondary-color margin-top2">
          <li>cualquier estupides ahi</li>
          <li>cualquier estupides ahi</li>
          <li>cualquier estupides ahi</li>
          <li>cualquier estupides ahi</li>

       </ul>
       </div>
        
        </span>
        <span className="min-100 margin-top margin-left position">
          <p className="abilities ">Lorem </p>
        </span>

      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
