import Form from './Form/Form'
import RedLeaf from './RedLeaf/RedLeaf'
import BlueLeaf from './BlueLeaf/BlueLeaf'
import classes from './Contact.module.scss'

export default function Contact() {
  return (
    <div className={classes.contact}>
      <div className={classes.left}>
        <h1>Get started today!</h1>
        <p>
          Learn more about how you can save our 
          planet's nature. From smart consumption 
          to switching to renewable energy, each of 
          us can do our part to save the planet. 
        </p>
      </div>
      <div className={classes.right}>
        <h1>Log in</h1>
        <Form />
        <RedLeaf />
        <BlueLeaf />
      </div>
    </div>
  )
}
