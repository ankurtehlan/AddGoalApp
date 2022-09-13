import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';




export default function App() {
  
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function GoalTextEventHandler(value) {
    setEnteredGoalText(value);
  }
  
  function GoalAddHandler() {
    console.log(enteredGoalText);
  }
  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} onChangeText={GoalTextEventHandler}  placeholder="Your Course Goal!"/>
      <Button style={styles.button} onPress={GoalAddHandler} title='Add Goal'/>
      </View>
      <View style={styles.GoalsContainer}>
        <Text>{enteredGoalText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    paddingTop:50,
    paddingHorizontal:16,
    flex:1
  },
  inputContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'
  },
  textInput: {
    borderWidth:1,
    borderColor:"#cccccc",
    padding:8,
    width:'70%',
    marginRight:8
  },
  GoalsContainer: {
    flex:5
  }

});
