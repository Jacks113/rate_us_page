export default function Submitted(props){
    const {rating} = props;
    // You selected <!-- Add rating here --> out of 5

    // Thank you!
  
    // We appreciate you taking the time to give a rating. If you ever need more support, 
    // don’t hesitate to get in touch!
  

   return <div className="thanks">
            <div className="submitted-rating">
                <img src="..\images\illustration-thank-you.svg" alt="thank-you"/>
                <p className="rated">You selected {rating} out of 5!</p>
                <h2>Thank you!</h2>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
          </div>
        
   
                
}