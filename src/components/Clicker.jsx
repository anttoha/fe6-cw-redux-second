import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMoney } from "../redux/actions";

const Clicker = () => {
  const dispatch = useDispatch();
  const power = useSelector((state) => state.game.power);

  return (
    <div className="flex justify-center my-8">
      <button
        className="py-2 px-3 text-white bg-cyan-900 font-bold rounded-full cursor-pointer transition-all hover:bg-cyan-800 active:scale-90"
        onClick={() => dispatch(addMoney())}
      >
        Добути руду⛏️ +{power}
      </button>
    </div>
  );
};

export default Clicker;
