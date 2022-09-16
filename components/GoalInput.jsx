import { Text, View, StyleSheet,TextInput, Button } from 'react-native'

function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
    <TextInput style={styles.textInput}  onChangeText={props.GoalTextEventHandler}  placeholder="Your Course Goal!"/>
    <Button onPress={props.GoalAddHandler} title='Add Goal'/>
    </View>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
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
})