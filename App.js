import { FlatList, StyleSheet, View } from "react-native";

import GoalInput from "./components/GoalInput.js";
import GoalItem from "./components/GoalItem.js";
import { useState } from "react";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(newGoalText) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: newGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },

  goalsContainer: {
    flex: 7,
  },
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
});
