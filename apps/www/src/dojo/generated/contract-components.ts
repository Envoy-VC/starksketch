/* Autogenerated file. Do not edit manually. */
import {
  Type as RecsType,
  type World,
  defineComponent,
} from '@dojoengine/recs';

export type ContractComponents = Awaited<
  ReturnType<typeof defineContractComponents>
>;

export function defineContractComponents(world: World) {
  return {
    CoinBalance: (() => {
      return defineComponent(
        world,
        { address: RecsType.BigInt, balance: RecsType.BigInt },
        {
          metadata: {
            name: 'CoinBalance',
            types: ['contractaddress', 'u128'],
            customTypes: [],
          },
        }
      );
    })(),
    Game: (() => {
      return defineComponent(
        world,
        {
          game_id: RecsType.BigInt,
          word_hash: RecsType.BigInt,
          player_1: {
            address: RecsType.BigInt,
            game_id: RecsType.BigInt,
            board_id: RecsType.BigInt,
          },
          player_2: {
            address: RecsType.BigInt,
            game_id: RecsType.BigInt,
            board_id: RecsType.BigInt,
          },
          player_3: {
            address: RecsType.BigInt,
            game_id: RecsType.BigInt,
            board_id: RecsType.BigInt,
          },
          player_4: {
            address: RecsType.BigInt,
            game_id: RecsType.BigInt,
            board_id: RecsType.BigInt,
          },
          total_players: RecsType.BigInt,
        },
        {
          metadata: {
            name: 'Game',
            types: [
              'felt252',
              'felt252',
              'contractaddress',
              'felt252',
              'felt252',
              'contractaddress',
              'felt252',
              'felt252',
              'contractaddress',
              'felt252',
              'felt252',
              'contractaddress',
              'felt252',
              'felt252',
              'felt252',
            ],
            customTypes: ['Player', 'Player', 'Player', 'Player'],
          },
        }
      );
    })(),
    Player: (() => {
      return defineComponent(
        world,
        {
          address: RecsType.BigInt,
          game_id: RecsType.BigInt,
          board_id: RecsType.BigInt,
        },
        {
          metadata: {
            name: 'Player',
            types: ['contractaddress', 'felt252', 'felt252'],
            customTypes: [],
          },
        }
      );
    })(),
    Rewards: (() => {
      return defineComponent(
        world,
        {
          address: RecsType.BigInt,
          game_id: RecsType.BigInt,
          claimed: RecsType.Boolean,
        },
        {
          metadata: {
            name: 'Rewards',
            types: ['contractaddress', 'felt252', 'bool'],
            customTypes: [],
          },
        }
      );
    })(),
    ERC721Balance: (() => {
      return defineComponent(
        world,
        {
          token: RecsType.BigInt,
          account: RecsType.BigInt,
          amount: RecsType.BigInt,
        },
        {
          metadata: {
            name: 'ERC721Balance',
            types: ['contractaddress', 'contractaddress', 'u256'],
            customTypes: [],
          },
        }
      );
    })(),
    ERC721Meta: (() => {
      return defineComponent(
        world,
        {
          token: RecsType.BigInt,
          name: RecsType.BigInt,
          symbol: RecsType.BigInt,
        },
        {
          metadata: {
            name: 'ERC721Meta',
            types: ['contractaddress', 'felt252', 'felt252'],
            customTypes: [],
          },
        }
      );
    })(),
    ERC721Owner: (() => {
      return defineComponent(
        world,
        {
          token: RecsType.BigInt,
          token_id: RecsType.BigInt,
          token_uri: RecsType.BigInt,
          address: RecsType.BigInt,
        },
        {
          metadata: {
            name: 'ERC721Owner',
            types: ['contractaddress', 'felt252', 'felt252', 'contractaddress'],
            customTypes: [],
          },
        }
      );
    })(),
  };
}
