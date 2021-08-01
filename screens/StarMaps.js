import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default class StarMapsScreen extends Component {
    render(){
        return(
            <View
            style={{
                flex:1,
                justifyContent: "center",
                alingItems: "center"
            }}>
                <Text style={{color: "blue"}}>Star Maps Screen</Text>
            </View>
        )
    }
}