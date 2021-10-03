import React from 'react'


const Product = () => {
    return (

        <div className = "prod-basic">
            <div className="heading">
                <h1>Productivity:</h1>
            </div>
            <div className="Productivity-Rating">
                <div className = "rating">
                    <input type="radio" name="star" className="star" id="star1"/><label for="star1">
                    </label>
                    <input type="radio"  name="star" className="star" id="star2"/><label for="star2">
                    </label>
                    <input type="radio"  name="star" className="star" id="star3"/><label for="star3">
                    </label>
                    <input type="radio"  name="star" className="star" id="star4"/><label for="star4">
                    </label>
                    <input type="radio"  name="star" className="star" id="star5"/><label for="star5">
                    </label>
                </div> 
            </div>
        </div>
 
    )
}


export default Product