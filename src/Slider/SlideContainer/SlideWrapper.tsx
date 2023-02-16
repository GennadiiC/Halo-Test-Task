import classes from './SlideWrapper.module.scss'
import { useState, useEffect } from 'react'

interface IProps {
  img: string
  text: string
  hiddenText: string
  index: number
}

export default function SlideWrapper(props: IProps) {

  const {
    img,
    text,
    hiddenText,
    index
  } = props

  const [middle, setMiddle] = useState<boolean>(false)
  const [imgWidth, setImgWidth] = useState('')
  const [divWidth, setDivWidth] = useState('')


  useEffect(() => {
    if (index === 2) {
      setMiddle(true)
    } else {
      setMiddle(false)
    }
  },[index])

  useEffect(() => {
    if (index === 0 || index === 4) {
      setImgWidth('210px')
    } else if (index === 1 || index === 3 ) {
      setImgWidth('270px')
    } else {
      setImgWidth('')
    }
  }, [index])

  useEffect(() => {
    if (index === 2) {
      setDivWidth('30%')
    } else {
      setDivWidth('20%')
    }
  }, [index])

  return (
    <div 
      className={classes.sliderWrapper} 
      style={{ 
        width: divWidth
      }}
    >
      {
        middle && 
        <div className={classes.whiteBack}>
          <svg width="100%" height="100%" viewBox="0 0 438 362" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M26.0995 142.755C40.3504 95.5236 87.9169 70.3543 131.232 46.6707C169.566 25.7105 210.972 10.819 254.071 18.1047C298.453 25.6072 336.607 50.9996 364.704 86.1378C395.791 125.015 425.475 171.554 415.786 220.346C406.094 269.152 361.096 301.226 317.292 324.901C277.957 346.161 233.803 348.457 189.444 342.681C140.755 336.341 88.5399 329.077 57.489 291.072C24.2342 250.37 10.9268 193.04 26.0995 142.755Z" fill="#F7F3F4"/>
          <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M7.09244 139.004C22.7354 87.1593 74.9483 59.5315 122.494 33.5344C164.573 10.5267 210.023 -5.81933 257.333 2.17804C306.05 10.4134 347.931 38.2862 378.773 76.8567C412.896 119.532 445.479 170.617 434.844 224.175C424.206 277.748 374.812 312.955 326.73 338.943C283.552 362.28 235.085 364.8 186.392 358.46C132.948 351.501 75.6322 343.527 41.5482 301.809C5.04495 257.131 -9.56228 194.202 7.09244 139.004Z" fill="#F7F3F4"/>
          </svg>
        </div>
      }
      <img
        className={middle ? classes.imgMiddle : ''}
        src={img} 
        alt={text} 
        style={{
          width: imgWidth
        }}
      />
      <div className={middle ? `${classes.textMiddle} ${classes.text}` : classes.text}>
        <h1>{text}</h1>
        {
          middle &&
          <p>{hiddenText}</p>
        }
      </div>
    </div>
  )
}
