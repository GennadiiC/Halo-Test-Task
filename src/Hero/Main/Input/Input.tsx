import SearchLogo from './SearchLogo/SearchLogo'
import SubmitButton from './SubmitButton/SubmitButton'
import classes from './Input.module.scss'
import { useState } from 'react'

export default function Input() {

  const [findPlace, setFindPlace] = useState('')

  const inputGrabber = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setFindPlace(e.target.value)
  }


  console.log(findPlace)

  return (
    <form  
      onSubmit={e => e.preventDefault()}
      className={classes.inputContainer}
    >
      <SearchLogo />
      <input 
        onChange={(e) => inputGrabber(e)} 
        type='text' 
        placeholder='Find the place to help' 
      />
      <SubmitButton />
    </form>
  )
}
