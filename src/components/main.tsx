import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Moment from 'moment';

const Main = () => {
    const [tempoDecorridoMain, setTempoDecorridoMain] = useState(0);
    const [iniciadoMain, setIniciadoMain] = useState(false);

    useEffect(() => {
          let intervalMain: NodeJS.Timeout | undefined;
  
          if (iniciadoMain) {
              intervalMain = setInterval(() => {
                  setTempoDecorridoMain(prevTempoMain => prevTempoMain + 1);
              }, 1000);
          } else if (intervalMain) {
              clearInterval(intervalMain);
          }
          return () => clearInterval(intervalMain);
      }, [iniciadoMain]);

      const clickCronometroMain = () => {
        if (!iniciadoMain) {
            setIniciadoMain(true);
        } else {
          setIniciadoMain(false);
        }
      };

      const zerarCronometroMain = () => {
        setTempoDecorridoMain(0);
        setIniciadoMain(false);
      };
  
  return (
      <View style={styles.buttonRow}>
        <Text style={styles.sideTextMain}>{Moment.utc(tempoDecorridoMain * 1000).format('HH:mm:ss')}</Text>
        <TouchableOpacity style={styles.buttonMain} onPress={clickCronometroMain}>
          <Text style={styles.buttonText}>Principal</Text>
          <Feather name="heart" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMainX} onPress={zerarCronometroMain}>
          <Text style={styles.buttonTextDark}>x</Text>
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
  buttonMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonMainX: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    borderColor: '#333',
    borderWidth: 1,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    paddingRight: 10,
  },
  buttonTextDark: {
    color: '#333',
    marginLeft: 10,
    paddingRight: 10,
  },
  sideTextMain: {
    fontSize: 38,
    color: '#333',
  },
});

export default Main;