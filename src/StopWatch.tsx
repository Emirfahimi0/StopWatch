import React, { useState, useRef } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { timeFormatter, validateInput } from "./utils/formatter";

const Stopwatch: React.FC = () => {
  const [delay, setDelay] = useState<string>("");
  const [timer, setTimer] = useState<string>("");
  const [time, setTime] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);

  const startStopwatch = () => {
    if (delay === "" || timer === "") return Alert.alert("Cannot be empty value ");

    if (!validateInput(delay) || !validateInput(timer)) return Alert.alert("Please enter valid numbers for delay and timer.");

    const delayValue = parseInt(delay, 10);
    const timerValue = parseInt(timer, 10);

    // The keyboardType still prevents from key in negative numbers
    if (delayValue <= 0 || timerValue <= 0) return Alert.alert("Please enter positive numbers for delay and timer.");

    setTime(timerValue);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, delayValue * 1000);
  };

  return (
    <View>
      <Text>Time: {timeFormatter(time)}</Text>
      <TextInput placeholder="Enter delay in seconds" keyboardType="numeric" value={delay} onChangeText={(text) => setDelay(text)} />
      <TextInput placeholder="Enter timer in seconds" keyboardType="numeric" value={timer} onChangeText={(text) => setTimer(text)} />
      <Button title="Start Stopwatch" onPress={startStopwatch} />
      <Button
        title="Stop Stopwatch"
        onPress={() => {
          clearInterval(intervalRef.current!);
        }}
      />
    </View>
  );
};

export default Stopwatch;
