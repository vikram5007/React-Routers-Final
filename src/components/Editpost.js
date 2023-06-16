import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../Datacontent/DataContext';

const Editpost = () => {

    const { posts, editTitle, seteditTitle, editBody, seteditBody, handleEdit } = useContext(DataContext)
    const { id } = useParams();
    const editpost = posts.find(editpost => (editpost.id).toString() === id);
    useEffect(() => {
        if (editpost) {
            seteditTitle(editpost.title);
            seteditBody(editpost.body);
        }
    }, [editpost, seteditBody, seteditTitle]);

    return (
        <>
            <div className='container'>
                <form className='postform' onSubmit={(e) => e.preventDefault()}>
                    <h1 className='Formhead'> Edit A Post </h1>
                    <label>Title</label>
                    <input type="text"
                        id="frminp"
                        value={editTitle}
                        required
                        onChange={(e) => seteditTitle(e.target.value)}
                        placeholder='Title For Your Post'
                    /><br></br>
                    <label>Description</label>
                    <input type="text" id="frminp"
                        value={editBody}
                        required
                        onChange={(e) => seteditBody(e.target.value)}
                        placeholder='Description For Your Post '
                    />
                    <button id="sbmbtn" type="submit"onClick={()=>handleEdit(editpost.id)}>Edit</button>
                </form>
            </div>

        </>



    )
}

export default Editpost