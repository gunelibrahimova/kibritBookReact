import React from 'react'
// import Header from '../components/Header/Header'
import Instagram from '../components/Instagram/Instagram'
import SalesBook from '../components/SalesBook/SalesBook'
import Slider from '../components/Slider/Slider'
import Stocks from '../components/Stocks/Stocks'
import YayinEvi from '../components/YayinEvi/YayinEvi'
import Yazarlar from '../components/Yazarlar/Yazarlar'

const Home = () => {
  return (
    <div>
        {/* <Header/> */}
        <Slider/>
        <Yazarlar />
        <YayinEvi />
        <SalesBook />
        <Stocks />
        <Instagram />
    </div>
  )
}

export default Home