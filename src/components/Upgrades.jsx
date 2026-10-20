import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyMiner, buyPower } from "../redux/actions";

const Upgrades = () => {
  const dispatch = useDispatch();
  const { money, miners, minerCost, powerCost } = useSelector(
    (state) => state.game,
  );

  return <div className="container mx-auto px-4 space-y-4">
    <h2 className="text-lg font-bold text-amber-100">Покращення</h2>
    <div className="flex items-center justify-between rounded-xl p-4 border border-amber-100">
      <div>
        <p className="font-semibold text-white">Оновлення потужності</p>
        <p className="text-xs text-lime-200">Вартість: {powerCost}</p>
      </div>
      <button className="py-2 px-3 text-white bg-lime-900 font-bold rounded-full cursor-pointer transition-all hover:bg-lime-800 active:scale-90 disabled:opacity-60 disabled:cursor-not-allowed" disabled={money < powerCost} onClick={() => dispatch(buyPower())}>Купити</button>
    </div>
    <div className="flex items-center justify-between rounded-xl p-4 border border-amber-100">
      <div>
        <p className="font-semibold text-white">Найняти шахтаря</p>
        <p className="text-xs text-olive-200">Вартість: {minerCost}</p>
      </div>
      <button className="py-2 px-3 text-white bg-olive-900 font-bold rounded-full cursor-pointer transition-all hover:bg-olive-800 active:scale-90 disabled:opacity-60 disabled:cursor-not-allowed" disabled={money < minerCost} onClick={() => dispatch(buyMiner())}>Купити</button>
    </div>
  </div>;
};

export default Upgrades;
