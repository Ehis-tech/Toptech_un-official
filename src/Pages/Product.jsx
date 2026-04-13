import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import assets from '../assets/assets'
import RelatedProducts from '../Components/RelatedProducts'

function Product() {

 const {productId} = useParams()
 const {products, currency, addToCart, formatPrice} = useContext(ShopContext)
 const [productData, setProductData] = useState(false)
 const [image,setImage] = useState('')
 {/*const [size,setSize] = useState(null) */}

 const fetchProductData = async () => {
  products.map((item)=>{
    if (item._id === productId) {
      setProductData(item)
      setImage(item.image[0])
      return null;
    }
  })
 }

 useEffect(()=> {
    fetchProductData()
 }, [productId])


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-4'>
      {/*Product Data */}
      
   <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
    {/* Product Images */}
     <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

      <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
           {
            productData.image.map((item,index)=>(
              <img onClick={()=>setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' src={item} key={index} alt=''/>
            ))
           }
      </div>
     
     <div className='w-full sm:w-[80%]'>
        <img className='w-full h-auto' src={image} alt='' />
     </div>
     </div>

    {/*-----Product info------- */}
    <div className='flex-1'>
       <h1 className='font-medium mt-2 text-2xl '>{productData.name}</h1>
       <div className='flex items-center gap-1 mt-2'>
        <img src={assets.star_icon} alt='' className='w-3 5' />
        <img src={assets.star_icon} alt='' className='w-3 5' />
        <img src={assets.star_icon} alt='' className='w-3 5' />
        <img src={assets.star_icon} alt='' className='w-3 5' />
        <img src={assets.star_icon} alt='' className='w-3 5' />
        <p className='pl-2'>(122)</p>
       </div>
       <p className='mt-5 text-3xl font-medium'>{currency} {formatPrice(productData.price)}</p>
       <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

     
      <button onClick={() => addToCart(productData._id)} className='bg-[#BF9A33] text-white px-8 py-3 text-sm hover:bg-[#A57B0A] cursor-pointer'>ADD TO CART</button>
      <hr className='mt-8 sm:w-4/5 '/>
      <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
         <p>100% Original product</p>
         <p>Cash on delivery is available for this product</p>
         <p>Easy return and exchange policy within 7 days.</p>
      </div>
    </div>
   </div>

{/*------Description & Review section */}
<div className='mt-20'>
  <div className='flex'>
     <b className='border px-5 py-3 text-sm'>Description</b>
     <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
  </div>
  <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
    <p>Toptech shop is a platform that facilitates buying and selling where by customers can purchase machines and quality products at the comfort of their homes without need to go out</p>
    <p>At Toptech you get the best take a look at the display of our products along with the detailed explanation of individual products</p>
  </div>
</div>
{/*----Display related products */}

<RelatedProducts category={productData.category} subCategory={productData.subCategory} />



    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
