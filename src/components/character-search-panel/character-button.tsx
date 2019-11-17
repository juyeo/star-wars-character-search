import React from 'react';
import { connect } from 'react-redux';
import { StoreModel} from '../../models';
import { setSelectedCharacter } from '../../actions/character-actions';

const mapStateToProps = function(state : StoreModel) {
    return state;
}

class CharacterButton extends React.Component<any> {
    render () {
        return (
            <button className="character-btn" onClick={() => this.props.dispatch(setSelectedCharacter(this.props.character))}>
                { this.props.character.name }
            </button>
        );
    }
}

export default  connect(mapStateToProps)(CharacterButton);;
