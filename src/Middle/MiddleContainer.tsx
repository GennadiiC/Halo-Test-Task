import Team from './Team/Team'
import Contact from './Contact/Contact'
import Faq from './FAQ/Faq'
import { FaqProvider } from './FAQ/FaqContext'
import classes from './MiddleContainer.module.scss'

export default function MiddleContainer () {
  return (
    <div className={classes.middleContainer}>
      <Team />
      <Contact />
      <FaqProvider>
        <Faq />
      </FaqProvider>
    </div>
  )
}