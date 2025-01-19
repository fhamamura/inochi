import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Moment from 'moment';

const Shock = () => {
  const [tempoDecorridoShock, setTempoDecorridoShock] = useState(0);
  const [iniciadoShock, setIniciadoShock] = useState(false);
  const [valorShock, setValorShock] = useState(0);

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
    setValorShock(valorShock + 1);
    setTempoDecorridoShock(0);
    setIniciadoShock(true);
  };

  const zerarCronometroShock = () => {
    setTempoDecorridoShock(0);
    setIniciadoShock(false);
    setValorShock(0);
  };

  return (
    <View style={styles.tableRow}>
      <View style={styles.tableColumnLeft}>
        <Text style={styles.sideTextSec}>{Moment.utc(tempoDecorridoShock * 1000).format('HH:mm:ss')}</Text>
      </View>

      <View style={styles.tableColumnRight}>
        {valorShock != 0 && <Text style={styles.buttonNumber}>{valorShock}</Text>}
        <TouchableOpacity style={styles.buttonShock} onPress={clickCronometroShock}>
          <Text style={styles.buttonTextDark}>Choque</Text>
          <Feather name="zap" size={20} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMainX} onPress={zerarCronometroShock}>
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
    paddingRight: 20,
  },
  buttonShock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF200',
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

export default Shock;