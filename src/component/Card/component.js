import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

class Cards extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Card style={{marginTop:40}} className={classes.cardB}>
                    <CardContent>
                        <Box>
                            Category A
                        </Box>
                    </CardContent>
                </Card>
                <Card style={{marginTop:40}} className={classes.cardB}>
                    <CardContent>
                        <Box >
                            Category B
                        </Box>
                    </CardContent>
                </Card>
                <Card style={{marginTop:40}} className={classes.cardB}>
                    <CardContent>
                        <Box>
                            Category C
                        </Box>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Cards;