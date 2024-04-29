import {Link, NavLink} from "react-router-dom";
import classes from './Nav.module.css';

const Nav = () => {
  return <main className={classes.box}>
      <ul className={classes.list}>
          <li className={classes.item}>
              <NavLink className={({isActive}) => {
                  return isActive
                    ? classes.active
                    : undefined
              }} to="/">Home</NavLink>
          </li>

          <li className={classes.item}>
              <NavLink className={({isActive}) => {
                  return isActive
                    ? classes.active
                    : undefined
              }} to="/about">About Us</NavLink>
          </li>

          <li className={classes.item}>
              <NavLink exact activeClassName="active" to="/posts">
                  Blog
              </NavLink>
          </li>
          <li className={classes.item}>
              <NavLink className={({isActive}) => {
                  return isActive
                    ? classes.active
                    : undefined
              }} to="/Contact">Contact</NavLink>
          </li>
      </ul>
  </main>
}
export default Nav;


