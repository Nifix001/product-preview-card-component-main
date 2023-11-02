import React, { useEffect, useState } from 'react';
import img from '../src/assets/image-product-desktop.jpg';
import img1 from '../src/assets/image-product-mobile.jpg';
import icon from '../src/assets/icon-cart.svg';

function App() {
  const [screen, setScreen] = useState(window.innerWidth);

  useEffect(() =>{
    const handleResize = () => {
      setScreen(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <main className='h-screen flex w-screen justify-center items-center bg-cream xs:max-lg:p-6'>
        <div className='flex w-2/5 h-3/5 shadow-xl rounded-xl xs:max-lg:w-full xs:max-lg:h-full xs:max-lg:grid xs:max-lg:grid-rows-2'>
            <img src={screen < 1000 ? img1 : img} alt="product" className='rounded-l-xl xs:max-lg:rounded-t-xl object-fit w-full h-full' />
          <div className='px-6 py-8 bg-white rounded-r-xl grid xs:max-lg:rounded-b-xl'>
            <h3 className='font-mont opacity-70 tracking-widee'>PERFUME</h3>
            <h1 className='font-Frau text-5xl text-black font-extrabold'>Gabreille Essence Eau De Parfum</h1>
            <p className='font-Frau opacity-70 text-xl font-medium'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            <div className='flex gap-8 items-center mb-2'>
              <p className='font-Frau text-5xl text-dc font-bold'>$149.99</p>
              <p className='font-mont opacity-50 line-through'>$169.99</p>
            </div>
            <button className='bg-dc flex justify-center items-center text-white text-mont font-medium text-xl rounded-md gap-3 p-1 hover:bg-green-900'> <img src={icon} alt="icon" /> Add to Cart</button>
          </div>
        </div>
    </main>
  )
}

export default App
