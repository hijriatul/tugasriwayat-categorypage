import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import PersonIcon from '@material-ui/icons/Person';


class Navbar extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
               <BottomNavigation style={{marginTop:85}} className={classes.BottomNavigation}>
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="History" icon={<HistoryIcon />} />
                    <BottomNavigationAction label="Person" icon={<PersonIcon />} />
                </BottomNavigation>
            </div>
        );
    }
}

export default Navbar;