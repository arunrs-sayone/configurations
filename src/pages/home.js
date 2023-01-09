import React from "react";
import Styles from './home.module.scss'
import image from '../assets/images/logo.svg'

const Home = () => {
    return(
        <div className={Styles.container}>
         Home
         <img src={image} />
        </div>
    )
}

export default Home