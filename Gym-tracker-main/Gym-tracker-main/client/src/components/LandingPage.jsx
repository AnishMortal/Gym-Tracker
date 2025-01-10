import React from 'react'
import LandNav from './LandNav'

function LandingPage() {
  return (
    <div className=''>
        <LandNav />
        <h2 className='mini-title absolute top-1/2 left-1/4 z-50 text-3xl ' >
            Are you ready to become the
            <span className='text-blue-400'>&nbsp; Local Mass Monstrosity !!</span>
        </h2>
        <div className="videoPlayer absolute top-0 z-0 h-screen overflow-hidden">
            <video autoPlay muted>
                <source src="bg-vid.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
  )
}

export default LandingPage