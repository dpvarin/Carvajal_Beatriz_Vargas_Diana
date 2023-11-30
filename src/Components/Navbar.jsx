import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal, themes } from './utils/global.context'

const Navbar = () => {
  const { handleChangeTheme, theme } = useContext(ContextGlobal)
  const themeClass = theme === themes.dark ? 'dark' : 'light';
  const textColor = theme === themes.dark ? 'white' : 'black';

  return (
    <nav className={themeClass}>
      <ul>
        <li><Link to="/home" style={{ color: textColor }}>Home</Link></li>
        <li><Link to="/dentist/1" style={{ color: textColor }}>Detalle Dentista</Link></li>
        <li><Link to="/contacto" style={{ color: textColor }}>Contacto</Link></li>
        <li><Link to="/favs" style={{ color: textColor }}>Favoritos</Link></li>
      </ul>
      <button
        onClick={handleChangeTheme}
        style={{ background: theme.background, color: theme.font }}
      >
        <img src="./images/tema2.ico" alt="tema" className="theme-icon" />
      </button>
    </nav>
  )
}

export default Navbar