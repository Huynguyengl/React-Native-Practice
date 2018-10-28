import React, { Component } from 'react'
import {View,Text} from 'react-native'

export default class Flex extends Component {
    render(){
        return(
            <View style={{flat:1,flexDirection:'row'}}>
                <Text style={{width:50,height:50,backgroundColor:'red'}}></Text>
                <Text style={{width:50,height:50,backgroundColor:'blue'}}></Text>
                <Text style={{width:50,height:50,backgroundColor:'green'}}></Text>

            </View>
        )
    }
}
