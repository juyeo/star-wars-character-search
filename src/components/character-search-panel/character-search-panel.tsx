import React from 'react';
import { connect } from 'react-redux';
import { getCharacters } from '../../actions/character-actions';
import '../../App.css';
import { StoreModel, StarWarsCharacter } from '../../models';
import CharacterButton from "./character-button";
import PulseLoader from 'react-spinners/PulseLoader';


const mapStateToProps = function(state : StoreModel) {
  return state;
}
class CharacterSearchPanel extends React.Component<any> {
  componentDidMount() {
    this.props.dispatch(getCharacters());
  }

  render () {
    const characterButtons: JSX.Element[] = this.props.characters.map((character: StarWarsCharacter) => {
      return ( <CharacterButton character={character}/>);  
    });

    const spinner = <div>
      <PulseLoader
          sizeUnit={"px"}
          size={10}
          color={'#2d4e65'}
          loading={this.props.isSearching}
        />
    </div>

    return (
      <div className="character-search-panel">
        <div className="character-search-content-container">
          <div className="character-search-info">
            Search for your favourite Star Wars &trade; characters in the search box below. Click on the name to find
            out more information about them.
          </div>

          <h1>Search: </h1>
          <div>
            <input type="text" onChange={(event) => this.props.dispatch(getCharacters(event.target.value))} />
          </div>

          <h1>Characters:</h1>
          {this.props.isSearching ? spinner : characterButtons}

        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CharacterSearchPanel);
