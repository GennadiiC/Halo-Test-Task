import classes from './Button.module.scss'

type props = {
  menu: boolean
  clickHandler: (menu: boolean) => void
}

export default function Button(props: props) {


  const {menu, clickHandler} = props

  return (
    <button 
      onClick={() => clickHandler(menu)}
      className={
        menu ? 
        `${classes.button} ${classes.button_menu}` :
        `${classes.button}`
      }
    >
      Apply
    </button>
  )
}
