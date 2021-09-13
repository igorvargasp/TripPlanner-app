import React,{ Component } from 'react'
import { View,Text, ImageBackground,Image,TouchableWithoutFeedback } from 'react-native'
import assets from './assets'
import styles from './styles'  
import isIphone from '../../utils/isIphoneXs'  

    
class HomeScreen extends Component{
    static navigationOptions = {
        header: null
    }
    state = {
    show: false
    }
    handleCounter = () =>{
        this.setState({
            show : !this.state.show 
        })
    }
    render(){
        return(
       <ImageBackground source={assets.background}
       imageStyle={{resizeMode:'stretch'}}
       style={styles.background}
       > 
        <View style={styles.wrapperLogoTripPlanner}>
       <Image source={assets.logo}/>
       </View>
        {
            !this.state.show ?
            <TouchableWithoutFeedback onPress={this.handleCounter}>
       <View style={styles.buttonBackground}>
           <Text style={styles.buttonText}>COMEÇAR</Text>
       </View>
            </TouchableWithoutFeedback> :

            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Trips')}>
       <View style={styles.buttonBackground}>
       <Image source={assets.pin} style={assets.pin}/>
           <Text style={styles.buttonText}>Vamos Planejar a sua Viagem?</Text>
        <Image source={assets.arrow} style={[styles.arrow, isIphone()? {marginBottom:16} :null ]}/>   
       </View>
            </TouchableWithoutFeedback>
        }
       
      
       </ImageBackground>     
    
        )
    }
}

export default HomeScreen