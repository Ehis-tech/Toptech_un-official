import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { Link } from "react-router-dom";


function ProductItem({id, image,name,price}) {
  
 const {currency, formatPrice} = useContext(ShopContext);


  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
     <div className='overflow-hidden max-w-full'>
       <img className='w-full hover:scale-110 transition ease-in-out' src={image && image[0]} alt='' />
     </div>
     <p className='pt-3 pb-1 text-sm'>{name}</p>
     <p className='text-sm font-medium'> {currency}{formatPrice(price || 0)} </p>
      
    </Link>
  )
}

export default ProductItem