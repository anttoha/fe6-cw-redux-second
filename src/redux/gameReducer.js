import { ADD_MONEY, BUY_MINER, BUY_POWER } from "./actionTypes.js";

const initialState = {
  money: 0,
  power: 1,
  powerCost: 10,
  miners: 0,
  minerCost: 50,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONEY:
      return { ...state, money: state.money + state.power };
    case BUY_POWER:
      if (state.money < state.powerCost) return state;
      return {
        ...state,
        money: state.money - state.powerCost,
        power: state.power + 1,
        powerCost: state.powerCost + 2,
      };
    case BUY_MINER:
      if (state.money < state.minerCost) return state;
      return {
        ...state,
        money: state.money - state.minerCost,
        miner: state.miners + 1,
        minerCost: state.minerCost + 2,
      };
    default:
      return state;
  }
};

export default gameReducer;
