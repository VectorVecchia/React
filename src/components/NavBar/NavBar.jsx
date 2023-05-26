import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  const imgHard = "https://muyeducativo.com/wp-content/uploads/2018/01/cpu-images-min_opt.jpg";
  return (
    <header>
        <Link to={"/"}>
          <img className="imgHard" src={imgHard} alt="" />
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to={"/categoria/2"}> AMD </NavLink>
                </li>

                <li>
                  <NavLink to={"/categoria/3"}> NVIDIA </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar