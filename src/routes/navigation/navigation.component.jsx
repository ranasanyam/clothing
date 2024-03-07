import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to='/'>
            <div>
                <CrwnLogo className="logo" />
            </div>
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop' >
                SHOP
            </Link>
            <Link className="nav-link" to='/sign-in' >
                SignIn
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;