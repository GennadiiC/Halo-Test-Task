import Headline from './Headline/Headline'
import Input from './Input/Input'
import Parrot from './Parrot/Parrot'
import Card from './Card/Card'
import classes from './Main.module.scss'

export default function Main() {
  return (
    <div className={classes.main}>
      <div className={classes.left}>
        <Headline />
        <div className={classes.pInpContainer}>
          <p>
            The scale of the challenges facing our planet can seem 
            daunting, but we can all do something.
          </p>
          <Input />
        </div>
      </div>
      <div className={classes.right}>
        <Parrot />
        <Card />
      </div>
    </div>
  )
}
