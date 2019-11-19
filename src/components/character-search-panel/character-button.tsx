import React from "react";
import { connect } from "react-redux";
import { StarWarsCharacter } from "../../models";
import { setSelectedCharacter } from "../../actions/character-actions";

const mapDispatchToProps = {
  setSelectedCharacter
};

interface ICharacterButtonProps {
  character: StarWarsCharacter;
}

type Props = typeof mapDispatchToProps & ICharacterButtonProps;
class CharacterButton extends React.Component<Props> {
  render() {
    return (
      <button
        className="character-btn"
        onClick={() => this.props.setSelectedCharacter(this.props.character)}
      >
        {this.props.character.name}
      </button>
    );
  }
}

export default connect(null, mapDispatchToProps)(CharacterButton);
