import { Link } from "expo-router";
import { StyleSheet, } from "react-native";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";


export default function About() {
  return (
    <ThemedView style={styles.containter}>
      <ThemedText style={styles.title} title={true}>text and stuff</ThemedText>
      <Spacer height={30} />
      <Link href="/" style={styles.link}>
        <ThemedText>Back Home</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    borderBottomWidth: 1,
    color: 'red'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
})