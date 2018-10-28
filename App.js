import React from 'react';
import {Image,Text,View} from 'react-native';

export default class App extends React.Component {
  render() {
    let text=`



    Hello World
    `
    return(
      <View style={{alignItems:"center"}}>
        <Text>{text}</Text>
      </View>
    );
  }
}

