import classes from './Girl.module.scss'
const girl = require('./Girl.png')

export default function Girl() {
  return (
    <div className={classes.girl}>
      <img src={girl} alt='Girl' />
    </div>
  )
}
