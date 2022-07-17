import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Carousel } from 'react-carousel-minimal';

function App() {
  const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: '<div><a href="https://firefox.com/">Descargar Firefox</a></div>'
      
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
    }
    
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
     
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }






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
      <div className="pagina-3 ">

        <span className="margin-left margin-top2" >
          
       <img className="estudios-width" src="https://cdn.discordapp.com/attachments/968368069514772502/998075183254474822/boniMesa_de_trabajo_6.webp" alt="" />
       <div className="position2">
       <div className="estudios-title ">Estudios</div>
       <ul className="secondary-color margin-top">
          <li>cualquier estupides ahi</li>
          <li>cualquier estupides ahi</li>
          <li>cualquier estupides ahi</li>
          <li>cualquier estupides ahi</li>

       </ul>
       </div>
        
        </span>
        <span className="min-100 margin-top2 margin-left position">
          <p className="abilities ">Lorem </p>
        </span>

      </div>
      <div className="pagina-4">
      <div className=" xxx margin-top" style={{
          padding: "0 20px"
        }}>
          <Carousel 
            data={data}
            time={2000}
            width="600px"
            height="400px"
            captionStyle={captionStyle}
            radius="10px"
            
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              minWidth: "1000px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
