import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ posts }) => {

    return (
        <div id='postholder'>
        <div id="posts">
       <Link className='postlink'to={`posts/${posts.id}`}><p className="ptitle">{posts.title}</p>
       
            {(posts.body.length <25) 
            ?
                <p className="pbody">{posts.body}</p>
            :
                <p className='pbody'>{posts.body.slice(0,25)}...</p>
            }
            </Link>
        </div>
        
        </div>
    )
}

export default Post;