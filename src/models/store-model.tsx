import { StarWarsCharacter } from "./star-wars-character-model";

export interface StoreModel {
    isSearching: boolean;
    characters: StarWarsCharacter[],
    selectedCharacter: StarWarsCharacter | null;
}