import SlideWrapper from './SlideContainer/SlideWrapper'
import Indicator from './Indicator/Indicator'
import classes from './Slider.module.scss'
import { SliderContext } from './Context/SliderContext'
import { useContext } from 'react'


export default function Slider() {


  const { slideArr } = useContext(SliderContext)
  

  return (
    <div className={classes.slider}>
      <div className={`${classes.sliderWrapper}`}>
        {
          slideArr.map((item, i) => 
            <SlideWrapper 
              key={item.id}
              text={item.text}
              img={item.img}
              hiddenText={item.hiddenText}
              index={i}
            />
          )
        }
      </div>
      <Indicator />
    </div>
  )
}
