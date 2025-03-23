import React from 'react';
import { gsap } from 'gsap';
import { useRef,useEffect } from 'react';
const Cursor=()=>{
const ref=useRef(null);
    useEffect(() => {
        const handleMouse = (event)=>{
            const {clientX,clientY}=event;
            gsap.to(ref.current,{
                x:clientX-10,
                y:clientY-10,
                duration:0.2,
                delay:0,
                ease:"power4.out"

            })
        }
       window.addEventListener('mousemove',handleMouse);
    
      return () => {
        window.removeEventListener('mousemove',handleMouse);
      }
    }, []);
    return (

<div ref={ref} className='fixed top-0 left-0  h-[20px] w-[20px] bg-black rounded-full  pointer-events-none mix-blend-difference z-20' />
    )
    



}
export default Cursor;