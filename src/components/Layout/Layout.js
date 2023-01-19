import { Fragment } from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import SideBar from '../SideBar/SideBar';
import MyProfile from '../MyProfile/MyProfile';


const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <MyProfile/>
      <SideBar/>
      
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
