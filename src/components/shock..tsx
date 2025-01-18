import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Moment from 'moment';

const Shock = () => {
    const [tempoDecorridoShock, setTempoDecorridoShock] = useState(0);
    const [iniciadoShock, setIniciadoShock] = useState(false);

    useEffect(() => {
            let intervalShock: NodeJS.Timeout | undefined;
    
            if (iniciadoShock) {
                intervalShock = setInterval(() => {
                    setTempoDecorridoShock(prevTempoShock => prevTempoShock + 1);
                }, 1000);
            } else if (intervalShock) {
                clearInterval(intervalShock);
            }
            return () => clearInterval(intervalShock);
        }, [iniciadoShock]);
    
        const clickCronometroShock = () => {
          if (!iniciadoShock) {
              setIniciadoShock(true);
          } else {
            setIniciadoShock(false);
          }
        };
    
        const zerarCronometroShock = () => {
          setTempoDecorridoShock(0);
          setIniciadoShock(false);
        };

    return (
      <View style={styles.buttonRow}>
      <Text style={styles.sideTextSec}>{Moment.utc(tempoDecorridoShock * 1000).format('HH:mm:ss')}</Text>
      <TouchableOpacity style={styles.buttonShock} onPress={clickCronometroShock}>
        <Text style={styles.buttonTextDark}>Choque</Text>
        <Feather name="zap" size={20} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonMainX} onPress={zerarCronometroShock}>
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
  sideTextSec: {
    fontSize: 30,
    color: '#333',
  },
  buttonShock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF200',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonTextDark: {
    color: '#333',
    marginLeft: 10,
    paddingRight: 10,
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
});

export default Shock;