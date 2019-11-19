import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Appbars extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.AppBar}>
            <AppBar position="static">
              <Toolbar variant="dense">
                <Typography className={classes.Typography} variant="h5" color="inherit">
                  <strong>Riwayat</strong>
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
        );
    }
}

export default Appbars;