import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../Datacontent/DataContext'

const Nav = () => {
  const { Search, setSearch } = useContext(DataContext)
  return (
    <div>
      <form className='search' onSubmit={(e) => e.preventDefault()}>
        <input 
        id="inp" 
        type="text" 
        value={Search} 
        placeholder='Search'
        onChange={(e) => {setSearch(e.target.value) }} 
        autoComplete='off'/>
      </form>
      <ul className='Nav'>
        <li><Link to="/" className='link'>Home</Link></li>
        <li><Link to="/main" className='link'>Contents</Link></li>
        <li><Link to="/footer" className='link'>Footer</Link></li>
        <li><Link to="/Posts" className='link'> Posts </Link></li>
      </ul>
      
    </div>
  )
}

export default Nav