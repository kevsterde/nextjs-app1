import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'
function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://img.freepik.com/free-vector/gradient-abstract-geometric-background_23-2149120339.jpg" fill={true} alt="asd"
        className={styles.img}
        />
        <div className={styles.textInfo}>
          <h1>Digital Storreis</h1>
          <h2>Handiract Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, itaque.</h2>
        </div>
      </div>

      <div className={styles.textContainer}>
       <div className={styles.item}> 
       <h1>Who are we</h1>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nobis sed architecto ducimus necessitatibus temporibus illum unde est. Voluptatibus natus iure exercitationem cumque ipsa distinctio debitis. Odio dicta deleniti, eaque porro hic aut voluptate, dolor in doloremque est sunt. Voluptate dolores veritatis id quam quisquam repudiandae libero qui perferendis aliquid.</p></div>
       <div className={styles.item}>
       <h1>What We Do</h1>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nobis sed architecto ducimus necessitatibus temporibus illum unde est. Voluptatibus natus iure exercitationem cumque ipsa distinctio debitis. Odio dicta deleniti, eaque porro hic aut voluptate, dolor in doloremque est sunt. Voluptate dolores veritatis id quam quisquam repudiandae libero qui perferendis aliquid.</p>
       <Button text="Contact" url="/contact"/>
       </div>
        </div>



    </div>
  )
}

export default About