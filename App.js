import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleHandler = () => setOpen((currentOpen) => !currentOpen);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    toggleHandler();
  };

  const removeGoalHandler = (id) => {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((course) => course.id !== id)
    );
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={toggleHandler} />
      <GoalInput
        addGoalHandler={addGoalHandler}
        toggle={toggleHandler}
        open={open}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem onDelete={removeGoalHandler} goal={itemData.item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 75,
  },
});
