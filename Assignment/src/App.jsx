import Chef from './Chef';
import { AuthContext } from './AuthProvider';
import Carousel from './Carousel';
import Header from './Header';
import Simplicity from './Simplicity';
import Simplicy from './Simplicy';
import Footer from './footer';
import React, { useContext, useState } from 'react';

function App() {
  const { allRecipes } = useContext(AuthContext);
  const [ chefs, setChefs ] = useState([]);
  const callBack = (e) => {
    let ee = e.target.search.value;
    let eToLowerCase = ee.toLowerCase();
    let availableChefs = allRecipes.filter(chef => eToLowerCase === chef.genre);
    // if(eToLowerCase !== availableChefs.genre){
    //   alert('Search does not match any Country-name');
    //   return;
    // }
    setChefs(availableChefs);
  }
  return (
    <>
      <Header searchBox={callBack} />
      { 
        chefs.map( chef => <Chef key={chef?.chef?.id} chef={chef} ></Chef> ) 
      }
      <Simplicy />
      <Simplicity />
      <Carousel />
      <Footer />
    </>
  )
}

export default App;