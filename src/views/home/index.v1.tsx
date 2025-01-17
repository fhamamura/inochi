import { useKeepAwake } from 'expo-keep-awake';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import {Feather} from "@expo/vector-icons";

const Home = () => {
  useKeepAwake();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Button 1</Text>
            <Feather name="heart" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Feather name="user" size={20} color="#fff" />
            <Text style={styles.buttonText}>Button 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Feather name="settings" size={20} color="#fff" />
            <Text style={styles.buttonText}>Button 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Feather name="bell" size={20} color="#fff" />
            <Text style={styles.buttonText}>Button 4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Feather name="info" size={20} color="#fff" />
            <Text style={styles.buttonText}>Button 5</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-between',
    height: 250,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
  },
});

export default Home;