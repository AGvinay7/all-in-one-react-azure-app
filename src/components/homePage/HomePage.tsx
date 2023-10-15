import React, { useState } from 'react';
import './HomePage.css'
const HomePage = () => {

    return (<>
        <h1 className='glow xxxl'>Welcome to Vehicles ownership portal</h1>
        <div>{process.env.REACT_APP_BASE_URL}</div>
    </>)
}
export default HomePage;