import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const {money, power} = useSelector(state => state);

  return (
    <header className='bg-slate-900 border-b- border-slate-800 p-4 text-center'></header>
  )
}

export default Header