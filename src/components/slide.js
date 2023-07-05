import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '250px',
  width: '100%',
  background:'#000000',
  fontSize:'100px',
  letterSpacing: '10px',
  textTransform:'uppercase'
}
const slideImages = [
  {
    background:'#000000',
    caption: 'React JS',
    width: '60%',
    backgroundImage: `-webkit-linear-gradient(44deg, rgba(255,108,149,1) 0%, rgba(255,117,152,1) 51%, rgba(255,61,61,1) 100%)`,
  },
  {
    background:'#000000',
    caption: 'Angular',
    backgroundImage: `-webkit-linear-gradient(0deg, rgba(252,105,105,1) 0%, rgba(255,206,189,1) 100%)`
 
  },
  {
    background:'#000000',
    caption: 'JavaScript',
    width: '140%',
    backgroundImage: `-webkit-linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(114,253,45,1) 100%)`
  },
  {
    background:'#000000',
    caption: 'Next JS',
    backgroundImage: `-webkit-radial-gradient(circle, rgba(128,253,255,1) 0%, rgba(255,234,10,1) 100%)`
  },
  {
    background:'#000000',
    caption: 'Node JS',
    backgroundImage: `-webkit-radial-gradient(circle, rgba(128,253,255,1) 0%, rgba(255,234,10,1) 100%)`
  },
  {
    background:'#000000',
    caption: 'Tailwind CSS',
    backgroundImage: `-webkit-linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)`
  },
  {
    background:'#000000',
    caption: 'BootStrap',
    backgroundImage: `-webkit-radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)`
  }
];

export const Slideshow = () => {
    return (
        
      <div>
        <Zoom scale={1.4} 
        duration={500}
        transitionDuration={500}
        indicators={false}
        autoplay={true}
        infinite={true}
        arrows={false}
        >
         {slideImages.map((slideImage, index)=> (
            <div key={index} style={{'background': `${slideImage.background}`}}>
              <div  style={{ ...divStyle, 
              'color': `${slideImage.color}` , 
              'background': `${slideImage.backgroundImage}`,
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              'font-weight': '900',
              'font-family': 'revert'
            }}>
                {slideImage.caption}
              </div>
            </div>
          ))} 
        </Zoom>
      </div>
    )
}