import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';



class Appbars extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.AppBar}>
            <AppBar position="static">
              <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <KeyboardBackspaceIcon />
                </IconButton>
                <Typography className={classes.Typography} variant="h5" color="inherit">
                  <strong>Category</strong>
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
        );
    }
}

export default Appbars;