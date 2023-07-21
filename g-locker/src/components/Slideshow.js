import React from 'react'
import HeroSlider, {Slide} from 'hero-slider';
import { useLocation } from 'react-router-dom';
import './Slideshow.css'

function Slideshow() {

    const location = useLocation();

    const imageProp = location.state;
  return (

    <div className='slideshow-container'>
      <HeroSlider
        slidingAnimation='left_to_right'
        orientation='horizontal'
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) => console.log('onBeforeChange', previousSlide, nextSlide)}
        onChange={nextSlide => console.log('onChange', nextSlide)}
        onAfterChange={nextSlide => console.log('onAfterChange', nextSlide)}
        style={{
            backgroundColor: '#000',
        }}
        settings={{
            slidingDuration: 250,
            slidingDelay: 100,
            shouldAutoplay: false,
            shouldDisplayButtons: true,
            height: '100vh',
        }}
      >
        {imageProp.images.map((image, index) => (
            <Slide background={{
                    backgroundImageSrc: image.src,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',

                }}
            />
         ))
        }
      </HeroSlider>
    </div>
  )
}

export default Slideshow
