import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from "../Components/Title"
import { FaTrashCan } from 'react-icons/fa6'
import CartTotal from '../Components/CartTotal'
import { useNavigate } from 'react-router-dom'


function Cart() {
  const navigate = useNavigate()
  const { products, currency, formatPrice, cartItems, updateQuantity, } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

 useEffect(() => {
   const tempData = []

   for (const item in cartItems) {
     if (cartItems[item] > 0) {
       tempData.push({
         _id: item,
         quantity: cartItems[item],
       })
     }
   }

   setCartData(tempData)
 }, [cartItems])



  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          )

          if (!productData) return null

          return (
            <div key={index} className='px-4 py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0 sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4' >
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name}/>

                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{formatPrice(productData.price)}</p>
                  
                  </div>
                </div>
              </div>
              <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 text-center' type='number' min={1} defaultValue={item.quantity} />
              <FaTrashCan onClick={() => updateQuantity(item._id, 0)} className='w-4 mr-4 sm:w-5 text-[#BF9A33] cursor-pointer'/>
            </div>
          )
        })}
      </div>
       <div className='flex justify-end my-20 px-4'>
         <div className='w-full sm:w-[450px] '>
          <CartTotal/>
          <div className='w-full text-end'>
             <button onClick={()=> navigate('/place-order')} className='cursor-pointer hover:bg-[#A57B0A] bg-[#BF9A33] text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
         </div>
       </div>


    </div>
  )
}

export default Cart
