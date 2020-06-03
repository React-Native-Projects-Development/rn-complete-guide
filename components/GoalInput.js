import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const { open, toggle } = props;

  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={open} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
          autoFocus
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={toggle} />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={addGoalHandler}
              disabled={!enteredGoal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%", // will take 80% of the availabe width, in this case by the parent (View) that sorrounds it
  },
  buttonContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
