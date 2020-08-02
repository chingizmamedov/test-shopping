import React from 'react';
import { connect } from 'react-redux';
import UstGeyimi from '../../../images/ust-geyimi.jpg';
import Kostyum from '../../../images/kostyum.jpg';
import Rubashka from '../../../images/rubashka.jpg';
import Shoes from '../../../images/shoes.webp';
import Polo from '../../../images/polo.png';
import Trikotaj from '../../../images/trikotaj.jpg';
import Plyaj from '../../../images/plyaj.jpeg';
import Obuv from '../../../images/obuv.jpg';
import MainLink from '../../UI/MainLink';

const MainPage = () => {
  return (
    <div>
      <div className="row">
        <MainLink
          col="col-12 col-md-6 col-lg-4"
          img={UstGeyimi}
          name="KİŞİ GEYİMİ"
          to="/KİŞİ ÜST GEYİMİ"
        />
        <MainLink
          col="col-12 col-md-6 col-lg-4"
          img={Kostyum}
          name="KOSTYUMLAR"
          to="/KOSTYUMLAR VƏ PENCƏKLƏR"
        />
        <MainLink col="col-12 col-md-6 col-lg-4" img={Rubashka} name="KÖYNƏKLƏR" to="/KÖYNƏKLƏR" />
        <MainLink col="col-12 col-md-6 col-lg-4" img={Shoes} name="ŞALVARLAR" to="/ŞALVARLAR" />
        <MainLink col="col-12 col-md-6 col-lg-4" img={Polo} name="POLO" to="/T-SHIRT VƏ POLO" />
        <MainLink col="col-12 col-md-6 col-lg-4" img={Trikotaj} name="TRİKOTAJ" to="/TRİKOTAJ" />
        <MainLink
          col="col-12 col-md-6"
          img={Plyaj}
          name="ÇİMƏRLİK GEYİMLƏRİ"
          to="/ŞORT VƏ ÇİMƏRLİK GEYİMLƏRİ"
        />
        <MainLink
          col="col-12 col-md-6"
          img={Obuv}
          name="KİŞİ AYAQQABILARI"
          to="/KİŞİ AYAQQABILARI"
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ productsReducer }) => {
  return {
    products: productsReducer.allProducts,
  };
};

export default connect(mapStateToProps)(MainPage);
