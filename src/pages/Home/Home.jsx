import React, { useState } from 'react'
import './Home.css'
import { Header } from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { FoodDisplay } from '../../FoodDisplay/FoodDisplay'
import { AppDownlod } from '../../components/AppDownlod/AppDownlod'

 const Home = () => {
  const[category,setCategory]=useState('All')
  console.log(category)
  return (
    <div>
   <Header/>
  <ExploreMenu category={category} setCategory={setCategory}/>
  <FoodDisplay category={category}/>
  <AppDownlod/>
    </div>
  )
}

export default Home
