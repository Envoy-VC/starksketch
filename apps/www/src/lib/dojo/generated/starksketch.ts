// Generated by dojo-bindgen on Wed, 19 Jun 2024 13:59:22 +0000. Do not modify this file manually.
import { type DojoProvider } from '@dojoengine/core';
import {
  Clause,
  ModelClause,
  valueToToriiValueAndOperator,
} from '@dojoengine/torii-client';
import { Account, AccountInterface } from 'starknet';

// Type definition for `core::byte_array::ByteArray` struct
export interface ByteArray {
  data: string[];
  pending_word: string;
  pending_word_len: number;
}

// Type definition for `starksketch::models::coin::CoinBalance` struct
export interface CoinBalance {
  address: string;
  balance: bigint;
}

// Type definition for `core::option::Option::<core::integer::u32>` enum
type Option<A> = { type: 'Some'; data: A } | { type: 'None' };

// Type definition for `starksketch::models::game::Rewards` struct
export interface Rewards {
  address: string;
  game_id: string;
  claimed: boolean;
}

// Type definition for `starksketch::models::token::ERC721Balance` struct
export interface ERC721Balance {
  token: string;
  account: string;
  amount: U256;
}

// Type definition for `core::integer::u256` struct
export interface U256 {
  low: bigint;
  high: bigint;
}

// Type definition for `starksketch::models::token::ERC721Owner` struct
export interface ERC721Owner {
  token: string;
  token_id: string;
  token_uri: string;
  address: string;
}

// Type definition for `starksketch::models::game::Game` struct
export interface Game {
  game_id: string;
  word_hash: string;
  player_1: Player;
  player_2: Player;
  player_3: Player;
  player_4: Player;
  total_players: string;
}

// Type definition for `starksketch::models::game::Player` struct
export interface Player {
  address: string;
  game_id: string;
  board_id: string;
}

// Type definition for `starksketch::models::token::ERC721Meta` struct
export interface ERC721Meta {
  token: string;
  name: string;
  symbol: string;
}

class BaseCalls {
  provider: DojoProvider;

  constructor(provider: DojoProvider) {
    this.provider = provider;
  }

  async execute(
    account: Account | AccountInterface,
    entrypoint: string,
    calldata: any[] = []
  ) {
    return await this.provider.execute(account, {
      contractName: 'actions',
      entrypoint,
      calldata,
    });
  }
}

export class ActionsCalls extends BaseCalls {
  constructor(provider: DojoProvider) {
    super(provider);
  }

  async dojoResource(account: Account | AccountInterface) {
    try {
      const res = await this.execute(account, 'dojo_resource', []);
      const result = await account.waitForTransaction(res.transaction_hash, {
        retryInterval: 1000,
      });

      return {
        hash: res.transaction_hash,
        result,
      };
    } catch (error) {
      console.error('Error executing dojoResource:', error);
      throw error;
    }
  }

  async spawnGame(
    account: Account | AccountInterface,
    game_id: string,
    word_hash: string
  ) {
    try {
      const res = await this.execute(account, 'spawn_game', [
        game_id,
        word_hash,
      ]);
      const result = await account.waitForTransaction(res.transaction_hash, {
        retryInterval: 1000,
      });

      return {
        hash: res.transaction_hash,
        result,
      };
    } catch (error) {
      console.error('Error executing spawnGame:', error);
      throw error;
    }
  }

  async joinGame(account: Account | AccountInterface, game_id: string) {
    try {
      const res = await this.execute(account, 'join_game', [game_id]);
      const result = await account.waitForTransaction(res.transaction_hash, {
        retryInterval: 1000,
      });

      return {
        hash: res.transaction_hash,
        result,
      };
    } catch (error) {
      console.error('Error executing joinGame:', error);
      throw error;
    }
  }

  async updateBoard(
    account: Account | AccountInterface,
    game_id: string,
    board_id: string
  ) {
    try {
      const res = await this.execute(account, 'update_board', [
        game_id,
        board_id,
      ]);
      const result = await account.waitForTransaction(res.transaction_hash, {
        retryInterval: 1000,
      });

      return {
        hash: res.transaction_hash,
        result,
      };
    } catch (error) {
      console.error('Error executing updateBoard:', error);
      throw error;
    }
  }

  async guessWord(
    account: Account | AccountInterface,
    game_id: string,
    word: string
  ) {
    try {
      const res = await this.execute(account, 'guess_word', [game_id, word]);
      const result = await account.waitForTransaction(res.transaction_hash, {
        retryInterval: 1000,
      });

      return {
        hash: res.transaction_hash,
        result,
      };
    } catch (error) {
      console.error('Error executing guessWord:', error);
      throw error;
    }
  }

  async dojoInit(account: Account | AccountInterface) {
    try {
      const res = await this.execute(account, 'dojo_init', []);
      const result = await account.waitForTransaction(res.transaction_hash, {
        retryInterval: 1000,
      });

      return {
        hash: res.transaction_hash,
        result,
      };
    } catch (error) {
      console.error('Error executing dojoInit:', error);
      throw error;
    }
  }

