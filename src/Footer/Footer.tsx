import IconContainer from './Icons/IconContainer'
import classes from './Footer.module.scss'
import { Facebook} from './Icons/Facebook'
import { LinkedIn} from './Icons/LinkedIn'
import { Twitter } from './Icons/Twitter'


export default function Footer() {

  const svgs = [
    Facebook, LinkedIn, Twitter
  ]

  return (
    <div className={classes.footer}>
      <div className={classes.left}>
        <h1>Contacts</h1>
        <p>
          2019 Rootz Foundation.
          All rights reserved
        </p>
      </div>
      <div className={classes.middle}>
        <h3>Headquarters</h3>
        <p>
          1234 Taliban<br/>
          Los Angeles, La 1234567<br/>
          (123) 456-7890
        </p>
      </div>
      <div className={classes.right}>
        <h3>Social media</h3>
        <div className={classes.iconWrapper}>
        {
          svgs.map((icon, i) => 
            <IconContainer 
              key={i}
              icon={icon}
            />
          )
        }
        </div>
      </div>
    </div>
  )
}
