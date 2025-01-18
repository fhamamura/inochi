import React, { useEffect, useState, useRef } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Audio } from 'expo-av';

const Metronome = () => {
  const [bpm, setBpm] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<Audio.Sound | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../sounds/click1.mp3')
    );
    soundRef.current = sound;
  };

  useEffect(() => {
    loadSound();
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  const playSound = async () => {
    if (soundRef.current) {
      await soundRef.current.replayAsync();
    }
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        playSound();
      }, 60000 / bpm);
      intervalRef.current = interval;
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, bpm]);

  const increaseBpm = () => {
    setBpm(bpm + 1);
  };

  const decreaseBpm = () => {
    setBpm(bpm - 1);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metronome</Text>
      <Text style={styles.bpm}>{bpm} BPM</Text>
      <View style={styles.buttons}>
        <Button title="Decrease BPM" onPress={decreaseBpm} />
        <Button title={isPlaying ? "Stop" : "Start"} onPress={togglePlay} />
        <Button title="Increase BPM" onPress={increaseBpm} />
      </View>
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
    marginBottom: 20,
  },
  bpm: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});

export default Metronome;