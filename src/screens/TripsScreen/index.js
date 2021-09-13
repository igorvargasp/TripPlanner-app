import React, {Component} from 'react'
import {View,Text,FlatList} from 'react-native'
import Trips from './Trip';
import isIphone from '../../utils/isIphoneXs'
import MapView from 'react-native-maps'

class TripsScreen extends Component{
    static navigationOptions = {
        header:null
    }
    renderItem = item => {
        return <Trips onPress ={() => this.props.navigation.navigate('Trip')} title={item.item.name} price={item.item.price}/>
    }

    render(){
    const Trips = [
        {id:'1', name:'EuroTrip 2019',price:'R$ 4000'},
        {id:'2', name: 'Expedição Atacama', price: 'R$ 2200'}
    ]

    

        return(
          <View style={{flex:1,justifyContent:'space-between' }}>
            <View style={{
                    flex:1
                }}>
            <MapView
                
                initialRegion={{
                    latitude:37.78825,
                    longitude:-122.4324,
                    latitudeDelta:0.0922,
                    longitudeDelta:0.0421
                }}
            />            
            </View>

            <View style={{backgroundColor:'blue'}}>

            <FlatList
            data={Trips}
            renderItem={this.renderItem}
            horizontal
            keyExtractor={item => item.id}
            style={[
                isIphone() ?{marginBottom:20}: null
            ]}
            />
            </View>
           
            
          </View>
        )
    }
}

export default TripsScreen