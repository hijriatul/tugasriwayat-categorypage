import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import Grid from '@material-ui/core/Grid';

class Papers extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper style={{marginTop:40}} className={classes.papper}>
                    <Grid container spacing={2}>
                        <Grid item >
                        <Avatar style={{marginLeft:25}} className={classes.avatar}>
                            <PersonIcon />
                        </Avatar>
                        </Grid>
                        <Grid  style={{marginLeft:75}} className={classes.text} item >No.Antrian<br/><br/>Tanggal<br/><br/>17/11/2019</Grid>
                        <Grid style={{marginTop:90}} className={classes.grid} item >
                        status:selesai
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default Papers;