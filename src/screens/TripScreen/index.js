import React, { Component} from 'react'
import {View,Text,FlatList,TouchableWithoutFeedback,Image } from 'react-native'
import styles from './styles'

class TripScreen extends Component{
    static navigationOptions = {
        header: null
    }
    renderItem = item =>{
        return (
            <View style={styles.item}>
            <View style={styles.wrapperInfo}>
               <Text style={styles.name}>{item.item.name}</Text>
               <Text>{item.item.description}</Text> 
            </View>
            <View style={styles.price}>
                <Text style={styles.itemPrice}>{item.item.price}</Text> 
            </View>
            </View>
           
        )
    }
   
    render(){
        const Trip ={
        name : 'EuroTrip 2019',
        price: 'R$ 5000',
        places:[
            {id:'1',name:'Sidney',description:'Chegada',price:'R$ 1000',lat:0,long:0},
            {id:'2',name:'Gold Coast',description:'Hospedagem',price:'R$ 200',lat:0,long:0},
            {id:'3',name:'Sidney',description:'Chegada',price:'R$ 1000',lat:0,long:0},
            {id:'4',name:'Gold Coast',description:'Hospedagem',price:'R$ 200',lat:0,long:0},

            {id:'5',name:'Sidney',description:'Chegada',price:'R$ 1000',lat:0,long:0},
            {id:'6',name:'Gold Coast',description:'Hospedagem',price:'R$ 200',lat:0,long:0},
            {id:'5',name:'Sidney',description:'Chegada',price:'R$ 1000',lat:0,long:0},
            {id:'6',name:'Gold Coast',description:'Hospedagem',price:'R$ 200',lat:0,long:0}



        ]
        }
            return(
        <View style={{flex:1}}>
        <View style={styles.header}>
        <View style={styles.arrowLeftButton}>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../../../assets/arrow-left.png')}/>
        </TouchableWithoutFeedback>
        </View>
        <Text style={styles.tripName}>{Trip.name}</Text>
        <Text style={styles.tripMoney}>R$ 5000,00</Text>
        </View>
        <FlatList
            style={{flex:1}}
            contentContainerStyle={{
                paddingTop:16,
                paddingLeft:16
            }}
            keyExtractor={item => item.id}
            data = {Trip.places}
            renderItem={this.renderItem}
            
        />

        </View>

            )
    }

}
export default TripScreen