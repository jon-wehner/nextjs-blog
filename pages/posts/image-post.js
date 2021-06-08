import Image from 'next/image';
import React from 'react';

const MyImage = () => {
  return (
    <Image
      src="/images/profile.jpg"
      height={144}
      width={144}
      alt="Jon Wehner"
    />
  );
};

export default MyImage;
