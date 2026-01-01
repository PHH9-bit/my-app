import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function ContactScreen() {
  const phone = '09123456789'; // شماره واقعی رضا رو اینجا بذار
  const email = 'reza.heidari@samaninsurance.ir';
  const telegram = 'https://t.me/reza_heidari_haris';

  return (
    <LinearGradient colors={['#002B5B', '#003B7A']} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.card}>
          <FontAwesome name="user-circle" size={100} color="#002B5B" style={styles.avatar} />

          <Text style={styles.name}>رضا حیدری هریس</Text>
          <Text style={styles.role}>کارشناس بیمه سامان</Text>

          <TouchableOpacity style={styles.item} onPress={() => Linking.openURL(`tel:${phone}`)}>
            <FontAwesome name="phone" size={28} color="#002B5B" />
            <Text style={styles.text}>{phone}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => Linking.openURL(`mailto:${email}`)}>
            <FontAwesome name="envelope" size={28} color="#002B5B" />
            <Text style={styles.text}>{email}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => Linking.openURL(telegram)}>
            <FontAwesome name="paper-plane" size={28} color="#002B5B" />
            <Text style={styles.text}>تلگرام: @reza_heidari_haris</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, justifyContent: 'center', padding: 20 },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 20,
  },
  avatar: { marginBottom: 20 },
  name: { fontSize: 26, fontWeight: 'bold', color: '#002B5B' },
  role: { fontSize: 17, color: '#E4002B', marginVertical: 12 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F4FF',
    padding: 18,
    borderRadius: 16,
    width: '100%',
    marginVertical: 10,
  },
  text: { fontSize: 16, color: '#002B5B', marginLeft: 16, fontWeight: '500' },
});