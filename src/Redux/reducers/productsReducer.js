import products from '../../utils/constants';

const initialState = {
  allProducts: products,
  categoriesList: [
    'KİŞİ ÜST GEYİMİ',
    'KOSTYUMLAR VƏ PENCƏKLƏR',
    'KÖYNƏKLƏR',
    'ŞALVARLAR',
    'T-SHIRT VƏ POLO',
    'TRİKOTAJ',
    'ŞORT VƏ ÇİMƏRLİK GEYİMLƏRİ',
    'KİŞİ AYAQQABILARI',
  ],
  categories: {
    'KİŞİ ÜST GEYİMİ': {
      id: 0,
      name: 'KİŞİ ÜST GEYİMİ',
    },
    'KOSTYUMLAR VƏ PENCƏKLƏR': {
      id: 1,
      name: 'KOSTYUMLAR VƏ PENCƏKLƏR',
    },
    KÖYNƏKLƏR: {
      id: 2,
      name: 'KÖYNƏKLƏR',
    },
    ŞALVARLAR: {
      id: 3,
      name: 'ŞALVARLAR',
    },
    'T-SHIRT VƏ POLO': {
      id: 4,
      name: 'T-SHIRT VƏ POLO',
    },
    TRİKOTAJ: {
      id: 5,
      name: 'TRİKOTAJ',
    },
    'ŞORT VƏ ÇİMƏRLİK GEYİMLƏRİ': {
      id: 6,
      name: 'ŞORT VƏ ÇİMƏRLİK GEYİMLƏRİ',
    },
    'KİŞİ AYAQQABILARI': {
      id: 7,
      name: 'KİŞİ AYAQQABILARI',
    },
    'KİŞİ AKSESSUARLARI': {
      id: 8,
      name: 'KİŞİ AKSESSUARLARI',
    },
  },
  selectedCat: 'all',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SELECT_CAT': {
      return {
        ...state,
        selectedCat: action.selectedCat,
      };
    }

    default:
      return {
        ...state,
      };
  }
}
