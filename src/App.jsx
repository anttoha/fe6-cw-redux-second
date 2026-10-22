import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header';
import { addMoneyByLaser, addMoneyByMiner } from './redux/actions';
import Clicker from './components/Clicker';
import Upgrades from './components/Upgrades';
import Shop from './components/Shop';

const App = () => {
  const dispatch = useDispatch();
  const miners = useSelector(state => state.game.miners);

  useEffect(() => {
    if (miners === 0) return;

    const timer = setInterval(() => {
      dispatch(addMoneyByMiner());
      dispatch(addMoneyByLaser());
    }, 1000);

    return () => clearInterval(timer)
  }, [miners, dispatch])

  return (
    <div className='min-h-screen bg-slate-950 text-slate-100 font-sans'>
      <Header />
      <main>
        <Clicker />
        <Upgrades />
        <Shop />
      </main>
    </div>
  )
}

export default App