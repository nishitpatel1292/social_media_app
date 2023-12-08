import React from 'react';

const Content = () => {
  const dummyContent = [
    {
      id: 1,
      title: 'Post 1',
      body: 'This is the first post',
      image: 'url_to_image_1',
      likes: 10,
      comments: 2,
      bookmark: false,
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'This is the second post',
      image: 'url_to_image_2',
      likes: 20,
      comments: 5,
      bookmark: true,
    },
    {
      id: 3,
      title: 'Post 3',
      body: 'This is the third post',
      image: 'url_to_image_3',
      likes: 30,
      comments: 8,
      bookmark: false,
    },
  ];

  return (
    <div style={{margin:'auto'}}>
      {dummyContent.map(post => (
        <div key={post.id}>
          <img src={post.image} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>Likes: {post.likes}</p>
          <p>Comments: {post.comments}</p>
          <button>{post.bookmark ? 'Unbookmark' : 'Bookmark'}</button>
        </div>
      ))}
    </div>
  );
};

export default Content;