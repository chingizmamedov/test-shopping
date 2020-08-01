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
import Akksesuar from '../../../images/aksesuar.jpg';
import MainLink from '../../UI/MainLink';

const MainPage = () => {
  return (
    <div>
      <div className="row">
        <MainLink
          col="col-12 col-md-6 col-lg-4"
          img={UstGeyimi}
          name="Ust geyimleri"
          to="/KİŞİ ÜST GEYİMİ"
        />
        <MainLink
          col="col-12 col-md-6 col-lg-4"
          img={Kostyum}
          name="Kostyum"
          to="/KOSTYUMLAR VƏ PENCƏKLƏR"
        />
        <MainLink col="col-12 col-md-6 col-lg-4" img={Rubashka} name="Rubashka" to="/KÖYNƏKLƏR" />
        <MainLink col="col-12 col-md-6 col-lg-4" img={Shoes} name="Shoes" to="/ŞALVARLAR" />
        <MainLink col="col-12 col-md-6 col-lg-4" img={Polo} name="Polo" to="/T-SHIRT VƏ POLO" />
        <MainLink col="col-12 col-md-6 col-lg-4" img={Trikotaj} name="Trikotaj" to="/TRİKOTAJ" />
        <MainLink col="col-12 col-md-6" img={Plyaj} name="Plyaj" to="/ŞORT VƏ ÇİMƏRLİK GEYİMLƏRİ" />
        <MainLink col="col-12 col-md-6" img={Obuv} name="Obuv" to="/KİŞİ AYAQQABILARI" />
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
