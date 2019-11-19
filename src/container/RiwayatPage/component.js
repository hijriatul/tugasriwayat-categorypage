import React from 'react';
import Appbar from '../../component/Appbar';
import Navbar from '../../component/Navigation';
import Papers from '../../component/Papper'

class Component extends React.Component {
    render() {
        return (
            <div>
                    <Appbar />
                    <Papers />
                    <Papers />
                    <Papers />
                    <Papers />
                    <Navbar />
            </div>
        );
    }
}

export default Component;