import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Audio } from 'expo-av';

const Metronome = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [bpm, setBpm] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../sounds/click1.mp3')
    );
    setSound(sound);
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        playSound();
      }, 60000 / bpm);
      setIntervalId(interval);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying, bpm]);

  const increaseBpm = () => {
    setBpm(bpm + 1);
  };

  const decreaseBpm = () => {
    setBpm(bpm - 1);
  };

  const startStop = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    loadSound();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const playSound = async () => {
    if (sound) {
      await sound.replayAsync();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bpm}>{bpm}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={startStop}>
          <Text style={styles.buttonText}>{isPlaying ? 'Parar' : 'Iniciar'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={increaseBpm}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decreaseBpm}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bpm: {
    fontSize: 48,
  },
  beat: {
    fontSize: 36,
  },
  beatCount: {
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Metronome;