import { Text, View, StyleSheet } from 'react-native';

function GoalItems(props) {
  return (
        <>
         <Text style={styles.textItem} key={props.itemData.index}>{props.itemData.item}</Text>
        </>
 
  )
}

export default GoalItems;

const styles = StyleSheet.create({
    textItem: {
        margin:8,
        padding:8,
        backgroundColor:"#5e0acc",
        color:"white",
        borderRadius:6
      },
})