import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import constants from '../src/constants';

export const getBalance = async (address) => {
    const client = await CosmWasmClient.connect(constants.RPC_ADDRESS)
    const response = await client.queryContractSmart(constants.CW20_ADDRESS, {
      balance: {
        address: address
      }
    });
    return response.balance
    // console.log('response', response)
  }
  