import { useKeepAwake } from 'expo-keep-awake';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import {Feather} from "@expo/vector-icons";
import moment from 'moment';

const Home = () => {
  useKeepAwake();
      const [tempoDecorridoMain, setTempoDecorridoMain] = useState(0);
      const [iniciadoMain, setIniciadoMain] = useState(false);
      const [tempoDecorridoCPR, setTempoDecorridoCPR] = useState(0);
      const [iniciadoCPR, setIniciadoCPR] = useState(false);
      const [tempoDecorridoShock, setTempoDecorridoShock] = useState(0);
      const [iniciadoShock, setIniciadoShock] = useState(false);
      const [tempoDecorridoEpinephrine, setTempoDecorridoEpinephrine] = useState(0);
      const [iniciadoEpinephrine, setIniciadoEpinephrine] = useState(false);
  
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
  if (!iniciadoEpinephrine) {
      setIniciadoEpinephrine(true);
  } else {
    setIniciadoEpinephrine(false);
  }
};

const zerarCronometroEpinephrine = () => {
  setTempoDecorridoEpinephrine(0);
  setIniciadoEpinephrine(false);
};
    
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>

          <View style={styles.buttonRow}>
            <Text style={styles.sideText}>Texto ao lado do botão 1</Text>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Button 1</Text>
              <Feather name="heart" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <Text style={styles.sideTextMain}>{moment.utc(tempoDecorridoMain * 1000).format('HH:mm:ss')}</Text>
            <TouchableOpacity style={styles.buttonMain} onPress={clickCronometroMain}>
              <Text style={styles.buttonText}>Principal</Text>
              <Feather name="heart" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMainX} onPress={zerarCronometroMain}>
              <Text style={styles.buttonText}>x</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <Text style={styles.sideText}>{moment.utc(tempoDecorridoCPR * 1000).format('HH:mm:ss')}</Text>
            <TouchableOpacity style={styles.button} onPress={clickCronometroCPR}>
              <Text style={styles.buttonText}>RCP</Text>
              <Feather name="activity" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMainX} onPress={zerarCronometroCPR}>
              <Text style={styles.buttonText}>x</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <Text style={styles.sideText}>{moment.utc(tempoDecorridoShock * 1000).format('HH:mm:ss')}</Text>
            <TouchableOpacity style={styles.button} onPress={clickCronometroShock}>
              <Text style={styles.buttonText}>Choque</Text>
              <Feather name="alert-triangle" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMainX} onPress={zerarCronometroShock}>
              <Text style={styles.buttonText}>x</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <Text style={styles.sideText}>{moment.utc(tempoDecorridoEpinephrine * 1000).format('HH:mm:ss')}</Text>
            <TouchableOpacity style={styles.button} onPress={clickCronometroEpinephrine}>
              <Text style={styles.buttonText}>Adrenalina</Text>
              <Feather name="edit-2" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMainX} onPress={zerarCronometroEpinephrine}>
              <Text style={styles.buttonText}>x</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-between',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    paddingRight: 10,
  },
  sideText: {
    fontSize: 20,
    color: '#333',
  },
  sideTextMain: {
    fontSize: 30,
    color: '#333',
  },
});

export default Home;