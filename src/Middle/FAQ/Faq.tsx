import QuestionAnswer from './QA/QuestionAnswer'
import { FaqContext } from './FaqContext'
import { useContext } from 'react'

import classes from './Faq.module.scss'

export default function Faq() {

  const { qa } = useContext(FaqContext)

  return (
    <div className={classes.faq}>
      <div className={classes.left}>
        <div className={classes.textWrapper}>
          <h1>Ready to Get started?</h1>
          <p>
            When pattern is mentioned in interior design, it 
            is easy to asso- ciate it with a geometric
            patterned wallpaper or colourful prints on
            interior fabrics.
          </p>
        </div>
        <div className={classes.buttonWrapper}>
          <button>Contact us</button>
        </div>
      </div>
      <div className={classes.right}>
        {
          qa.map(item => 
            <QuestionAnswer 
              id={item.id}
              key={item.id}
              question={item.question}
              answer={item.answer}
              clicked={item.clicked}
            />
          )
        }
      </div>
    </div>
  )
}
