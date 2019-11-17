import { CharacterActions, SET_CHARACTERS, SET_DISPLAYED_CHARACTER, SET_IS_SEARCHING } from "../actions/character-actions";
import { StoreModel } from "../models";

const initialState: StoreModel = {
    characters: [],
    selectedCharacter: null,
    isSearching: false
};

export const characterReducer = (state: StoreModel = initialState, action: CharacterActions) => {
    switch(action.type) {
        case SET_CHARACTERS:
            return {
                ...state, characters: action.payload
            }
        case SET_DISPLAYED_CHARACTER:
            return {
                ...state, selectedCharacter: action.payload
            }
        case SET_IS_SEARCHING:
            return {
                ...state, isSearching: action.payload
            }
        default:
            return state;
    }
}

