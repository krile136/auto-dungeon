import { Characters } from '../../src/types/characters';

export type AddCharacterAction = {
  type: 'ADD_CHARACTER';
  character: Characters;
};

export const addCharacter = ({ character }: { character: Characters }) => {
  return {
    type: 'ADD_CHARACTER',
    character,
  };
};
