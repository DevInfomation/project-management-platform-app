import React from 'react'
import { Routes, Route } from 'react-router';
import Hero from '../HeroPage/Hero';
import HomePage from '../MainPage/HomePage';

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/main-board' element={<HomePage />} />
        </Routes>
    </>
  )
}

export default AppRoutes