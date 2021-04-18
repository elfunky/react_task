// 
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default function App() {
  return (

     
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={styles.textStyle}>Box 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.textStyle}>Box 2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.textStyle}>Box 3</Text>
        </View>
        
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 100,
    flex: 1, 
    flexDirection: 'row',  
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // marginTop:"60%"
  },
  box1: {
    width: 75,
    height: 75,
    backgroundColor: 'steelblue'
  },
  box2: {
    width: 75,
    height: 75,
    backgroundColor: 'salmon'
  },
  box3: {
    width: 75,
    height: 75, 
    backgroundColor: 'khaki'
  },
  textStyle: {
    color: 'black',
    alignSelf: 'center',
    margin: 20,
  }
});
