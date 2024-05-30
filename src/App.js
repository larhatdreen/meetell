import React, { useState } from 'react';
import HelloScreen from './components/HelloScreen';
import Carousel from './components/Carousel';
import PreLoader from './components/PreLoader';
import "./App.css";

function App() {
  const [hello, setHello] = useState(true);
  const [loading, setLoading] = useState(true);
  if (hello) {
    setTimeout(() => {
      setHello(false);
      if (loading) {
        setTimeout(() => {
          setLoading(false);
        }, 3000)
      }
    }, 2000);
  }
  return (
    <div>
        {/* {hello ? <HelloScreen id="helloscreen"/> :
        loading ? <PreLoader/> : */}
            <Carousel/>
        {/* } */}
    </div>
  
  );
}

export default App;
