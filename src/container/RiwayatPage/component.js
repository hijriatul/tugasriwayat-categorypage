import React from 'react';
import Appbar from '../../component/Appbar';
import Navbar from '../../component/Navigation';
import Papers from '../../component/Papper';
import Container from '@material-ui/core/Container';

class Component extends React.Component {
    render() {
        const {classes} = this.props;
        return (

            <Container maxWidth="sm" style={{maxWidth:448}} className={classes.Container}>
                <Appbar />
                <Papers />
                <Papers />
                <Papers />
                <Papers />
                <Navbar />
            </Container>
        );
    }
}

export default Component;