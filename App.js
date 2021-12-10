import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import Counter from "./components/Counter";
import RandomUser from "./components/RandomUser";

const YourApp = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Counter value={value} setValue={setValue} />
      <RandomUser />
    </>
  );
};

export default YourApp;
