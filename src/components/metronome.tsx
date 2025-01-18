import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Audio } from 'expo-av';

const Metronome = () => {
  const [bpm, setBpm] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<Audio.Sound | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../sounds/click2.mp3')
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
    setBpm((prevBpm) => Math.min(prevBpm + 1, 200));
  };

  const decreaseBpm = () => {
    setBpm((prevBpm) => Math.max(prevBpm - 1, 60));
  };

  const startStop = () => {
    setIsPlaying(!isPlaying);
  };

  return (
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonMetro} onPress={startStop}>
              <Text style={styles.buttonTextBPM}>{isPlaying ? 'Parar' : 'Iniciar'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={increaseBpm}>
              <Text style={styles.buttonTextBPM}>+</Text>
            </TouchableOpacity>
                <Text style={styles.bpm}>{bpm}</Text>
                <Text style={styles.textBpm}>bpm</Text>
            <TouchableOpacity style={styles.button} onPress={decreaseBpm}>
              <Text style={styles.buttonTextBPM}>-</Text>
            </TouchableOpacity>
          </View>
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonMetro: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonTextBPM: {
    color: '#fff',
    marginLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  bpm: {
    fontSize: 48,
    marginLeft: 5,
  },
  textBpm: {
    fontSize: 12,
    marginLeft: 5,
  },
});

export default Metronome;