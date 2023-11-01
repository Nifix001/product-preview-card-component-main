import React from 'react';
import img from '../src/assets/image-product-desktop.jpg';
import icon from '../src/assets/icon-cart.svg';

function App() {

  return (
    <main className='h-screen flex w-screen justify-center items-center bg-cream'>
        <div className='flex w-2/5 h-3/5 shadow-xl rounded-xl'>
            <img className='rounded-l-xl' src={img} alt="" />
          <div className='px-8 py-6'>
            <h3 className='font-mont text-sm opacity-80'>PERFUME</h3>
            <h2 className='font-Frau text-3xl text-black'>Gabreille Essence Eau De Parfum</h2>
            <p className='font-Frau text-sm opacity-80'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
            <div className='flex'>
              <p>$149.99</p>
              <p>$169.99</p>
            </div>
            <button className='bg-green'> <img src={icon} alt="icon" /> Add to Cart</button>
          </div>
        </div>
    </main>
  )
}

export default App
