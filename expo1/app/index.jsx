import { StyleSheet, Text, View, Image, } from "react-native";
import { Link } from "expo-router";
import Logo from '../assets/images/FTC image.png';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={Logo}
          style={[styles.logo]}
          resizeMode="contain"
        />
      </View>

      <View style={styles.middleContainer}>
        <Text style={styles.title}>Home and stuff</Text>
        <Link href="/about" style={styles.link}>About page</Link>
      </View>
    </View>
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
    marginBottom: 30,
  },
  link: {
    borderBottomWidth: 1,
    color: 'red'
  },
});
