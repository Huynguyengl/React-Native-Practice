import React, { Component } from 'react';
import {View,Alert} from 'react-native';
import Button from 'react-native-button';

export default class But extends Component {
    _onPressButton=()=>{
        Alert.alert("You Press the button");
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Button style={{fontSize:20,color:'white',backgroundColor:'green',padding:10,borderRadius:20}} onPress={
                        this._onPressButton
                    }>
                    This is a button
                </Button>
                {/* <View style={{backgroundColor:'pink',padding:10,borderRadius:16,shadowRadius:20,opacity:0.5}}>
                    <Button onPress={()=>{
                        this._onPressButton
                    }}
                    title="This is a button"
                    color="red"> 
                    </Button>
                </View> */}
            </View>
        )
    }
}
