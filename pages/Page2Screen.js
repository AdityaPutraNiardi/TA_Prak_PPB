import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const AboutPage = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    fetchStations();
  }, []);

  const fetchStations = async () => {
    try {
      const response = await fetch('https://booking.kai.id/api/stations2');
      const result = await response.json();

      // Assuming 'stations' is an array of objects with a 'name' property
      setStations(result);
    } catch (error) {
      console.error('Error fetching stations:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Tentang Aplikasi</Text>
      <Text style={styles.description}>
        Aplikasi ini bertujuan untuk memberikan informasi berbagai stasiun di seluruh Indonesia.
        Dengan aplikasi ini, Anda dapat mengetahui informasi dari nama lengkap stasiun dan kota stasiun tersebut berada.
      </Text>
      <Text style={styles.heading}>Stasiun di Indonesia:</Text>
      {stations.map((station) => (
        <Text key={station.code}>{station.name}</Text>
      ))}
      <Text style={styles.note}>Selamat menjelajahi keberagaman stasiun di Indonesia!</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  note: {
    fontSize: 14,
    color: 'gray',
  },
});

export default AboutPage; 