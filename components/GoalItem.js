import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        android_ripple={{ color: "#f2b8f2", foreground: true }}
        style={({ pressed }) => (pressed ? styles.pressedGoal : null)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 0,
    marginVertical: 10,
    backgroundColor: "#991c99",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  pressedGoal: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 10,
  },
});
