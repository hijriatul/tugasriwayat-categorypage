import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Box from '@material-ui/core/Box';

function Navigations() {
  return (
    <Box display="flex" justifyContent="center">
      <React.Fragment>
        <BottomNavigation
          position="static"
          style={{
            width: 440,
            position: 'fixed',
            backgroundColor: 'pink',
            height: 60,
            marginTop: 650
          }}>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </React.Fragment>
    </Box>
  );
}

export default Navigations;
