import { useState } from 'react';
import {  StyleSheet, View, FlatList } from 'react-native';
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput';


export default function App() {
  
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function GoalTextEventHandler(value) {
    setEnteredGoalText(value);
  }
  
  function GoalAddHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }
  return (
    <View style={styles.appcontainer}>
      <GoalInput 
      GoalTextEventHandler={GoalTextEventHandler} 
      GoalAddHandler={GoalAddHandler}/>
      <View style={styles.GoalsContainer}> 
      <FlatList 
      data={courseGoals}
      renderItem={(itemData) => {
        return (
          <GoalItems itemData={itemData} />)}}/>
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
  GoalsContainer: {
    flex:5
  },
});
