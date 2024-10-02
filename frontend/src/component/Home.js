
import React from 'react'
import Header from './Header'
import About from './About'
import Login1 from './Login1'
import '../css/home.css'
function Home() {
  
  return (
    <div  >
       
      <Header/>
      <div className='container-fluid row home-background'>
        <div className="col-md-6">
      <About/>
      </div>
      <div className="col-md-6 ">
      <Login1/>
      </div>
      </div>
    </div>
  )
}

export default Home

