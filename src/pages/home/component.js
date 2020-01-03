import React from 'react';
import Apps from '../../component/appbar';
import Navigations from '../../component/bottom-navigation'

function Home() {
  return (
    <React.Fragment>
      <Apps />
      <Navigations />
    </React.Fragment>
  );
}

export default Home;
