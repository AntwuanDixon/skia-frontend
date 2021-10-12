import { ApiPromise } from "@polkadot/api";
import { Hash } from '@polkadot/types/interfaces'

export type BalanceDict = Record<string, bigint>;
export type BalanceList = Array<{ token: string; balance: bigint }>;
export type LpSpec = [string, string];
declare type AnyJson = string | number | boolean | null | undefined | AnyJson[] | {
    [index: string]: AnyJson;
};


async function getMintFee(
    api: ApiPromise
  ): Promise<AnyJson> {
    try{
        const mintFee = api.consts.homaLite.mintFee.toHuman()
        console.log(mintFee)
        return mintFee
      } catch (err) {
        console.log(err)
      }
  }

async function mintLKSM(
    address: string,
    api: ApiPromise,
    amount: BigInt
): Promise<AnyJson> {
    const extrinsic = api.tx.homaLite.mint( amount );
    const hash = await extrinsic.signAndSend(address);
    console.log('hash', hash.toHuman());
    return hash.toHuman()
}

  // // Retrieve the chain name
  // const chain = await api.rpc.system.chain();

  // // Retrieve the latest header
  // // const lastHeader = await api.rpc.chain.getHeader();
  // let count = 0;
  // // Log the information
  // const unsubHeads = await api.rpc.chain.subscribeNewHeads((lastHeader) => {
  //   console.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);

  //   if (++count === 10) {
  //     unsubHeads();
  //   }
  // });

  // const unsub = await api.query.system.account(address, ({ nonce, data: balance }) => {
  //   console.log(`free balance is ${balance.free} with ${balance.reserved} reserved and a nonce of ${nonce}`);
  // });