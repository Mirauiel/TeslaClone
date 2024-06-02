import {Text, View,ImageBackground } from 'react-native'
import React from 'react'
import styles from './style'
import StyledButton from '../StyledButton'

const CarItem = (props) => {

  const { name, tagline, taglineCTA , image } = props.car;

  return (
    <View style={styles.carContainer}>

    <ImageBackground source={image}
    style={styles.image}
    />

    <View style={styles.titles}>
      <Text style={styles.title}>{name}</Text>


      <View style={{flexDirection:'row' , gap:5}}>

        <Text style={styles.subtitle}>{tagline}</Text>
        <Text style={styles.subtitleCTA} >{taglineCTA}</Text>

      </View>


    </View>

    <View style={styles.buttonsContainer}>
    <StyledButton type='primary' content={'Custom Order'}/>

    <StyledButton type='secondary' content={'Existing Inventory'}/>
    </View>
    </View>
  )
}

export default CarItem
