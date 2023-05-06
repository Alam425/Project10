import AllRecipes from './AllRecipes';
import Carousel from './Carousel';
import Header from './Header';
import Simplicity from './Simplicity';
import Simplicy from './Simplicy';
import Footer from './footer';
import React from 'react';

function App() {

  return (
    <>
    {/* <>{
      allRecipes.map(r => <AllRecipes key={r.id} recipe={r}></AllRecipes>)
    }</> */}
      <Header />
      <Simplicy />
      <Simplicity />
      <Carousel />
      <Footer />
    </>
  )
}

export default App;
