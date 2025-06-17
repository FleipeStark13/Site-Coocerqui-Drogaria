import Header from "./components/main/header/Header";
import HeroBanner from "./components/construction/hero-banner/HeroBanner";
import StoreFilter from "./components/construction/store-filter/StoreFilter";
import MensalTabloide from "./components/construction/mensal-tabloide/MensalTabloide";
import Banner from "./components/construction/banner/Banner";
import Avaliacao from "./components/construction/avaliacao/Avaliacao";
import Sac from "./components/construction/sac/Sac";
import Faq from "./components/construction/faq/Faq";
import Footer from "./components/main/footer/Footer";

import banner_whats_pc from './imgs/banner-whats.png'
import banner_whats_cell from './imgs/banner-whats-cell.png';


import './app.css';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <section>
      <HeroBanner></HeroBanner>
    </section>
    <section id="stores">
      <StoreFilter></StoreFilter>
    </section>
    <section id="tabloide-mensal">
      <MensalTabloide></MensalTabloide>
    </section>
    <section>
      <Avaliacao></Avaliacao>
    </section>
    <section id="sac">
      <Sac
      sac_mail={"sac@coocerqui.com.br"}
      sac_phone={"(15) 99753-9422"}
      />
    </section>
    <section>
      <Faq></Faq>
    </section>
    <Footer></Footer>
    </div>
  );
}

export default App;
