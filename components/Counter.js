import React from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import styles from "../styles";

const Counter = ({ value, setValue }) => {
  return (
    <View style={{ marginTop: 100, fontWeight: "bold" }}>
      <Text style={{ textAlign: "center", fontSize: 60, fontWeight: "bold" }}>
        NepApp
      </Text>
      <Text style={{ textAlign: "center", fontSize: 50 }}>Counter</Text>
      <Text style={styles.value}>{value}</Text>
      <Button
        title="Increase"
        onPress={() => {
          setValue(value + 1);
        }}
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        title="Decrease"
        onPress={() => {
          setValue(value - 1);
        }}
        color="red"
      />
      <Button
        title="Reset"
        onPress={() => {
          setValue(0);
        }}
        color="grey"
      />
    </View>
  );
};

export default Counter;
