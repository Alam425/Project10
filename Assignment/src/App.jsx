// import AllChef from './AllChef';
import e from 'express';
import AllChef from './AllChef';
import { AuthContext } from './AuthProvider';
import Carousel from './Carousel';
import Header from './Header';
import Simplicity from './Simplicity';
import Simplicy from './Simplicy';
import Footer from './footer';
import React, { useContext } from 'react';


function App() {
  const {allRecipes} = useContext(AuthContext);
  const callBack = (e) => {
    console.log(e.target.search.value);
    // const chef = allRecipes.filter(chef => {
    //   chef.genre == e.target.search.value;
    // })
  }

  return (
    <>
      <Header searchBox={callBack} />
      {
        
      }
      {/* <AllChef allrecipes={chef} ></AllChef> */}
      <Simplicy />
      <Simplicity />
      <Carousel />
      <Footer />
    </>
  )
}

export default App;