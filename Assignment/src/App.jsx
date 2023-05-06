import AllChef from './AllChef';
import { AuthContext } from './AuthProvider';
import Carousel from './Carousel';
import Header from './Header';
import Simplicity from './Simplicity';
import Simplicy from './Simplicy';
import Footer from './footer';
import React, { useContext, useState } from 'react';


function App() {
  const {allRecipes} = useContext(AuthContext);
  const [chef, setChefs] = useState([]);
  const callBack = ( e ) => {
    let ee = e.target.search.value;
    let chefs = allRecipes.filter(chef => (chef.genre).toLowerCase() === (ee).toLowerCase());
    setChefs(chefs);
  }

  return (
    <>
      <Header searchBox={()=>callBack()} />
      {/* <AllChef chef={chef} ></AllChef> */}
      <Simplicy />
      <Simplicity />
      <Carousel />
      <Footer />
    </>
  )
}

export default App;