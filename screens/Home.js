import React, { Component } from 'react';
import {Text, View,StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
          <Text style={styles.titleText}>ISS Tracker App</Text>
        </View>

    );
  }
}

const styles = StyleSheet.create({

    titleText: 
    { fontSize: 40,
     fontWeight: 'bold',
     color: 'blue' },

  });
  
