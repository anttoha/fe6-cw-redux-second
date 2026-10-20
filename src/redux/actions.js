import { ADD_MONEY, ADD_MONEY_BY_MINER, BUY_MINER, BUY_POWER } from "./actionTypes.js"

// Action Creators
export const addMoney = () => ({
    type: ADD_MONEY
})
export const buyPower = () => ({
    type: BUY_POWER
})
export const buyMiner = () => ({
    type: BUY_MINER
})
export const addMoneyByMiner = () => ({
    type: ADD_MONEY_BY_MINER
})