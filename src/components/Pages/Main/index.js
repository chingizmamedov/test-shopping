import React from 'react';
import { connect } from 'react-redux';
import UstGeyimi from '../../../images/ust-geyimi.jpg';
import Kostyum from '../../../images/kostyum.jpg';
import Rubashka from '../../../images/rubashka.jpg';
import Shoes from '../../../images/shoes.webp';
import MainLink from '../../UI/MainLink';

const MainPage = () => {
  return (
    <div>
      <div className="row">
        <MainLink img={UstGeyimi} name="Ust geyimleri" />
        <MainLink img={Kostyum} name="Ust geyimleri" />
        <MainLink img={Rubashka} name="Ust geyimleri" />
        <MainLink img={Shoes} name="Ust geyimleri" />
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
