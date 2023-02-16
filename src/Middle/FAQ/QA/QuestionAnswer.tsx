import CircleButton from './CircleButton/CircleButton'
import classes from './QuestionAnswer.module.scss'


interface IProps {
  question: string
  answer: string
  id: number
  clicked: boolean
}


export default function QuestionAnswer(props: IProps) {

  const {
    question,
    answer,
    id, 
    clicked,
  } = props



  return (
    <div className={!clicked ? `${classes.questionAnswer} ${classes.jusConCen}` : `${classes.questionAnswer} ${classes.jusConBet} `}>
      <div className={classes.mainWrapper}>
        <h3 className={!clicked ? '' : classes.zeroMargin}>{question}</h3>
        <CircleButton
          clicked={clicked}
          id={id}
        />
      </div>
      {
        clicked &&
        <p>
          {answer}
        </p>
      }
      
    </div>
  )
}
