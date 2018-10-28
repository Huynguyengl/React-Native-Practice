import React, { Component } from 'react'
import {View,Text} from 'react-native'

export default class Justify extends Component {
    render(){
        return(
            <View style={{flex:1,flexDirection:'row',margin:50,justifyContent:'flex-start',alignItems:'flex-end'}}>
                <Text style={{width:50,height:50,backgroundColor:'red'}}></Text>
                <Text style={{width:50,height:50,backgroundColor:'blue'}}></Text>
                <Text style={{width:50,height:50,backgroundColor:'green'}}></Text>
            </View>
        )
    }
}
