import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>

      <Text>text and stuff</Text>
      <Link href="/" style={styles.link}>Back Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    borderBottomWidth: 1,
    color: 'red'
  }
})