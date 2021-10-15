import { ApiPromise } from "@polkadot/api";

export type BalanceDict = Record<string, bigint>;
export type BalanceList = Array<{ token: string; balance: bigint }>;
export type LpSpec = [string, string];
declare type AnyJson = string | number | boolean | null | undefined | AnyJson[] | {
    [index: string]: AnyJson;
};


export async function getMintFee(
    api: ApiPromise
  ): Promise<AnyJson> {
    try{
        const mintFee = api.consts.homaLite.mintFee.toString()
        const mintFeeHuman = await convertTokenValueToHuman (api, mintFee)
        return mintFeeHuman.toString()
      } catch (err) {
        console.log(err)
      }
  }

async function convertTokenValueToHuman (api, rawNum) {
  const properties = await api.rpc.system.properties()
  const tokenDecimals = properties.get("tokenDecimals").toHuman()
  return parseInt(rawNum) / (10 ** (parseInt(tokenDecimals[0]) - 1))
}

async function convertTokenValueToMachine (api, humanNum) {
  const properties = await api.rpc.system.properties()
  const tokenDecimals = properties.get("tokenDecimals").toHuman()
  return parseFloat(humanNum) * (10 ** (parseInt(tokenDecimals[0]) - 1))
}
  

export async function mintLKSM(
    address: string,
    api: ApiPromise,
    amount: BigInt
): Promise<AnyJson> {
    const rawAmount = await convertTokenValueToMachine(api, amount)
    console.log(rawAmount)
    console.log(address)
    const extrinsic = api.tx.homaLite.mint(rawAmount);
    const hash = await extrinsic.signAndSend(address);
    console.log('hash', hash.toHuman());
    return hash.toHuman()
}
