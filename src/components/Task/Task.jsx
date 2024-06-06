import { useState , useEffect } from 'react'
import './Task.css'
function Counter() {
    const [count, setCount] = useState(0);
    const [decreaseButtonVisible, setDecreaseButtonVisible] = useState(false);
    const [showPopup, setShowPopup] = useState(true);
    const [showPopup2, setShowPopup2] = useState(false);

    useEffect(() => {setShowPopup(true); }, []);
    useEffect(() => { setShowPopup2(false); }, []);

    useEffect(()=>{
      if (count === 10 || count % 100 === 0 || count % 1000 === 0){
        document.querySelector('.container').style.backgroundColor ='pink';
      }
      else document.querySelector('.container').style.backgroundColor ='white';
    } , [count])
  
    
   
  
  
    const increaseCount = () => {
      if (count < 1000) {
        if (count >= 100) {
          setCount(count + 100);
        } else if (count >= 10) {
          setCount(count + 10);
        } else {
          setCount(count + 1);
        }
      } else {
        setDecreaseButtonVisible(true);
      }
    };
  
    const decreaseCount = () => {
        if (count > 0) {
          if (count > 100) {
            setCount(count - 100);
          } else if (count > 10) {
            setCount(count - 10);
          } else {
            setCount(count - 1);
          }
      
         
        }
      };

        const closePopup = () => {
          setShowPopup(false);
          
          

        };
        const closePopup2 = () => {
          setShowPopup2(false);
          
          

        };
        useEffect(() => {
          if (count === 10 || count % 100 === 0 || count % 1000 === 0) {
            setShowPopup2(true);
          } else {
            setShowPopup2(false);
          }
        }, [count]);

        
      
    return (
      <div className='container'>
        <button className='butn-increas' onClick={increaseCount}>Increase Count</button>
        {decreaseButtonVisible && <button className='butn-decreas' onClick={decreaseCount}>Decrease Count</button>}
        <div className='count-div'>
        <p>{count}</p>
           </div>
           
           <div>
      {showPopup && (
        <div className='popup1'>
          <h1>Welcome !</h1>
          <button className='btn-close' onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
    <div>
      {showPopup2 && (
        <div className='popup2'>
          <h1>The Number ({count}) is either equal to 10 , a multiple of 100 ,or a multiple of </h1>
          <button className='btn-close' onClick={closePopup2}>Close</button>
        </div>
      )}
    </div>
          
        
      </div>
    );
  }
    
  
  
  export default Counter;
  