import React from 'react';
import img from '../src/assets/image-product-desktop.jpg';
import icon from '../src/assets/icon-cart.svg';

function App() {

  return (
    <main className='h-screen flex w-screen justify-center items-center bg-cream'>
        <div className='flex w-2/5 h-3/5 shadow-xl rounded-xl'>
            <img className='rounded-l-xl' src={img} alt="product" />
          <div className='px-8 py-6 bg-white rounded-r-xl grid gap-2'>
            <h3 className='font-mont text-xs opacity-70 tracking-widee'>PERFUME</h3>
            <h2 className='font-Frau text-4xl text-black font-extrabold'>Gabreille Essence Eau De Parfum</h2>
            <p className='font-Frau opacity-70 text-base font-medium'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            <div className='flex justify-between items-center'>
              <p className='font-Frau text-3xl text-dc font-bold'>$149.99</p>
              <p className='font-mont opacity-50 line-through'>$169.99</p>
            </div>
            <button className='bg-dc flex justify-center items-center text-white  rounded-md hover:bg-green-900'> <img src={icon} alt="icon" /> Add to Cart</button>
          </div>
        </div>
    </main>
  )
}

export default App
