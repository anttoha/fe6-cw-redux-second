import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch();
    const {money, power, minerCost, miners} = useSelector(state => state.game);

  return (
    <header className='bg-slate-900 border-b- border-slate-800 p-4 text-center'>
      <h1 className='text-xl font-bold mb-1 text-cyan-200'>Потужно</h1>
      <div className="flex justify-center gap-6 text-sm text-slate-300">
        <p>Монети: <span className='text-amber-300 font-bold'>{money}</span></p>
        <p>Потужність: <span className='text-pink-300 font-bold'>{power}</span></p>
        <p>Майнерів: <span className='text-olive-300 font-bold'>{miners}</span></p>
      </div>
    </header>
  )
}

export default Header