import axios from 'axios';
import { StarWarsCharacter } from '../models';

/*
 * action types
 */

export const SET_CHARACTERS = "SET_CHARACTERS";
export const SET_DISPLAYED_CHARACTER = "SET_DISPLAYED_CHARATERS"
export const SET_IS_SEARCHING = "SET_IS_SEARCHING";

interface SetCharactersAction {
    type: typeof SET_CHARACTERS,
    payload: StarWarsCharacter[]
}

interface SetDisplayedCharactersAction {
    type: typeof SET_DISPLAYED_CHARACTER,
    payload: StarWarsCharacter
}

interface SetIsSearching {
    type: typeof SET_IS_SEARCHING,
    payload: boolean
}

export const setCharacters = (characters: StarWarsCharacter[]) : SetCharactersAction => ({type: SET_CHARACTERS, payload: characters }); 
export const setSelectedCharacter = (selectedCharacter: StarWarsCharacter) : SetDisplayedCharactersAction => ({type: SET_DISPLAYED_CHARACTER, payload: selectedCharacter }); 
export const setIsSearching = (isSearching: boolean) : SetIsSearching => ({type: SET_IS_SEARCHING, payload: isSearching }); 
// async await == try catch
// the fn that getCharacters returns, takes in a dispatch
export const getCharacters = (search?: string) =>  
    async (dispatch: any) => {
        try {
            dispatch(setIsSearching(true));
            const url = search ? "https://swapi.co/api/people/?search=" + search : "https://swapi.co/api/people/";
            const res = await axios.get(url);
            dispatch(setCharacters(res.data.results));
            dispatch(setIsSearching(false));
        } catch (e) {
            console.log(e);
        }
    };

export type CharacterActions = SetCharactersAction | SetDisplayedCharactersAction | SetIsSearching;

