import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyLaser } from '../redux/actions';

const Shop = () => {
    const dispatch = useDispatch();
    const {money, minerLasers, minerLaserCost} = useSelector(({game}) => game);
    console.log(minerLasers, money);
    

  return (
    <div className='mx-auto max-w-md space-y-3 px-4 mt-4'>
        <h2 className="font-bold mb-1 text-base text-slate-200">Магазин</h2>
        <div className="flex items-center justify-between bg-slate-900 border-slate-800 border p-4 rounded-xl">
            <div>
                <p className="font-semibold text-white text-sm">Лазер (Куплено: {minerLasers})</p>
                <p className="text-xs text-slate-400">Вартість: {minerLaserCost} монет (+5 монет/сек за шт)</p>
                <button className='bg-amber-600 hover:bg-amber-500 disabled:bg-slate-800 disabled:text-slate-600 text-white text-sx font-bold px-4 py-2 rounded-lg transition cursor-pointer' disabled={money < minerLaserCost} onClick={() => dispatch(buyLaser())}>Купити</button>
            </div>
        </div>
    </div>
  )
}

export default Shop