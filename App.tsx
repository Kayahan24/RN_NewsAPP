import { Text, View ,FlatList} from 'react-native'
import React, { Component } from 'react'
import news_data from  './src/news_data.json';

const App = () =>{
  return (
    <View>
      <Text>AppASDASD</Text>
      <FlatList data={news_data} renderItem={({item})=><Text>{item.title}</Text>}/>
    </View>
  )
}
export default App;