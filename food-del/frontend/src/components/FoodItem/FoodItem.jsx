import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img src={`${url}/images/`+image} alt="" className="food-item-image" />
        {!cartItems[id]
            ?<img src={assets.add_icon_white} alt="" className="add" onClick={()=>addToCart(id)}/>
            :<div className='food-item-counter'>
                <img src={assets.remove_icon_red} alt="" onClick={()=>removeFromCart(id)} />
                <p>{cartItems[id]}</p>
                <img src={assets.add_icon_green} alt="" onClick={()=>addToCart(id)} />
            </div>
        }
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" className="src" />
        </div>
        <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

// const FoodItem=({name,id})=>{
//   const {cartItems}=useContext(StoreContext)
//   return(
//     <div>
//       <p>{name}</p>
//       <p>{id}</p>
//       <p>{cartItems[id]}</p>
//     </div>
  
//   )
// }

export default FoodItem
