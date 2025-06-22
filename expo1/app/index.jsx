import { StyleSheet, Image, } from "react-native";
import { Link } from "expo-router";
import Logo from '../assets/images/FTC image.png';
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

export default function Home() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.topContainer}>
        <Image
          source={Logo}
          style={[styles.logo]}
          resizeMode="contain"
        />
      </ThemedView>

      <ThemedView style={styles.middleContainer}>
        <ThemedText style={styles.title} title={true}>Home and stuff</ThemedText>
        <Spacer height={30} />
        <Link href="/login" style={styles.link}>
          <ThemedText>Login page</ThemedText>
        </Link>
        <Link href="/register" style={styles.link}>
          <ThemedText>Register page</ThemedText>
        </Link>
        <Link href="/profile" style={styles.link}>
          <ThemedText>Profile page</ThemedText>
        </Link>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    alignItems: "center",
    paddingTop: 20,
  },
  middleContainer: {
    flex: 0,                    // take remaining space
    justifyContent: "center",  // center vertically
    alignItems: "center",      // center horizontally
  },
  logo: {
    transform: [{ scale: 0.7 }],
    marginVertical: 20,
    marginLeft: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  link: {
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});
