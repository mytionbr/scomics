import React from 'react'

export default function Rating({rating,numReviews}) {
    
    function buildStars(){
        return (
            Array(4).map((e,i)=>
            <span >
                <i className={
                    rating >= i + 1
                    ? 'fa fa-star'
                    : rating >= i + 0.5
                    ? 'fa fa-star-half-o'
                    : 'fa fa-star-o'
                }></i>
        </span>
        )
        )
    }
    
    return (
        <div className="rating">
            {
                Array.from(Array(4)).map((e,i)=>
                    <span key={i}>
                        <i className={
                            rating >= i + 1
                            ? 'fa fa-star'
                            : rating >= i + 0.5
                            ? 'fa fa-star-half-o'
                            : 'fa fa-star-o'
                        }></i>
                </span>
               
                
                )
            }
            <span>
                {`${numReviews} reviews `}        
            </span>
           
          </div>
    )
}
