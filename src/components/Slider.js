import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";
const data = [
  {
    id: 1,
    src: "https://i.ibb.co/kmr5qQv/headphones.jpg",
    headline: "Enhance your listening experience",
    body: "Take your music, movies, and more to the next level with our headphones. Our selection offers a range of styles and features, including noise-cancelling technology, wireless connectivity, and comfortable designs for all-day wear.",
    cta: "Experience enhanced sound",
    category: "headphones",
  }, 
   
  {
    id: 2,
    src: "https://i.postimg.cc/MpJJPk9Z/Gemini-Generated-Image-26ciek26ciek26ci.jpg",
    headline: "Stay connected with smart watches",
    body: "Stay connected and on top of your day with our smart watches. Our selection offers a range of styles and features, including fitness tracking, phone notifications, and voice assistants. These watches are the perfect combination of functionality and style.",
    cta: "Connect with a smart watch",
    category: "smart-watches",
  },
   
  {
    id: 3,
    src: "https://i.postimg.cc/Gpn19WWT/Gemini-Generated-Image-fxozntfxozntfxoz.jpg",
    headline: "Your On-the-Go Power Solution",
    body: "Stay powered up and ready for anything with high-capacity power banks. These portable chargers offer long-lasting battery life and fast charging capabilities, so you can keep your devices going all day long.",
    cta: "Shop high-capacity power banks",
    category: "power banks",
  },
  {
    id: 4,
    src: "https://i.postimg.cc/KYHdXdmH/Gemini-Generated-Image-s6z4brs6z4brs6z4.jpg",
    headline: "All Kinds of mobiles repairing done here",
    body: "Are you looking for mobile repairing or mobile services? Our services cover all with cheaper rates and satisfying service you will always be satisfied. We guarantee you , you will love our services.",
    cta: "Come Visit Now!",
    category: "services",
  },
  {
    id: 5,
    src: "https://i.postimg.cc/PqnbvJ3z/3.png",
    headline: "Explore our extensive range of products",
    body: "Our team is dedicated to providing you with an exceptional shopping experience, and we are confident that you will find something to suit your needs.Please take a moment to browse through our collection and discover the quality and variety we have to offer.",
    cta: "Shop Now , we have amazing deals for you!",
    category: "store", 
  },   
  
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };
  return (
    <div className="frame relative">
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide image={image} key={image.id} />
        ))}
      </div>
      <div className="btns absolute z-[1] left-0 right-0 bottom-20 m-auto  text-2xl flex gap-10 w-fit">
        <button
          onClick={prevSlide}
          className="prev-btn h-14 w-20  flex justify-center items-center bg-violet-900 text-violet-200 border border-violet-200 hover:bg-gray-900 hover:text-gray-200 hover:border-gray-200 duration-300"
        >
          <span>
            <BsArrowLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="prev-btn h-14 w-20  flex justify-center items-center bg-violet-900 text-violet-200 border border-violet-200 hover:bg-gray-900 hover:text-gray-200 hover:border-gray-200 duration-300"
        >
          <span>
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;