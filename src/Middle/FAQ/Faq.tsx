import QuestionAnswer from './QA/QuestionAnswer'
import { FaqContext } from './FaqContext'
import { useContext } from 'react'

import classes from './Faq.module.scss'

// type question = {
//   question: string
//   answer: string
//   id: number
// }

// const faq: question[] = [
//   {
//     question: 'What can I do to protect our planet?',
//     answer: `Not to make an open fire in nature and to clean up litter; 
//     not to pollute open water bodies; to switch to alternative 
//     energy sources; to reduce the use of non-renewable 
//     resources`,
//     id: 1
//   },
//   {
//     question: `How to save nature ecology?`,
//     answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//     Vivamus nec ultrices lacus, sit amet rhoncus est. 
//     Donec pretium semper elit, id iaculis mi dapibus eget. 
//     Praesent ut ante eu ante mattis varius. Nulla facilisi.`,
//     id: 2
//   },
//   {
//     question: `What is nature conservation?`,
//     answer: `Vivamus eu feugiat velit, quis porttitor arcu. 
//     Aenean sed pellentesque ipsum. In tempor tempor est, 
//     aliquam bibendum enim aliquam nec. Proin vitae tempor augue.`,
//     id: 3
//   }
// ]

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
