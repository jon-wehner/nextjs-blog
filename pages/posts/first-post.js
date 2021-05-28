import Link from 'next/link';
import React from 'react';

const FirstPost = () => {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <p>Look at this post</p>
    </>
  );
};

export default FirstPost;
