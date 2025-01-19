import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { RootStackParamList } from '../types/navigation';

const Events = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goBack = () => {
    navigation.navigate('Home');
  };

  const events = [
    { id: '1', name: 'Aspirina' },
    { id: '2', name: 'Ibuprofeno' },
    { id: '3', name: 'Paracetamol' },
    { id: '4', name: 'Amoxicillina' },
    { id: '5', name: 'Metiformina' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Feather name="arrow-left" size={24} color="#000" />
          <Text style={styles.backButtonText}>voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Eventos</Text>
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.eventsItem}>
              <Text style={styles.eventsText}>{item.name}</Text>
            </View>
          )}
        />
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
    padding: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 18,
    marginLeft: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  eventsItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  eventsText: {
    fontSize: 18,
  },
});

export default Events;