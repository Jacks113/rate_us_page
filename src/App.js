import './App.css';
import Rating from './components/Rating';
import Submitted from './components/Submitted';
import {useState} from "react";
// import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {

  const [rating, setRating] = useState("")

  const handleRating = ratingValue => {
    setRating(ratingValue);
    // console.log(ratingValue);
  }
  return (
      <div className="App">
        { rating ?  <Submitted rating={rating}/> : 
         <Rating handleRating = {handleRating} />}
      </div>

    
  );
}

export default App;
