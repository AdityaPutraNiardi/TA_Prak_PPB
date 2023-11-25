import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const StationDetailsScreen = ({ route }) => {
  const { station } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Navigation button with back arrow */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={18} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.title}>Station Details</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Code:</Text>
        <Text style={styles.detailValue}>{station.code}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Name:</Text>
        <Text style={styles.detailValue}>{station.name}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>City:</Text>
        <Text style={styles.detailValue}>{station.city}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>City Name:</Text>
        <Text style={styles.detailValue}>{station.cityname}</Text>
      </View>

      {/* Add more details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff', // Background color
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 20, // Adjust padding top to move content down
  },
  backButton: {
    marginRight: 10,
    padding: 8, // Adjust padding to make the button smaller
    borderRadius: 4, // Adjust borderRadius to make the button smaller
    backgroundColor: '#3498db', // Button background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333', // Text color
  },
  detailsContainer: {
    flexDirection: 'row',
    marginBottom: 15, // Adjust marginBottom to move details down
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#555555', // Text color
  },
  detailValue: {
    fontSize: 18,
    color: '#333333', // Text color
  },
});

export default StationDetailsScreen;
