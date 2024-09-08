import React from 'react'
import {useState,useEffect} from 'react'

const TextChanges = () => {
    const texts = ["Hi, i'm jash","Hi, i'm jash","Hi, i'm jash"]
    const [curtext,setcurtext]  = useState("");
    const [endValue,setendValue] = useState(true);
    const [isForward,setisForward] = useState(true);
    const [idx,setidx] = useState(0);

    useEffect(() => {
        const internalid = setInterval(() => {
          // Update the text displayed based on current index and endValue
          setcurtext(texts[idx].substring(0, endValue));
      
          // Adjust endValue for typing or deleting animation
          if (isForward) {
            setendValue((prev) => prev + 1);
          } else {
            setendValue((prev) => prev - 1);
          }
      
          // Check if the text is fully typed
          if (endValue > texts[idx].length + 10) {
            setisForward(false);
          }
      
          // Check if the text is fully deleted
          if (endValue < 2.1) {
            setisForward(true);
            // Move to the next text in the array
            setidx((prev) => (prev + 1) % texts.length);
          }
        }, 50);
      
        // Cleanup interval on component unmount
        return () => clearInterval(internalid);
      
      }, [endValue, isForward, idx, texts]);
      

  return (
    <div className='transition ease duration-300 '>{curtext}
      
    </div>
  )
}

export default TextChanges
