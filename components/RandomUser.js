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
import styles from "../styles";

const RandomUser = () => {
  const [loading, setLoading] = useState(true);
  const [src, setSrc] = useState("");

  const getUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    setLoading(false);
    const url = data.results[0].picture.large;
    setSrc(url);
  };

  useEffect(() => {
    getUser();
    setSrc("https://picsum.photos/200/300?random=1");
  }, []);

  if (loading) {
    return <Text style={{ fontSize: 50 }}>Loading...</Text>;
  }

  return (
    <View
      style={{
        marginTop: 20,
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 30 }}>
        Get Random Image
      </Text>
      <Image source={{ uri: src }} style={{ width: 300, height: 300 }} />
      <Button
        title="Get Random Image"
        onPress={() => {
          getUser();
        }}
      />
    </View>
  );
};

export default RandomUser;
