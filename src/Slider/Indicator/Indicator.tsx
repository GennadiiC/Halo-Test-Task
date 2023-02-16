import Chevron from './Chevron'
import classes from './Indicator.module.scss'
import { SliderContext } from '../Context/SliderContext'
import { useContext } from 'react'
// import useSliderAnimated from '../useSliderAnimated'

// interface IProps {
//   onClick: (e: React.MouseEvent, dir: string) => void
// }

export default function Indicator() {

  const { page } = useContext(SliderContext)

  return (
    <div className={classes.indicator}>
      <div className={classes.wrapper}>
        <Chevron 
          className={classes.chevron}
          dir='left'
        />
        <div className={classes.text}>{page} <span>/ 5</span></div>
        <Chevron
          className={`${classes.chevron} ${classes.rotate}`}
          dir='right'
        />
      </div>
    </div>
  )
}
