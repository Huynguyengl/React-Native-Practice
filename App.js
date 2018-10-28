import React from 'react';
import {Image,Text,View,StyleSheet} from 'react-native';
import Flex from './componnents/Flex';
import Justify from './componnents/Justify';

export default class App extends React.Component {
  render() {
    let text=`
    
    
    Naruto Love Sasuke`
    return(
      //  <View style={{flex:1,margiTop:50}}>
      //   <Text style={styles.firstText}>{text}</Text>
      //   <Image source={{uri:"https://dw9to29mmj727.cloudfront.net/properties/2016/525-SeriesThumb_NARSHP_400x320.jpg"}}
      //         style={{width:300,height:200}}></Image>
      //  
      //   </View>
      <Justify/>
    );
  }
}
const styles=StyleSheet.create({
  firstText:{
    margin:5,
    color:'pink',
    fontSize:24
  }
})

