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
      <section>
        <Header></Header>
      </section>
      <section>
        <HeroBanner></HeroBanner>
      </section>
      <section>
        <StoreFilter></StoreFilter>
      </section>
      <section>
        <MensalTabloide></MensalTabloide>
      </section>
      <section>
        <Banner
          mobile_src={banner_whats_cell}
          pc_src={banner_whats_pc}
        />
      </section>
      <section>
        <Avaliacao></Avaliacao>
      </section>
      <section>
        <Sac
          sac_mail={"sac@coocerqui.com.br"}
          sac_phone={"(15) 99753-9422"}
        />
      </section>
      <section>
        <Faq></Faq>
      </section>
      <section>
        <Footer></Footer>
      </section>



    </div>
  );
}

export default App;
