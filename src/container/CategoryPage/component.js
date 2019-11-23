import React from 'react'
import Appcategory from '../../component/apBarCategory'
import Cards from '../../component/Card'
import Container from '@material-ui/core/Container'

class Component extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Container maxWidth="sm" style={{maxWidth:448}} className={classes.Container}>
                <Appcategory />
                <Cards />
            </Container>
        );
    }
}

export default Component;