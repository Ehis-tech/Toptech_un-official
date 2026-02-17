import { useEffect } from "react"
import { FaSun, FaMoon } from "react-icons/fa"

function ThemeToggleBtn({theme, setTheme}) {


useEffect(()=>{
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
}, [])

useEffect(()=>{
 if(theme === 'dark'){
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
localStorage.setItem('theme', theme)
},[theme])

  return (
    <>
      <button>
        {theme === 'dark' ? (
          <FaSun onClick={() => setTheme('light')} className='size-6.5 p-1.5 border border-gray-500 rounded-full' />
        ) : (
          <FaMoon onClick={() => setTheme('dark')} className='size-6.5 p-1.5 border border-gray-500 rounded-full' />
        )}
      </button>
    </>
  )
}

export default ThemeToggleBtn

