import React from 'react'
import data from "../data.json"
import "./Home.css"


console.log(data)
const Home = () => {
  return (
    <div className='main' > 
        {data.map((el)=>{
            return (
                 <>
                 <div className='show'>

                    <div className='food_box'> 
                        <div>
                            <img className='img' src={el.img} alt="" />
                        </div>
                        <div className='deatil'>
                            <h2 style={{color:"red"}}>{el.name}</h2>
                            <p className='gray'>{el.categories.join(", ")}</p>
                            <p className='gray'>{`Cost Rs.${el.cost_for_one} for one`}</p>
                            <p className='black'>Min Rs. 50 ~ Up to 30 min</p>
                            <p className='black'>Accepts online payment only</p>
                        </div>
                        <div className='vots'>  
                                <p className='stars' >{el.stars}</p>  
                                <p className='gray' style={{fontSize:"small"}}>{`${el.total_votes} votes`}</p>
                                <p className='gray' style={{fontSize:"small"}}>{`${el.reviews} reviews`}</p>  
                        </div>
                    </div>
                    <div className='order'>
                         <div className='order_btn'>{`Order Online >`}</div>
                    </div>
                 </div>
                 </>
            )
        })}
    </div>
  )
}

export default Home