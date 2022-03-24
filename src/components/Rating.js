import { useState } from "react";

export default function Rating(props){

    const [rate, setRate] = useState("");

    const removeClasses = (elementId) => {
        const elementsByClass = document.getElementsByClassName("ratingButton");
       
        [...elementsByClass].forEach(element =>{
            if (element.id !== elementId){
                element.classList.add("not-selected");
                element.classList.remove("selected");

                return;
            }

                element.classList.add("selected");
        })
       
        
        
    }
    const handleClick = e => {
        let rating = e.target.innerText;
        let elementId = e.target.id;
        // console.log("last id is:" + e.target.id);
        setRate(rating);
        removeClasses(elementId);
    }

    const {handleRating} = props;

    const send = e => {
        e.preventDefault();
        if (rate !== "" && rate !== null && rate !== undefined){
            // console.log(rate);
            handleRating(rate);
        }
    }

    return <div className="rateUs">
                <div className="description-rating">
                    <figure className="star"> 
                        <img src="..\images\icon-star.svg" alt="star"/>
                    </figure>
                    
                    <h2>How did we do?</h2>
                    <p>Please let us know how we did with your support request. All feedback is appreciated 
                        to help us improve our offering!
                    </p>
                </div>

                <div className="ratingContainer">
                    <p className="ratingButton not-selected" id="rating1" onClick= {handleClick}>1</p>
                    <p className="ratingButton not-selected" id="rating2" onClick= {handleClick}>2</p>
                    <p className="ratingButton not-selected" id="rating3" onClick= {handleClick}>3</p>
                    <p className="ratingButton not-selected" id="rating4" onClick= {handleClick}>4</p>
                    <p className="ratingButton not-selected" id="rating5" onClick= {handleClick}>5</p>
                </div>
                    <button id="submitButton" onClick={send} type="submit">Submit</button>
                
                
               
                
            </div>
            
}