import React, { useContext } from 'react'
import DataContext from '../Datacontent/DataContext'

const Newpost = () => {
  const {Title, Settitle, postBody, setpostBody,handleSubmit} = useContext(DataContext);
  return (
   <div className='container'>
    <form className='postform' onSubmit={handleSubmit}>
        <h1 className='Formhead'> Create A Post </h1>
        <label>Title</label>
        <input type="text"
        id="frminp"
        value={Title}
        required
        onChange={(e)=>Settitle(e.target.value)}
        placeholder='Title For Your Post'
        /><br></br>
        <label>Description</label>
        <input type="text" id="frminp"
        value={postBody}
        required
        onChange={(e)=>setpostBody(e.target.value)}
        placeholder='Description For Your Post '
        />
        <button type="submit" id="sbmbtn">Post </button>
    </form>
    </div>
  
  )
}

export default Newpost