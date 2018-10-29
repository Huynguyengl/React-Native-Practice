import React, { Component } from 'react'
import {TextInput,View,Text,Keyboard} from 'react-native'


export default class Input extends Component {
    constructor(props){
        super(props);
        this.state={
            typeText:'please type your text'
        }
    }
        componentWillMount(){
            this.keyboardDidShowListener=Keyboard.addListener('keyboardDidShow',()=>{
                this.setState(()=>{
                    return {typeText:'Key Board is shown '}
                })
            })
            this.keyboardDidShowListener=Keyboard.addListener('keyboardDidHide',()=>{
                this.setState(()=>{
                    return {typeText:'Key Board is Hide '}
                })
            })
        }
        componentWillUnmount(){
            this.keyboardDidShowListener.remove();
        }
  render() {
    return (

   
    <View>
        <TextInput 
        style={{height:40,borderColor:'gray',borderWidth:1,marginTop:40,margin:20,padding:10}} 
        keyboardType='email-address'
        autoFocus={true}
        placeholder='Enter Your Email'
        placeholderTextColor='red'
        onChangeText={
            (text)=>{
                this.setState(
                    (previousState)=>{
                        return{
                            typeText:text
                        }
                    }
                )
            }
        }
        />
        <Text style={{marginLeft:20}}>{this.state.typeText}</Text>
        <TextInput 
        style={{height:40,borderColor:'gray',borderWidth:1,margin:20,padding:10}} 
        keyboardType='default'
        placeholder='Enter Your PassWord'
        placeholderTextColor='black'
        secureTextEntry= {true}
        onChangeText={
            (text)=>{
                this.setState(
                    (previousState)=>{
                        typeText:text
                    }
                )
            }
        }
        />
        <TextInput 
        style={{height:100,borderColor:'gray',borderWidth:1,margin:20,padding:10,color:'green'}} 
        multiline={true}
        editable={true} 
        onSubmitEditing={Keyboard.dismiss}
        returnKeyType='google'
        />
    </View>
    )
  }
}
