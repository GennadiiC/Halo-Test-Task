import classes from './Hatman.module.scss'
const hatman = require('./Hatman.png')

export default function Hatman() {
  return (
    <div className={classes.hatman}>
      <img src={hatman} alt='hatman' />
    </div>
  )
}
