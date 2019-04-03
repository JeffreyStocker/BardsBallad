import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loadAll, createCharacter } from '../reducers/characters';

import Container from '../atoms/Container';

import Character from '../components/Character';

class Characters extends Component {

  componentWillMount() {

    if (!this.props.loaded) this.props.loadAll()

  }

  render() {

    const { characters } = this.props;

    return (
      <Container {...this.props}>
        {
          (characters.length === 0) ?
            null :
            characters.map(character => {
              const { name, job, lvl } = character;
              return <Character key={character._id} name={name} job={job} lvl={lvl} character={character} id={character._id} />
            })
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters.characters,
    loaded: state.characters.loaded
  }
}


export default withRouter(connect(mapStateToProps, { loadAll })(Characters));