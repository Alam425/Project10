import Chef from './Chef';
import { AuthContext } from './AuthProvider';
import Carousel from './Carousel';
import Header from './Header';
import Simplicity from './Simplicity';
import Simplicy from './Simplicy';
import Footer from './footer';
import React, { useContext, useState } from 'react';
import BannerChef from './BannerChef';
import LazyLoad from 'react-lazy-load';

function App() {
  const { allRecipes } = useContext(AuthContext);
  const [chefs, setChefs] = useState([]);
  const [error, setError] = useState(false);

  const sixCards = allRecipes.slice(15, 21);

  const callBack = (e) => {
    let ee = e.target.search.value;
    let eToLowerCase = ee.toLowerCase();
    let availableChefs = allRecipes.filter(chef => chef.genre.includes(eToLowerCase));
    if (availableChefs.length < 1) {
      setError(true);
    }
    else {
      setChefs(availableChefs);
      setError(false);
    }
  }

  const nameCallBack = (e) => {
    let ee = e.target.search.value;
    let eToLowerCase = ee.toLowerCase();
    let availableChefs = allRecipes.filter(chef => chef.name.includes(eToLowerCase));
    if (availableChefs.length < 1) {
      setError(true);
    }
    else {
      setChefs(availableChefs);
      setError(false);
    }
  }


  return (
    <>
      <Header error={error} searchBox={callBack} nameSearchBox={nameCallBack} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-slate-200 rounded-xl">
        {
          chefs.map(chef => <Chef key={chef?.chef?.id} chef={chef} ></Chef>)
        }
      </div>
      <Simplicy />
      <div className="pt-20 pb-10 text-4xl text-center underline bg-slate-200 text-slate-600 font-semibold">Our Beloved Chefs At A Glance</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-5 p-10 bg-slate-200">
        {
          Array.isArray(sixCards) &&
          sixCards.map(chef => <BannerChef key={chef?.chef?.id} chef={chef} ></BannerChef>)
        }
      </div>
      <Simplicity />
      <LazyLoad>
        <Carousel />
      </LazyLoad>
      <Footer />
    </>
  )
}

export default App;