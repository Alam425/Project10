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
  const [chef, setChefs] = useState([]);
  const [er, setEr] = useState('');
  const callBack = (e) => {
    let ee = e.target.search.value;
    if ((chef.genre).toLowerCase() !== (ee).toLowerCase()) {
      setEr('Oops, Spelling Mistake!! Please Provide Correct Country Name')
    }
    let chefs = allRecipes.filter(chef => (chef.genre).toLowerCase() === (ee).toLowerCase());
    let jj = chefs[0];
    setChefs(jj);
  }
  // console.log(chef);

  return (
    <>
      <Header searchBox={() => callBack()} />
      <p className="text-xl text-warning font-bold">{er}</p>
      <Chef key={chef?.chef?.id} chef={chef} ></Chef>
      <Simplicy />
      <Simplicity />
      <Carousel />
      <Footer />
    </>
  )
}

export default App;