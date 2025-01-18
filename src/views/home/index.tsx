import { useKeepAwake } from 'expo-keep-awake';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Metronome from '../../components/metronome';
import Main from '../../components/main';
import Cpr from '../../components/cpr';
import Shock from '../../components/shock';
import Epinephrine from '../../components/epinephrine';

const Home = () => {
  useKeepAwake();
  const navigation = useNavigation();

  const navigateToMedications = () => {
    navigation.navigate('Medications');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>

          <Metronome />

          <Main />

          <Cpr />

          <Shock />

          <Epinephrine />

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonMedications} onPress={navigateToMedications}>
              <Text style={styles.buttonText}>Medicação</Text>
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
    width: '85%',
    justifyContent: 'space-between',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonMedications: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#666',
    padding: 10,
    borderRadius: 5,
    marginLeft: 2,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    paddingRight: 10,
  },

});

export default Home;