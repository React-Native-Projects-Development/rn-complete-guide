import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  const { goal, onDelete } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onDelete.bind(this, goal.id)}
    >
      <View style={styles.listItem}>
        <Text>{goal.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
