import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  Linking,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  const openGithub = () => {
    Linking.openURL('https://github.com/yourusername'); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdg1PvLjkqS_tgwwrD1JcHnVBn3GwRpHfxng&s' }}
        style={styles.profileImage}
      />

      <Text style={styles.name}>Akanksha Gowda</Text>
      <Text style={styles.title}>BCA Student</Text>


      {/* EDUCATION */}
      <Text style={styles.sectionTitle}>Education</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Bachelor of Computer Applications (BCA)</Text>
        <Text style={styles.cardSubText}>XYZ College | 2023 – 2026</Text>
      </View>

      {/* SKILLS */}
      <Text style={styles.sectionTitle}>Skills</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>• React Native</Text>
        <Text style={styles.cardText}>• Java</Text>
        <Text style={styles.cardText}>• HTML & CSS</Text>
        <Text style={styles.cardText}>• Basic UI/UX</Text>
      </View>

      {/* CERTIFICATIONS */}
      <Text style={styles.sectionTitle}>Certifications</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>• Web Development Certificate</Text>
        <Text style={styles.cardText}>• Java Programming Course</Text>
      </View>

      {/* GITHUB BUTTON */}
      <TouchableOpacity style={styles.githubButton} onPress={openGithub}>
        <Text style={styles.buttonText}>View My GitHub</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff0f5',
    alignItems: 'center',
    padding: 40,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4b0082',
  },
  title: {
    fontSize: 18,
    color: '#6a5acd',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#800080',
  },
  description: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  card: {
    backgroundColor: '#e6e6fa',
    width: '100%',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  cardSubText: {
    fontSize: 14,
    color: '#555',
  },
  githubButton: {
    backgroundColor: '#6a5acd',
    padding: 14,
    borderRadius: 12,
    marginTop: 25,
    width: 220,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});



