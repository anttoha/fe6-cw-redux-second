import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header';
import { addMoney } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();
  const {money, powerCost, minerCost, miners} = useSelector(state => state);

  useEffect(() => {
    if (miners === 0) return;

    const timer = setInterval(() => {
      dispatch(addMoney())
    }, 1000)

    return () => clearInterval(timer)
  }, [miners, dispatch])

  return (
    <div className='min-h-screen bg-slate-950 text-slate-100 font-sans'>
      <Header />
      <main>

      </main>
    </div>
  )
}

export default App