import './Nav.css'
import CartWidget from '../CartWidget/CartWidget'

function Nav() {
    
  return (
    <header>
        <h1 className='logo'>LOGO</h1>
        <nav>
            <ul>
                <li>AMD</li>
                <li>INTEL</li>
                <li>DISEÑO</li>
            </ul>
        </nav>
     <CartWidget/>
    </header>
  )
}

export default Nav
