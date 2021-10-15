type AppContextType = {
  state: AccountInfo[];
  dispatch: Dispatch<any>;
};

type AnyJson =
  | string
  | number
  | boolean
  | null
  | undefined
  | AnyJson[]
  | {
      [index: string]: AnyJson;
    };

type PriceDict = Record<string, bigint>;
type PriceList = Array<{ token: string; quote: string; price: bigint }>;
type BalanceDict = Record<string, bigint>;
type BalanceList = Array<{ token: string; balance: bigint }>;
type LpSpec = [string, string];

interface GetTokenBalancesOptions {
  api: ApiPromise;
  tokens: Array<string>;
}

interface BalanceComponents {
  free: number;
  frozen: number;
  reserved: number;
}

interface GetLpSharesOptions {
  api: ApiPromise;
  lpSpecs: Array<LpSpec>;
}

interface AccountInfo {
  balances: BalanceDict;
  address: string;
}
