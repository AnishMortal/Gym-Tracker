import { motion } from 'framer-motion';
import React, { useState } from 'react'

function CardCouple(props) {
    const {cardOne, cardOneImg, cardTwo, cardTwoImg} = props;
    // const [onCard, setOnCard] = useState(false);
    const [card1, setcard1] = useState(false);
    const [card2, setcard2] = useState(false);

  return (
    <div className='CardContainer flex items-center justify-center gap-2 p-4 px-20'>
        {/* card-1 */}
        <div className="card w-1/2 flex flex-col gap-3">
            <div className="cardInfo flex items-center gap-3">
                <div className="cardIndex h-3 w-3 rounded-full bg-white"></div>
                <div className="cardTitle">
                    <h3 className='z-10 '>{cardOne}</h3>
                </div>
            </div>

            <div className= 'w-full h-full'
                onMouseEnter={() => {setcard1(true)}}
                onMouseLeave={() => {setcard1(false)}}>
                <div className='relative w-full h-full'>
                    <h1 className='absolute left-full mt-[50%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-7xl text-yellow-200 z-50 overflow-hidden'>
                        {cardOne.split('').map((item, index)=>{
                            return(
                                <motion.span
                                initial={{y:'100%'}}
                                animate={card1 ? ({y: '0%'}) : ({y: '100%'})}
                                transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.04, duration: 0.4}}
                                key={index} className='inline-block'>
                                    {item}
                                </motion.span>
                            )
                        })}
                    </h1>
                </div>

                <div className="cardHeroContainer h-[75vh] rounded-xl hover:scale-[97%] duration-500 overflow-hidden">
                    <img className='h-full w-full rounded-xl hover:scale-110 duration-500' src={cardOneImg} />
                </div>
            </div>

        </div>

        {/* card-2 */}
        <div className="card w-1/2 flex flex-col gap-3">
            <div className="cardInfo flex items-center gap-3">
                <div className="cardIndex h-3 w-3 rounded-full bg-white"></div>
                <div className="cardTitle">
                    <h3>{cardTwo}</h3>
                </div>
            </div>
            <div className= 'w-full h-full'
                onMouseEnter={() => {setcard2(true)}}
                onMouseLeave={() => {setcard2(false)}}>
                <div className='relative w-full h-full'>
                    <h1 className='absolute right-4/5 mt-[50%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-7xl text-yellow-200 z-50 overflow-hidden'>
                        {cardTwo.split('').map((item, index)=>{
                            return(
                                <motion.span
                                initial={{y:'100%'}}
                                animate={card2 ? ({y: '0%'}) : ({y: '100%'})}
                                transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.04, duration: 0.4}}
                                key={index} className='inline-block'>
                                    {item}
                                </motion.span>
                            )
                        })}
                    </h1>
                </div>

                <div className="cardHeroContainer h-[75vh] rounded-xl hover:scale-[97%] duration-500 overflow-hidden">
                    <img className='h-full w-full rounded-xl hover:scale-110 duration-500' src={cardTwoImg}/>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default CardCouple