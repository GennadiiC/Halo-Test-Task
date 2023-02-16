import WhiteLine from './WhiteLine'
import { FaqContext } from '../../FaqContext'
import { useContext } from 'react'

import classes from './CircleButton.module.scss'

interface IProps {
  clicked: boolean
  id: number
}

export default function CircleButton(props: IProps) {

  const { actions } = useContext(FaqContext)

  const {
    clicked,
    id
  } = props


  return (
    <div onClick={() => actions.clicker(id)} className={classes.circleButton}>
      <WhiteLine clicked={clicked} />
    </div>
  )
}
