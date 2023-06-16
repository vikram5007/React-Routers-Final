import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import DataContext from '../Datacontent/DataContext';

const Postpage = () => {
  const { posts, handleDelete } = useContext(DataContext);
  const { id } = useParams();
  const selectedpost = posts.find(post => (post.id).toString() === id);

  return (
    <>
      {selectedpost &&
        <div id="posts">

          <h1> Edit Your Post </h1>
          <p className="ptitle">{selectedpost.title}</p>
          <p className="pbody">{selectedpost.body}</p>
          <div className='Editarea'>
          <Link to={`/edit/${selectedpost.id}`}><button id="editbtn"> Edit </button></Link>
            <button id="deletebtn" onClick={() => handleDelete(selectedpost.id)}> Delete </button>
          </div>
        </div>
      }

{!selectedpost &&
  <p>Error</p>
}
    </>
  )
}

export default Postpage