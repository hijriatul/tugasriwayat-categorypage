import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import PersonIcon from '@material-ui/icons/Person';
import {Link}  from "react-router-dom";


class Navbar extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
               <BottomNavigation style={{marginTop:85}} className={classes.BottomNavigation}>
                    <BottomNavigationAction component={Link} to="/riwayat" label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction component={Link} to="/category"  label="FeaturedPlayList" icon={<FeaturedPlayListIcon />} />
                    <BottomNavigationAction component={Link} to="/" label="Person" icon={<PersonIcon />} />
                </BottomNavigation>
            </div>
        );
    }
}

export default Navbar;