import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import news1 from "../../assets/News1.jpg";
import news2 from "../../assets/News2.jpg";
import news3 from "../../assets/News3.jpg";
import "../../pages/News/News.scss";

const slideImages = [
  {
    url: news2,
    // caption: 'Slide 1'
  },
  {
    url: news1,
    // caption: 'Slide 2'
  },
  {
    url: news3,
    // caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className='slideshow'>
        <Slide>
          {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className="news-links" 
              style={{backgroundImage: `url(${slideImage.url})`,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundSize: '70%',
              height: '100vh',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
              }}> 
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;