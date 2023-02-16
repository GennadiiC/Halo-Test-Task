import classes from './Form.module.scss'
import { useState } from 'react'

export default function Form() {

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const inputGrabber = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.target.id === 'name' ? setName(e.target.value) : setEmail(e.target.value)
  }

  console.log(name)
  console.log(email)

  return (
    <form 
      className={classes.form}
      onSubmit={e => e.preventDefault()}
    >
      <div className={classes.input}>
        <input 
          onChange={(e) => inputGrabber(e)} 
          type='text' 
          id='name' 
          placeholder='Name' 
          autoComplete='off'
        />
      </div>
      <div className={classes.input}>
        <input 
          onChange={(e) => inputGrabber(e)} 
          type='text' 
          id='email' 
          placeholder='Email' 
          autoComplete='off'
        />
      </div>
      <button
        type='submit'
      >
        Book a demo
      </button>
    </form>
  )
}
