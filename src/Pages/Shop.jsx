import { useContext, useEffect, useState } from 'react'
import { ShopContext } from "../Context/ShopContext.jsx"
import assets from '../assets/assets.js'
import Title from '../Components/Title.jsx'
import ProductItem from '../Components/ProductItem.jsx'

function Shop() {

  const { products, search, showSearch } = useContext(ShopContext)

  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    sortProduct()
  }, [sortType])

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item =>
        category.includes(item.category)
      )
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item =>
        subCategory.includes(item.subCategory)
      )
    }

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name?.toLowerCase().includes(search.toLowerCase())
      )
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = [...filterProducts]

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price))
        break

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price))
        break

      default:
        applyFilter()
        break
    }
  }

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-5'>

      {/* Filter Options */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='dark:text-white my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=''
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 dark:text-white text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Circuit Breakers'} onChange={toggleCategory} />
              Circuit Breakers
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'MCCB'} onChange={toggleCategory} />
              MCCB
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'UPS'} onChange={toggleCategory} />
              UPS
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Inverter'} onChange={toggleCategory} />
              Inverter
            </p>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium dark:text-white'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Single pole'} onChange={toggleSubCategory} />
              Single pole
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Three pole'} onChange={toggleSubCategory} />
              Three pole
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'MCCB Three pole'} onChange={toggleSubCategory} />
              MCCB Three pole
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'30kva'} onChange={toggleSubCategory} />
              30kva
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'1000 watts'} onChange={toggleSubCategory} />
              1000 watts
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'1200 watts'} onChange={toggleSubCategory} />
              1200 watts
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>

        {/* Title + Sort */}
        <div className='mb-4'>

          {/* Top Row */}
          <div className='flex justify-between items-center text-base sm:text-2xl'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />

            {/* Desktop Sort */}
            <select
              onChange={(e) => setSortType(e.target.value)}
              className='dark:text-white hidden sm:block border border-gray-300 text-sm px-2 py-1'
            >
              <option value='relevant'>Sort by: Relevant</option>
              <option value='low-high'>Sort by: Low to High</option>
              <option value='high-low'>Sort by: High to Low</option>
            </select>
          </div>

          {/* Mobile Sort */}
          <div className='sm:hidden mt-3'>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className='dark:text-white w-full border border-gray-300 text-sm px-2 py-1'
            >
              <option value='relevant'>Sort by: Relevant</option>
              <option value='low-high'>Sort by: Low to High</option>
              <option value='high-low'>Sort by: High to Low</option>
            </select>
          </div>

        </div>

        {/* Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Shop