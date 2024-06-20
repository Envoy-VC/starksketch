import { byteArray } from 'starknet';

import { type ClientComponents } from './create-client-components';
import { type ContractComponents } from './generated/contract-components';
import type { IWorld } from './generated/generated';

import type {
  GuessWordProps,
  JoinGameProps,
  MintNFTProps,
  SpawnGameProps,
  UpdateBoardProps,
} from '~/types/dojo';

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { client }: { client: IWorld },
  _contractComponents: ContractComponents,
  _clientComponents: ClientComponents
) {
  const spawnWorld = async ({ account, gameId, wordHash }: SpawnGameProps) => {
    try {
      const res = await client.actions.spawnGame(account, gameId, wordHash);
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  const joinGame = async ({ account, gameId }: JoinGameProps) => {
    try {
      const res = await client.actions.joinGame(account, gameId);
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  const updateBoard = async ({
    account,
    gameId,
    boardId,
  }: UpdateBoardProps) => {
    try {
      const arr = byteArray.byteArrayFromString(boardId);
      const res = await client.actions.updateBoard(account, gameId, arr);
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  const mintNFT = async ({
    account,
    tokenId,
    tokenURI,
    gameId,
  }: MintNFTProps) => {
    try {
      const arr = byteArray.byteArrayFromString(tokenURI);
      const res = await client.actions.mint(account, tokenId, gameId, arr);
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  const guessWord = async ({ account, gameId, word }: GuessWordProps) => {
    const res = await client.actions.guessWord(account, gameId, word);
    return res;
  };

  return {
    spawnWorld,
    joinGame,
    updateBoard,
    mintNFT,
    guessWord,
  };
}
