import React from 'react'
import { TextInput,SafeAreaView } from 'react-native'
import styles from './Input.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Input = ({placeholder, onType, value, iconName, isSecure}) => {
    return(
        <SafeAreaView style={styles.container} >
            <TextInput 
            style={styles.input}
            placeholder={placeholder} 
            value={value} 
            onChangeText={onType}
            secureTextEntry={isSecure} />
            <Icon style={styles.icon} name={iconName} size={25} /> 
        </SafeAreaView>
    )
}
export default Input