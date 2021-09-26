import React from 'react'

export default function Rating({rating,numReviews,showNumReviews = true}) {
    
      
    return (
        <div className="rating">
            {
                Array.from(Array(5)).map((e,i)=>
                    <span key={i}>
                        <i className={
                            rating >= i + 1
                            ? 'fa fa-star'
                            : rating >= i + 0.5
                            ? 'fas fa-star-half-alt'
                            : 'fa fa-star not-filled'
                        }></i>
                </span>)
            }
            {showNumReviews && (
                 <span className="reviews">
                 {`${numReviews} reviews `}        
             </span>
            )}
           
           
          </div>
    )
}
