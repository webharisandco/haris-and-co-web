import React from 'react';
import AwardImage1 from '../../../src/assets/images/awards/awardimage1.png';

function AwardsImg() {
  return (
    <div className="bg-white p-4 md:p-10 lg:p-20 w-full">
      <img src={AwardImage1} alt="Award 1" className='w-full' />
    </div>
  );
}

export default AwardsImg;
