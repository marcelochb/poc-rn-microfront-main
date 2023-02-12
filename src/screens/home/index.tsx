import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.label}>Jorney 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.label}>Jorney 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.label}>Jorney 3</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
