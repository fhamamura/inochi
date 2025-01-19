import { useKeepAwake } from 'expo-keep-awake';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Button } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import Metronome from '../../components/metronome';
import Main from '../../components/main';
import Cpr from '../../components/cpr';
import Shock from '../../components/shock';
import Epinephrine from '../../components/epinephrine';

const Home = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigateToMedications = () => {
    navigation.navigate('Medications');
  };

  const navigateToEvents = () => {
    navigation.navigate('Events');
  };

  const navigateToRhythm = () => {
    navigation.navigate('Rhythm');
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

          <View style={styles.tableRow}>
            <View style={styles.tableColumnLeft}>
              <TouchableOpacity style={styles.buttonMedications} onPress={navigateToMedications}>
                <Text style={styles.buttonText}>Medicação</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.tableColumnRight}>
            <TouchableOpacity style={styles.buttonRhythm} onPress={navigateToRhythm}>
                <Text style={styles.buttonText}>Ritmo</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableColumnLeft}>
              <TouchableOpacity style={styles.buttonEvents} onPress={navigateToEvents}>
                <Text style={styles.buttonText}>Eventos</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.tableColumnRight}>

            </View>
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
    width: '90%',
    justifyContent: 'space-between',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
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

  table: {
    marginTop: 20,
    width: '100%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
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
    flex: 1,
    alignItems: 'center',
  },
  tableText: {
    fontSize: 16,
  },
  buttonEvents: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#680285',
    padding: 10,
    borderRadius: 5,
    marginLeft: 2,
  },
  buttonRhythm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#482218',
    padding: 10,
    borderRadius: 5,
    marginLeft: 2,
  },

});

export default Home;