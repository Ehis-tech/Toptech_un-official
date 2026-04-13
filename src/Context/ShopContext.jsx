import { createContext, useState, useEffect } from 'react'
import { products } from '../assets/assets'
import  toast  from 'react-hot-toast'

export const ShopContext = createContext({
  products: [],
  currency: '',
  delivery_fee: 0,
})

const ShopContextProvider = ({ children }) => {
  const currency = '₦'
  const delivery_fee = 10
  const [search,setSearch] = useState('')
  const [showSearch,setShowSearch] = useState(false)
  const [cartItems,setCartItems] = useState({})

  const formatPrice = (amount) => {
    const number = Number(amount)
    if (isNaN(number)) return '0'
    return number.toLocaleString('en-NG')
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const cartData = { ...prev }

      if (cartData[itemId]) {
        cartData[itemId] += 1
      } else {
        cartData[itemId] = 1
      }

      return cartData
    })
  }

  const getCartCount = () => {
    let totalcount = 0

    for (const item in cartItems) {
      totalcount += cartItems[item]
    }

    return totalcount
  }

  const updateQuantity = (itemId, quantity) => {
    setCartItems((prev) => {
      const cartData = { ...prev }

      if (quantity <= 0) {
        delete cartData[itemId]
      } else {
        cartData[itemId] = quantity
      }

      return cartData
    })
  }

  const getCartAmount = () => {
    let totalAmount = 0

    for (const item in cartItems) {
      const itemInfo = products.find((product) => product._id === item)

      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[item]
      }
    }

    return totalAmount
  }


  return (
    <ShopContext.Provider
      value={{
        products: products || [],
        currency,
        delivery_fee, search,setSearch,showSearch,setShowSearch,cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,formatPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
