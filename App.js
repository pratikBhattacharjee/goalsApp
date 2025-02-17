import { Button, FlatList, StyleSheet, View } from "react-native";

import GoalInput from "./components/GoalInput.js";
import GoalItem from "./components/GoalItem.js";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function addGoalHandler(newGoalText) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: newGoalText, key: Math.random().toString() },
    ]);
  }

  //function to delete a goal
  function deleteGoalHandler(goalKey) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalKey);
    });
  }

  function showModal() {
    setIsModalVisible(true);
  }
  function hideModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#991c99" onPress={showModal} />
        <GoalInput
          addGoalHandler={addGoalHandler}
          visible={isModalVisible}
          hideModalFunc={hideModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.key}
              />
            )}
            keyExtractor={(item) => item.key}
          />
        </View>
      </View>
    </>
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
