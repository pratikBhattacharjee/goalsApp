import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

import { useState } from "react";

export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  //function to handle text input of the goal
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  //function to handle adding a goal
  function addNewGoalHandler() {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal("");
    props.hideModalFunc();
  }

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={{ marginRight: "4%" }}>
            <Button title="Add Goal" onPress={addNewGoalHandler} />
          </View>

          <View style={{ marginRight: "4%" }}>
            <Button title="Cancel" color="red" onPress={props.hideModalFunc} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    paddingLeft: "4%",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "90%",
    marginRight: "2%",
  },
});
