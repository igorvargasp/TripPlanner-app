import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    item:{
        flex:1,flexDirection:'row', paddingBottom:16
    },
    name:{
        fontWeight:'bold',  fontSize:18
    },
    price:{
        justifyContent:'center', alignItems:'center', paddingRight:16
    },
    itemPrice:{
        textAlign:'right', color:'#514A9D', fontWeight:'bold'
    },
    wrapperInfo:{
        flex:1
    },
    header:{
        height:220, backgroundColor:'green'
    },
    arrowLeftButton:{
        position:'absolute', top:6, left:6
    },
    tripName:{
        position:'absolute', top:175, left:10, fontSize:18
    },
    tripMoney:{
    position:'absolute', top:170, right:30, textAlign:'right', backgroundColor:'#514A9D', paddingBottom:5,
    paddingLeft:8, paddingRight:8, paddingTop:5, color: 'white',  
}

})
export default styles