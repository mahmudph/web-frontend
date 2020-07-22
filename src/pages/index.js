import React from "react";
import {
  SEO,
  Join,
  About,
  Visi,
  Misi,
  Events,
  Navbar,
  Banner,
  Footer,
  Media,
  Sponsor,
} from "components/index";

import "~/node_modules/bootstrap/dist/css/bootstrap.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <SEO />
        <main style={{ backgroundColor: "#fafafa" }}>
          <Navbar />
          <Banner />
          <Join />
          <Events />
          <About />
          <Visi
            judul="Visi"
            konten1="Menciptakan SDM khususnya masyarakat Sumatera Selatan untuk memiliki kemampuan daya saing yang unggul di bidang digital"
          />
          <Visi judul="Misi" konten1={<Misi />} />
          <Media />
          <Sponsor />
          <Footer />
        </main>
      </div>
    );
  }
}

export default Home;
