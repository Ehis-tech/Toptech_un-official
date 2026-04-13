import { useContext, useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { FaX } from "react-icons/fa6"
import { ShopContext } from "../Context/ShopContext.jsx"
import { useLocation } from "react-router-dom"


function SearchBar() {

const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)

const [visible, setVisible] = useState(false)

{/*So that the search bar appears only in shop */}
const location = useLocation()

useEffect(()=>{
   if (location.pathname.includes('shop')) {
    setVisible(true)
   }
   else {
    setVisible(false)
   }
}, [location])


  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
     <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
       <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type='text' placeholder="Search" />
       <FaSearch className='w-4 text-[#BF9A33]'/>
     </div>
     <FaX onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer text-[#BF9A33]'/>
      
    </div>
  ) : null
}

export default SearchBar
