import classes from './Beardman.module.scss'
const beardman = require('./Beardman.png')

export default function Beardman() {
  return (
    <div className={classes.beardMan}>
      <img src={beardman} alt="Beardman" />
    </div>
  )
}
