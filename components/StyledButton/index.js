import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const StyledButton = (props) => {

    const { type, content} = props;

    

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
    const textColor = type === 'primary' ? '#FFFFFFA6' : '#171A20CC'


  return (
    <View style={styles.container}>

      <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColor}]}>

        <Text style={[styles.text, {color: textColor}]}>{content}</Text>

      </TouchableOpacity>
    </View>
  )
}

export default StyledButton