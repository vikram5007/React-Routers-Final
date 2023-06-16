import React from 'react';
import Post from './Post';

const Feed = ({ Searchres }) => {
  return (
    <>
      {Searchres.map(post => (
        <Post key={post.id} posts={post} />
      ))}
    </>
  );
};

export default Feed;
