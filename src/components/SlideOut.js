import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCharacter } from '../reducers/characters';

import classnames from 'classnames';
import Characters from '../views/Characters';
import ButtonPrimary from '../components/Button_PrimaryColor';

import styles from '../css/SlideOut.module.scss';

class SlideOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    const { open } = this.state;

    return (
      <div className={classnames(styles.container, { [styles.open]: open })}>
        <div className={styles.titleContainer}><p className={styles.title} >Characters</p></div>
        <div className={styles.content} style={{overflow: 'auto', height: '100%', width: '100%'}}>
          <Characters></Characters>
        </div>
        <div className={styles.footer}>
          <ButtonPrimary
            onClick={this.props.createCharacter}>
            Add<br/>Character
          </ButtonPrimary>
        </div>
      </div>
    );
  }
}
//   render() {
//     const { open } = this.state;

//     return (
//       <div className={classnames(styles.container, { [styles.open]: open })} style={{display: 'table', height: "100vh"}}>
//         <div style={{display: 'table-header-group', }}><p className={styles.title} >Characters</p></div>
//         <div style={{overflow: 'auto', height: '100%', width: '100%'}}>
//           <Characters></Characters>
//         </div>
//         <div style={{
//           display: 'table-footer-group',
//           alignSelf: 'flex-end',}}>

//           <ButtonPrimary
//             onClick={this.props.createCharacter}>
//             Add<br/>Character
//           </ButtonPrimary>
//         </div>
//       </div>
//     );
//   }
// }

const mapStateToProps = (state) => {
  return {};
};

export default (connect(mapStateToProps, { createCharacter })(SlideOut));