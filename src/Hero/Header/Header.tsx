import Logo from './Logo/Logo'
import Link from './Link/Link'
import Button from './Button/Button'
import classes from './Header.module.scss'
import { useState } from 'react'

type link = {
  name: string
  clicked: boolean
  id: number
}

type LinkArr = link[]


export default function Header() {

  const [showMenu, setShowMenu] = useState<boolean>(false)

  const [linkArr, setLinkArr] = useState<LinkArr>([
    {name: 'Home', clicked: false, id: 1}, 
    {name: 'Our mission', clicked: false, id: 2}, 
    {name: 'Places', clicked: false, id: 3}, 
    {name: 'Team', clicked: false, id: 4}
  ])

  const linkClickHandler = (id: number) => {
    setLinkArr(prev => 
      prev.map(item => 
        item.id === id ? {...item, clicked: true} : 
        item.clicked === true ? {...item, clicked: false} :
        item
      )
    )
    setShowMenu(false)
  }

  const buttonClickHandler = (menu: boolean) => {
    if (menu) setShowMenu(false)
  }

  return (
    <div className={classes.header}>
      <Logo />
      <div
        className={
          classes.linkContainer
        }
      >
        {linkArr.map(item => 
          <Link
            to={item.name} 
            id={item.id} 
            key={item.id} 
            clicked={item.clicked}
            clicker={linkClickHandler}
            menu={false} 
          />
        )}
      </div>
      <div className={classes.btnVisible}>
        <Button clickHandler={buttonClickHandler} menu={false} />
      </div>
      <div className={classes.menuBtn} onClick={() => setShowMenu(!showMenu)}>
        <span 
          className={
            showMenu ? 
            `${classes.menuBtn_burger} ${classes.open}` : 
            classes.menuBtn_burger
          }
        >
        </span>
      </div>
      <div 
        className={
          showMenu ?
          `${classes.linkContainer_menu} ${classes.linkContainer_menu_open}` :
          classes.linkContainer_menu
        }
      >
        <div className={classes.linkWrapper}>
          {linkArr.map(item => 
            <Link 
              to={item.name} 
              id={item.id} 
              key={item.id} 
              clicked={item.clicked}
              clicker={linkClickHandler}
              menu={true} 
            />
          )}
        </div>
        <Button clickHandler={buttonClickHandler} menu={true} />
      </div>
    </div>
    
  )
}