  async initialize(account: Account | AccountInterface) {
    try {
      const res = await this.execute(account, 'initialize', []);
      const result = await account.waitForTransaction(res.transaction_hash, {
        retryInterval: 1000,
      });

      return {
        hash: res.transaction_hash,
        result,
      };
    } catch (error) {
      console.error('Error executing initialize:', error);
      throw error;
    }
  }

  async meta(account: Account | AccountInterface) {
    try {
      const res = await this.execute(account, 'meta', []);
      const result = await account.waitForTransaction(res.transaction_hash, {
        retryInterval: 1000,
      });

      return {
        hash: res.transaction_hash,
        result,
      };
    } catch (error) {
      console.error('Error executing meta:', error);
      throw error;
    }
  }

  async name(account: Account | AccountInterface) {
    try {
      const res = await this.execute(account, 'name', []);
      const result = await account.waitForTransaction(res.transaction_hash, {
        retryInterval: 1000,
      });

      return {
        hash: res.transaction_hash,
        result,
      };
    } catch (error) {
      console.error('Error executing name:', error);
      throw error;
    }
  }

  async symbol(account: Account | AccountInterface) {
    try {
      const res = await this.execute(account, 'symbol', []);
      const result = await account.waitForTransaction(res.transaction_hash, {
        retryInterval: 1000,
      });

      return {
        hash: res.transaction_hash,
        result,
      };
    } catch (error) {
      console.error('Error executing symbol:', error);
      throw error;
    }
  }

  async balanceOf(account: Account | AccountInterface, address: string) {
    try {
      const res = await this.execute(account, 'balance_of', [address]);
      const result = await account.waitForTransaction(res.transaction_hash, {
        retryInterval: 1000,
      });

      return {
        hash: res.transaction_hash,
        result,
      };
    } catch (error) {
      console.error('Error executing balanceOf:', error);
      throw error;
    }
  }

  async ownerOf(account: Account | AccountInterface, token_id: string) {
    try {
      const res = await this.execute(account, 'owner_of', [token_id]);
      const result = await account.waitForTransaction(res.transaction_hash, {
        retryInterval: 1000,
      });

      return {
        hash: res.transaction_hash,
        result,
      };
    } catch (error) {
      console.error('Error executing ownerOf:', error);
      throw error;
    }
  }

  async tokenUri(account: Account | AccountInterface, token_id: string) {
    try {
      const res = await this.execute(account, 'token_uri', [token_id]);
      const result = await account.waitForTransaction(res.transaction_hash, {
        retryInterval: 1000,
      });

      return {
        hash: res.transaction_hash,
        result,
      };
    } catch (error) {
      console.error('Error executing tokenUri:', error);
      throw error;
    }
  }

  async mint(
    account: Account | AccountInterface,
    address: string,
    token_id: string,
    token_uri: string
  ) {
    try {
      const res = await this.execute(account, 'mint', [
        address,
        token_id,
        token_uri,
      ]);
      const result = await account.waitForTransaction(res.transaction_hash, {
        retryInterval: 1000,
      });

      return {
        hash: res.transaction_hash,
        result,
      };
    } catch (error) {
      console.error('Error executing mint:', error);
      throw error;
    }
  }
}

type Query = Partial<{
  CoinBalance: ModelClause<CoinBalance>;
  Rewards: ModelClause<Rewards>;
  Erc721Balance: ModelClause<ERC721Balance>;
  Erc721Owner: ModelClause<ERC721Owner>;
  Game: ModelClause<Game>;
  Erc721Meta: ModelClause<ERC721Meta>;
  Player: ModelClause<Player>;
}>;

type ResultMapping = {
  CoinBalance: CoinBalance;
  Rewards: Rewards;
  Erc721Balance: ERC721Balance;
  Erc721Owner: ERC721Owner;
  Game: Game;
  Erc721Meta: ERC721Meta;
  Player: Player;
};

type QueryResult<T extends Query> = {
  [K in keyof T]: K extends keyof ResultMapping ? ResultMapping[K] : never;
};

// Only supports a single model for now, since torii doesn't support multiple models
// And inside that single model, there's only support for a single query.
function convertQueryToToriiClause(query: Query): Clause | undefined {
  const [model, clause] = Object.entries(query)[0];

  if (Object.keys(clause).length === 0) {
    return undefined;
  }

  const clauses: Clause[] = Object.entries(clause).map(([key, value]) => {
    return {
      Member: {
        model,
        member: key,
        ...valueToToriiValueAndOperator(value),
      },
    } satisfies Clause;
  });

  return clauses[0];
}
type GeneralParams = {
  toriiUrl?: string;
  relayUrl?: string;
  account?: Account;
};

type InitialParams = GeneralParams &
  (
    | {
        rpcUrl?: string;
        worldAddress: string;
        actionsAddress: string;
      }
    | {
        manifest: any;
      }
  );
