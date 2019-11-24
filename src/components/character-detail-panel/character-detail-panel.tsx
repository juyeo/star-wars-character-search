import React from "react";
import { connect } from "react-redux";
import "../../App.css";
import { StoreModel, StarWarsCharacter } from "../../models";

const mapStateToProps = function(state: StoreModel) {
  if (state.selectedCharacter) {
    return { selectedCharacter: state.selectedCharacter };
  }
};

interface ICharacterDetailProps {
  selectedCharacter: StarWarsCharacter;
}

type Props = typeof mapStateToProps;

class CharacterDetailPanel extends React.Component<ICharacterDetailProps> {
  render() {
    return this.props.selectedCharacter ? (
      <div className="character-detail-panel">
        <h1>{this.props.selectedCharacter.name}</h1>

        <div className="characteristic-container">
          <div className="characteristic-name">Hair color</div>
          <div className="characteristic-info">
            {this.props.selectedCharacter.hair_color}
          </div>
        </div>

        <div className="characteristic-container">
          <div className="characteristic-name">Skin color</div>
          <div className="characteristic-info">
            {this.props.selectedCharacter.skin_color}
          </div>
        </div>

        <div className="characteristic-container">
          <div className="characteristic-name">Eye color</div>
          <div className="characteristic-info">
            {this.props.selectedCharacter.eye_color}
          </div>
        </div>

        <div className="characteristic-container">
          <div className="characteristic-name">Birth Year</div>
          <div className="characteristic-info">
            {this.props.selectedCharacter.birth_year}
          </div>
        </div>

        <div className="characteristic-container">
          <div className="characteristic-name">Gender</div>
          <div className="characteristic-info">
            {this.props.selectedCharacter.gender}
          </div>
        </div>
      </div>
    ) : (
      <div className="character-detail-panel"></div>
    );
  }
}

export default connect(mapStateToProps)(CharacterDetailPanel);
