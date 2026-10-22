import {
  ADD_MONEY,
  ADD_MONEY_BY_LASER,
  ADD_MONEY_BY_MINER,
  BUY_LASER,
  BUY_MINER,
  BUY_POWER,
  UNLOCK_ACHIEVMENTS,
} from "./actionTypes.js";

const initialState = {
  money: 0,
  power: 1,
  powerCost: 10,
  miners: 0,
  minerCost: 50,
  minerLasers: 0,
  minerLaserCost: 350,
  achievments: [
    {
      id: "miner_1",
      title: "Авто-Помічник",
      description: "Купити першого помічника",
      unlocked: false,
    },
    {
      id: "money_100",
      title: "Соточка",
      description: "Заробити першу сотню",
      unlocked: false,
    },
    {
      id: "miner_laser_3000",
      title: "Лазер",
      description: "Купити перший лазер",
      unlocked: false,
    },
  ],
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONEY:
      return { ...state, money: state.money + state.power };
    case BUY_LASER:
      if (state.money < state.minerLaserCost) return state;
      return {
        ...state,
        money: state.money - state.minerLaserCost,
        minerLasers: state.minerLasers + 1,
        minerLaserCost: Math.floor(state.minerLaserCost * 2.2),
      };
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
        miners: state.miners + 1,
        minerCost: state.minerCost + 2,
      };
    case ADD_MONEY_BY_MINER:
      return { ...state, money: state.money + state.power * state.miners };
    case ADD_MONEY_BY_LASER:
      return { ...state, money: state.money + state.minerLasers + 5 };
    case UNLOCK_ACHIEVMENTS:
      return { ...state, achievments: state.achievments.map((ach) => ach.id === action.payload ? {...ach, unlocked: true} : ach) };
    default:
      return state;
  }
};

export default gameReducer;
