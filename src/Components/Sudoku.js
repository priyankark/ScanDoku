import React, {Component} from 'react';
import {TextInput, View, Text, ScrollView} from 'react-native';
import SudokuGrid from 'react-native-smart-sudoku-grid';
import Box from './Box';

const columnCount = 9;

export default class Sudoku extends Component{

state={
  dataList:[]
}


componentWillMount()
{
  let dataList=[];
  for(let i=0;i<=80;i++)
  {
    dataList.push({number:''});
  }
  this.setState({dataList:dataList});

}


render()
{

return(

  <ScrollView style={{marginTop: 44 + 20, backgroundColor: '#fff', }}>
  <SudokuGrid
                  containerStyle={{ backgroundColor: '#fff',}}
                  columnCount={columnCount}
                  dataSource={this.state.dataList}
                  renderCell={this._renderGridCell}
              />

  </ScrollView>
);


}


_renderGridCell = (data, index, list) => {
return(
  <Box data={data} index={index} />
);

}



}
