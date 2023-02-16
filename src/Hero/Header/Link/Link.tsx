import classes from './Link.module.scss'

interface IProps {
  to: string
  menu: boolean
  clicked: boolean
  id: number
  clicker: (id: number) => void
}

export default function Link(props: IProps) {

  const { to, menu, id, clicker, clicked } = props
  

  return (
    <div 
      onClick={() => clicker(id)}
      className={
          clicked && menu ? 
          `${classes.link} ${classes.link_menu} ${classes.link_clicked}` : 
          menu ?
          `${classes.link} ${classes.link_menu}` :
          clicked ?
          `${classes.link} ${classes.link_clicked}` :
          classes.link
        }
      >
      {to}
    </div>
  )
}
