import { useKeepAwake } from 'expo-keep-awake';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Metronome from '../../components/metronome';
import Main from '../../components/main';
import Cpr from '../../components/cpr';
import Shock from '../../components/shock.';
import Epinephrine from '../../components/epinephrine';

const Home = () => {
  useKeepAwake();
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>

          <Metronome />

          <Main />

          <Cpr />

          <Shock />

          <Epinephrine />


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
    width: '85%',
    justifyContent: 'space-between',
  },
});

export default Home;