import * as React from 'react'
import { useState } from "react";

type Props = { children: React.ReactNode }

type qa = {
  question: string
  answer: string
  id: number
  clicked: boolean
}

type actions = {
  clicker: (id: number) => void
}

interface MatrixContextType {
  qa: qa[]
  actions: actions
}

export const FaqContext: React.Context<MatrixContextType> = 
  React.createContext({} as MatrixContextType)

export const FaqProvider = ({children}: Props) => {

  const [qa, setQa] = useState<qa[]>(
    [
      {
        question: 'What can I do to protect our planet?',
        answer: `Not to make an open fire in nature and to clean up litter; 
        not to pollute open water bodies; to switch to alternative 
        energy sources; to reduce the use of non-renewable 
        resources`,
        id: 1, 
        clicked: false
      },
      {
        question: `How to save nature ecology?`,
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus nec ultrices lacus, sit amet rhoncus est. 
        Donec pretium semper elit, id iaculis mi dapibus eget. 
        Praesent ut ante eu ante mattis varius. Nulla facilisi.`,
        id: 2,
        clicked: false
      },
      {
        question: `What is nature conservation?`,
        answer: `Vivamus eu feugiat velit, quis porttitor arcu. 
        Aenean sed pellentesque ipsum. In tempor tempor est, 
        aliquam bibendum enim aliquam nec. Proin vitae tempor augue.`,
        id: 3,
        clicked: false
      }
    ]
  )

  const clicker = (id: number) => {
    setQa((prev) => {
      let newArr = prev.map(it => 
        it.id === id ? {...it, clicked: !it.clicked} : 
        it.clicked ? {...it, clicked: false} : 
        it
      )
      return newArr
    })
  }

  const value: MatrixContextType = {
    qa,
    actions: {
      clicker
    }
  }

  return (
    <FaqContext.Provider value={value}>
      {children}
    </FaqContext.Provider>
  )
}