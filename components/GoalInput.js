import React from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = () => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  // 사용자가 내용을 입력할 때 해당 입력값을 가져오는 함수
  const goalInputHandler = (enteredText) => {
    //  console.log(enteredText);
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder='할 일을 입력하세요!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='할 일 추가하기' onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title='취소' onPress={props.modalOff} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row"
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  }
});
