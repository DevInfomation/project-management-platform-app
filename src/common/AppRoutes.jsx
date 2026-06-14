import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Hero from '../HeroPage/Hero';
import HomePage from '../MainPage/HomePage';
import Signup from '../Login&SignupForms/Signup';

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/main-board' element={<HomePage />} />
            <Route path='/sign-up' element={<Signup />} />
        </Routes>
    </>
  )
}

export default AppRoutes