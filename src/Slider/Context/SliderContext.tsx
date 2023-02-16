import * as React from 'react'
import { useState } from 'react'

const avoidPlastic = require('./AvoidPlastic.png')
const plantTrees = require('./PlantTrees.png')
const chooseOrganic = require('./ChooseOrganic.png')
const water = require('./Water.png')
const saveEnergy = require('./SaveEnergy.png')


type Props = { children: React.ReactNode }

type Slide = {
  id: number
  img: string
  text: string
  hiddenText: string
}

interface SliderContextType {
  slideArr: Slide[]
  page: number
  actions: {
    slideMover: (dir: string) => void
  }
}

export const SliderContext: React.Context<SliderContextType> = 
  React.createContext({} as SliderContextType)



export default function SliderProvider( {children}: Props ) {

  const [slideArr, setSlideArr] = useState([
    {
      id: 1,
      img: avoidPlastic,
      text: 'Avoid Plastic',
      hiddenText: `Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Sed suscipit 
      libero.`
    },
    {
      id: 2,
      img: chooseOrganic,
      text: 'Choose organic',
      hiddenText: `Morbi sem turpis, fermentum 
      eget iaculis sit amet, tristique non tellus. 
      Cras ligula quam`
    },
    {
      id: 3,
      img: water,
      text: 'Save water',
      hiddenText: `Taking on the issue of 
      ensuring access to safe water requires 
      worldwide effort.`
    },
    {
      id: 4,
      img: plantTrees,
      text: 'Plant trees',
      hiddenText: `Cras ligula quam, volutpat eu 
      felis non, vehicula consequat massa. 
      Vestibulum ante ipsum`
    },
    {
      id: 5,
      img: saveEnergy,
      text: 'Save energy',
      hiddenText: `Interdum et malesuada fames 
      ac ante ipsum primis in faucibus. Cras ac 
      blandit risus, eget rutrum ante.`
    }
  ])

  const [page, setPage] = useState<number>(1)
  
  const slideMover = (dir: string) => {
    if (dir === 'left') {
      setSlideArr(prev => {
        let firstItem = prev[0]
        let newArr = prev.slice(1)
        newArr.push(firstItem)
        return newArr
      })
      setPage(prev => 
        prev <= 5 && prev > 1 ?
        prev -1 : 5
      )
    } else {
      setSlideArr(prev => {
        let firstEl = prev[4]
        let newArr = prev.slice(0, -1)
        newArr.unshift(firstEl)
        return newArr
      })
      setPage(prev => 
        prev >= 1 && prev < 5 ? 
        prev + 1 : 1
      )
    }
  }

  const value: SliderContextType = {
    slideArr,
    page,
    actions: {
      slideMover
    }
  }


  return (
    <SliderContext.Provider  value={value}>
      {children}
    </SliderContext.Provider>
  )
}
