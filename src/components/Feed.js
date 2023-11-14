
import React from 'react';
import Post from './Post';
const postsData = [
  {
    id: 1,
    username: 'user1',
    caption: 'Caption for post 1',
    imageUrl: 'url_to_image1.jpg',
  },
  {
    id: 2,
    username: 'user2',
    caption: 'Caption for post 2',
    imageUrl: 'url_to_image2.jpg',
  },
  // Add more posts as needed
];

const Feed = () => (
  <div className="feed">
    {postsData.map((post) => (
      <Post key={post.id} {...post} />
    ))}
  </div>
);

export default Feed;