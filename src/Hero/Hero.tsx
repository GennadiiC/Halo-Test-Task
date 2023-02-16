import Header from './Header/Header'
import Main from './Main/Main'
import classes from './Hero.module.scss'

export default function Hero() {
  return (
    <div className={classes.hero}>
      <Header />
      <Main />
    </div>
  )
}
