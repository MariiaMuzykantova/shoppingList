import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {item: '', data:[]};
  }
  
  buttonPressedAdd = () => {
    this.setState ({data: [...this.state.data, {key: this.state.item}]})
  };

  buttonPressedClear = () => {
    this.setState ({data:[]})
  };

  render() {
    return (
      <View style={styles.container}>
      <TextInput style = {{width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText = {(item) => this.setState({item})}
        value = {this.state.item}
      />

      <View style = {styles.rowButton}>
        <Button onPress = {this.buttonPressedAdd} title = "ADD" color = '#0066ff'/>
        <Button onPress = {this.buttonPressedClear} title = "CLEAR"  color = '#0066ff'/> 
      </View>

      <Text style = {{marginTop: 10}}>Shopping list:</Text>

      <FlatList data={this.state.data}
        renderItem={({item}) =>
        <Text>{item.key}</Text>}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  rowButton: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
