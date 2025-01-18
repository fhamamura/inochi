import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Sound from "react-native-sound";

const sound = new Sound("metronome.mp3", Sound.MAIN_BUNDLE, (error: any) => {
  if (error) {
    console.error("Failed to load the sound", error);
  }
});

export const Metronome = () => {
  const playSound = () => {
    sound.play();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metronome</Text>
      <Button title="Play" onPress={playSound} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default Metronome;