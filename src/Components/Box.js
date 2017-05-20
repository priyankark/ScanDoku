import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Title} from '@shoutem/ui'

export default class Box extends Component{

render()
{

let style={
height:30,
borderLeftWidth:1,
borderTopWidth:1,
borderRightWidth:1,
borderBottomWidth:1

};



if(this.props.index%9===0)
{
   style.borderLeftWidth=2;
}

return(
<View style={style}>
<Title>
  <Text> 1 </Text>
</Title>
</View>
);

}

}
