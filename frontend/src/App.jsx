import React from 'react'
import img from '../src/assets/image-product-desktop.jpg'

function App() {

  return (
    <main>
      <div>
        <div className=''>
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <h5>Perfume</h5>
            <h2>Gabreille Essence Eau De Parfum</h2>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
