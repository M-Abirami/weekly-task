import React from 'react';
import {  StyleSheet ,Image,View,Text,TouchableOpacity} from 'react-native';

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent: 'space-between' }}>
             <View
        style={[styles.box,{backgroundColor: "#fc5c65",margin:110}]}
      />
       <View
        style={[styles.box,{backgroundColor: "#4ECDC4",margin:110}]}
      />
      </View>
    
            <Image  style={styles.image} source={require('../assets/chair.jpg')}></Image>
      
      </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'black',
        width:'100%',
        height:'100%',
       
      },
      image:{
        marginBottom:10,
          width:310,
          height:400,
      },
      box: {
         
        marginTop:40, 
        backgroundColor: "#fc5c65",
        width: 60,
        height: 60,
        justifyContent:'space-evenly'

      },
   
     
   
    
})