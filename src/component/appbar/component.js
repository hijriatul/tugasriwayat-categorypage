import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Apps() {
  return (
    <Box display="flex" justifyContent="center">
      <React.Fragment>
        <AppBar
          position="static"
          style={{
            maxWidth: 443,
            position: 'fixed',
            backgroundColor: 'pink',
            height: 60
          }}>
          <Typography style={{ marginTop: 7, marginLeft: 170 }} variant="h4">
            AppBar
          </Typography>
        </AppBar>
      </React.Fragment>
    </Box>
  );
}
export default Apps;
