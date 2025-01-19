import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { Feather } from "@expo/vector-icons";
import Moment from 'moment';

const Cpr = () => {
  const [tempoDecorridoCPR, setTempoDecorridoCPR] = useState(0);
  const [iniciadoCPR, setIniciadoCPR] = useState(false);

  useEffect(() => {
    let intervalCPR: NodeJS.Timeout | undefined;

    if (iniciadoCPR) {
      intervalCPR = setInterval(() => {
        setTempoDecorridoCPR(prevTempoCPR => prevTempoCPR + 1);
      }, 1000);
    } else if (intervalCPR) {
      clearInterval(intervalCPR);
    }
    return () => clearInterval(intervalCPR);
  }, [iniciadoCPR]);

  const clickCronometroCPR = () => {
    if (!iniciadoCPR) {
      setIniciadoCPR(true);
    } else {
      setIniciadoCPR(false);
    }
  };

  const zerarCronometroCPR = () => {
    setTempoDecorridoCPR(0);
    setIniciadoCPR(false);
  };

  return (
    <View style={styles.tableRow}>
      <View style={styles.tableColumnLeft}>
        <Text style={styles.sideTextSec}>{Moment.utc(tempoDecorridoCPR * 1000).format('HH:mm:ss')}</Text>
      </View>

      <View style={styles.tableColumnRight}>
        <TouchableOpacity style={styles.buttonRCP} onPress={clickCronometroCPR}>
          <Text style={styles.buttonText}>RCP</Text>
          <Feather name="heart" size={20} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMainX} onPress={zerarCronometroCPR}>
          <Text style={styles.buttonTextDark}>x</Text>
        </TouchableOpacity>
      </View>
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
    paddingRight: 30,
  },
  buttonRCP: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
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
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableColumnLeft: {
    flex: 1,
    alignItems: 'center',
  },
  tableColumnRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
  },
});

export default Cpr;