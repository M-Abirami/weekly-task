// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ViewImageScreen from './screens/ViewImageScreen';
// import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      <ViewImageScreen />
      {/* <StatusBar style="auto" />  */}
    </SafeAreaView>
  );
}



// export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
    
}
})