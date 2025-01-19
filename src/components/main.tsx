import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Moment from 'moment';

const Main = () => {
  const [tempoDecorridoMain, setTempoDecorridoMain] = useState(0);
  const [iniciadoMain, setIniciadoMain] = useState(false);
  const [textoMain, setTextoMain] = useState('Principal');

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
      setTextoMain('Pausar');
    } else {
      setIniciadoMain(false);
      setTextoMain('Continuar');
    }
  };

  const zerarCronometroMain = () => {
    setTempoDecorridoMain(0);
    setIniciadoMain(false);
    setTextoMain('Principal');
  };

  return (
    <View style={styles.tableRow}>
      <View style={styles.tableColumnLeft}>
        <Text style={styles.sideTextMain}>{Moment.utc(tempoDecorridoMain * 1000).format('HH:mm:ss')}</Text>
      </View>

      <View style={styles.tableColumnRight}>
        <TouchableOpacity style={styles.buttonMain} onPress={clickCronometroMain}>
          <Text style={styles.buttonText}>{ textoMain }</Text>
          <Feather name="clock" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMainX} onPress={zerarCronometroMain}>
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
  buttonMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000FF',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
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
    height: 50,
  },
});

export default Main;