import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';
import Moment from 'moment';

const Epinephrine = () => {
    const [tempoDecorridoEpinephrine, setTempoDecorridoEpinephrine] = useState(0);
    const [iniciadoEpinephrine, setIniciadoEpinephrine] = useState(false);
    const [valorEpinephrine, setValorEpinephrine] = useState(0);

    useEffect(() => {
            let intervalEpinephrine: NodeJS.Timeout | undefined;
    
            if (iniciadoEpinephrine) {
                intervalEpinephrine = setInterval(() => {
                    setTempoDecorridoEpinephrine(prevTempoEpinephrine => prevTempoEpinephrine + 1);
                }, 1000);
            } else if (intervalEpinephrine) {
                clearInterval(intervalEpinephrine);
            }
            return () => clearInterval(intervalEpinephrine);
        }, [iniciadoEpinephrine]);
    
        const clickCronometroEpinephrine = () => {
          setValorEpinephrine(valorEpinephrine + 1);
          setTempoDecorridoEpinephrine(0);
          setIniciadoEpinephrine(true);
        };
    
        const zerarCronometroEpinephrine = () => {
          setTempoDecorridoEpinephrine(0);
          setIniciadoEpinephrine(false);
          setValorEpinephrine(0);
        };

    return (
      <View style={styles.buttonRow}>
      <Text style={styles.sideTextSec}>{Moment.utc(tempoDecorridoEpinephrine * 1000).format('HH:mm:ss')}</Text>
      {valorEpinephrine !=0 && <Text style={styles.buttonNumber}>{valorEpinephrine}</Text>}
        <TouchableOpacity style={styles.buttonEpinephrine} onPress={clickCronometroEpinephrine}>
        <Text style={styles.buttonTextDark}>Adrenalina</Text>
        <Fontisto name="injection-syringe" size={20} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonMainX} onPress={zerarCronometroEpinephrine}>
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
    paddingRight: 10,
  },
  buttonEpinephrine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
    marginLeft: 2,
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
    backgroundColor: '#f5fcff',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    borderColor: '#333',
    borderWidth: 1,
  },
  buttonNumber: {
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: '#333',
    color: '#FFF',
    padding: 5,
  },
});

export default Epinephrine;