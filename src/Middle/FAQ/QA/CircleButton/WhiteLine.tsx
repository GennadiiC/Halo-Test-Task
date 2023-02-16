import classes from './CircleButton.module.scss'

interface IProps {
  clicked: boolean
}

export default function WhiteLine(props: IProps) {

  const {clicked} = props

  return (
    <>
      <div className={classes.minus}>
      </div>
      <div className={clicked ? `${classes.minus} ${classes.plus}` : classes.minus}>
      </div>
    </>
  )
}
