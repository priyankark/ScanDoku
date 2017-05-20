import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Sudoku from './Components/Sudoku';
import { NavigationBar, Heading, Divider } from '@shoutem/ui'


export default class App extends Component
{
  render()
  {
    return(
      <View style={{flex:1}}>

      <View>
      <NavigationBar centerComponent={<Heading>ScanDoku</Heading>} />
      </View>
      <Divider />
      <Divider />
      <View>
      <Sudoku style={{marginTop:35}} />
      </View>
      </View>
    );

  }
}
