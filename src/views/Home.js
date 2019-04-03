import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import requireAuth from '../components/requireAuth';

import SlideOut from '../components/SlideOut';

import Characters from '../views/Characters';
import Character from '../views/Character';

import styles from '../css/LoggedIn.module.scss';

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <SlideOut />
        <div className={styles.contentContainer}>
          <div style={{width: "calc(32% - 20px)"}}>
            <Route path='/characters' component={Characters} exact/>
            <Route path='/' component={Characters} exact/>
          </div>
          <Route path='/characters/:characterID' component={Character} exact/>
        </div>
      </div>
    )
  }
}

export default requireAuth(Home);