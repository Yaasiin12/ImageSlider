import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';

function ImageSlider() {
  const slides = [
    {
      url: 'https://img.freepik.com/free-photo/beautiful-scenery-emerald-lake-yoho-national-park-british-columbia-canada_181624-6877.jpg?t=st=1709541444~exp=1709545044~hmac=588537f4dbb9b98114fa3a270102a1f5ea9d07732bdad24958709854774c81cb&w=360',
    },
    {
      url: 'https://img.freepik.com/free-photo/electronic-device-balancing-concept_23-2150422322.jpg?w=826',
    },
    {
      url: 'https://img.freepik.com/free-photo/majestic-mountain-range-reflects-tranquil-pond-generated-by-ai_188544-33360.jpg?t=st=1709548398~exp=1709551998~hmac=286482661c170448ff45b10301a95eac35bb64a4b5cd7be9c1ca4174b687c83c&w=1060',
    },
    {
      url: 'https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?t=st=1709548369~exp=1709551969~hmac=43e5ab1d8176bbcb9038227eaaabee04280773762523aa887626fc03add915af&w=826',
    },
    {
      url: 'https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?t=st=1709548369~exp=1709551969~hmac=43e5ab1d8176bbcb9038227eaaabee04280773762523aa887626fc03add915af&w=826',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1200px] h-[560px] w-full  ml-[80px] mt-[1px] py-12 px-4 relative group'>
      <div 
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className=' w-[880px] h-full rounded-xl bg-center bg-cover ml-[100px]'
      ></div>
    
      <div className='hidden group-hover:block absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
         <i onClick={prevSlide} size={30}  class="fa-solid fa-arrow-left mr-10"></i>
      </div>
     
      <div className=' mr-[80px] hidden group-hover:block absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
       <i onClick={nextSlide} size={30} class="fa-solid fa-arrow-right-long "></i>
      </div>
    </div>
  );
}

export default ImageSlider;










