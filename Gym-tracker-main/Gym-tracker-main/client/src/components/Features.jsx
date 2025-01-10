import React from 'react'
import CardCouple from './CardCouple'

function Features() {
  return (
    <div className='bg-slate-950 h-fit w-screen relative top-full overflow-hidden'>
        <div className="features mt-10 text-5xl px-8 py-10 border-b-[0.5px] border-zinc-800">
            <h3>Features</h3>
        </div>
        <div className="cardCoupleContainer px-8 py-8 flex flex-col gap-14">
            <CardCouple 
            cardOne='Personal Training'
            cardOneImg='pt.jpg'
            cardTwo='BMI Calculator'
            cardTwoImg='diet.jpg'
            />

            <CardCouple 
            cardOne='Workout Tracker'
            cardOneImg='wtrack.jpg'
            cardTwo='Calorie Tracker'
            cardTwoImg='diet.jpg'
            />
        </div>
    </div>
  )
}

export default Features