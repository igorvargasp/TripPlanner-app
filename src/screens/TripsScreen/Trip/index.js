import React from 'react'
import {View,Text,Dimensions,TouchableOpacity} from 'react-native'
import styles from './styles'


const Trips = props => {
    const dim = Dimensions.get('window')    
    return (

        <TouchableOpacity onPress={props.onPress} style={styles.wrapperTrip}>
                            
            <View style={[ styles.image,{ width: dim.width-32,} ]}> 
            <Text>Image</Text>
            </View>
            <Text style={styles.price}>{props.price}</Text>
            <Text>{props.title}</Text>
              
                
            </TouchableOpacity>



    )
}
export default Trips
