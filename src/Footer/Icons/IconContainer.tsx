import classes from './IconContainer.module.scss'

type props = {
  icon: () => JSX.Element
}

export default function IconContainer(props: props) {

  const { icon } = props


  return (
    <div className={classes.iconContainer}>
      {icon()}
    </div>
  )
}
