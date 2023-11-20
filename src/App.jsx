import { useEffect, useState } from "react"
import Nav  from "./components/nav/Nav"
import Hero from './components/hero/Hero'
import About from "./components/about/About";
import AboutB from "./components/aboutB/AboutB";
import './style.css'
import MyServices from "./components/myServices/MyServices"
import GraficoEstadistico from "./components/grafico/GraficoEstadistico";
import BackgroundQ from "./components/background/BackgroundQ";
import Product from "./components/product/Product";
import Slider from "./components/slider/Slider";
import Beneficios from "./components/beneficios/Beneficios";
import Inclusion from './components/inclusion/Inclusion';
import Footer from "./components/footer/Footer"; 


function App() {

  const [perfil, setPerfil] = useState()

  useEffect( () => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setPerfil(data))
  }, [])


  return (
    <>
      {
        perfil ? (<> 
                  <Nav nombre={perfil.nombre} /> 
                  <Hero perfil={perfil} />
                  <About descripcion={perfil.descripcion} />
                  <AboutB />
                  <MyServices />
                  <GraficoEstadistico />
                  <BackgroundQ />
                  <Product />
                  <Slider /> 
                  <Beneficios />
                  <Inclusion />
                  <Footer nombre={perfil.nombre} />
                  {/* <PricePlans /> */}
                  </>
                  )
        : <h1>cargando...</h1>
      }
      
    </>
  )
}
export default App 