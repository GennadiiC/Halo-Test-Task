import Beardman from './BeardMan/Beardman'
import Rope1 from './Rope1/Rope1'
import Rope2 from './Rope2/Rope2'
import Girl from './Girl/Girl'
import Hatman from './HatMan/Hatman'
import classes from './Team.module.scss'

export default function Team() {
  return (
    <div className={classes.team}>
      <div className={classes.text}>
        <h1>Our Top Team</h1>
        <p>
          Learn more about how you can save<br/>
          our planet's nature. 
        </p>
      </div>
      <div className={classes.svgContainer}>
        <Beardman />
        <Rope1 />
        <Girl />
        <Rope2 />
        <Hatman />
      </div>
    </div>
  )
}
