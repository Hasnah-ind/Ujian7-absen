import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import firestore from '@react-native-firebase/firestore';

export default class History extends Component {
    constructor(props){
        super(props);
        this.state = {data:[]}
    }
    componentDidMount(){
    this.getCollection();
  };

    getCollection = async () =>{
      const users = await firestore().collection('hadir').get();
      const allData = users.docs.map((doc)=>
      Object.assign({id :doc.id}, doc.data()));
      this.setState({data:allData});
      console.log(allData)
    }
    render() {
        return (
            <View>
                <FlatList
                data={this.state.data}
                renderItem={({item, index})=>(
                    <View>
                    <Text>{item.masuk}</Text>
                    </View>
                )}/>
            </View>
        )
    }
}
