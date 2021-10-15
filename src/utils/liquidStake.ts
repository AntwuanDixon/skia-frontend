import { ApiPromise } from "@polkadot/api";

export async function getMintFee(
    api: ApiPromise
  ): Promise<AnyJson> {
    try{
        const mintFee = api.consts.homaLite.mintFeeHuman.toString()
        const mintFeeHuman = await convertTokenValueToHuman(api, mintFee)
        return mintFeeHuman.toString()
      } catch (err) {
        console.log(err)
      }
  }

async function convertTokenValueToHuman (api: ApiPromise, rawNum: string): Promise<number> {
  const properties = await api.rpc.system.properties()
  const tokenDecimals = properties.get("tokenDecimals").toHuman()
  return parseInt(rawNum) / (10 ** (parseInt(tokenDecimals[0]) - 1))
}

async function convertTokenValueToMachine (api: ApiPromise, humanNum: string): Promise<number> {
  const properties = await api.rpc.system.properties()
  const tokenDecimals = properties.get("tokenDecimals").toHuman()
  return parseFloat(humanNum) * (10 ** (parseInt(tokenDecimals[0]) - 1))
}
  

export async function mintLKSM(
    address: string,
    api: ApiPromise,
    amount: string
): Promise<AnyJson> {
    const rawAmount = await convertTokenValueToMachine(api, amount)
    const extrinsic = api.tx.homaLite.mint(rawAmount);
    const hash = await extrinsic.signAndSend(address);
    return hash.toHuman()
}
