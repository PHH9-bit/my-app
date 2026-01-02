import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ContactScreen() {
  const phone = '09126710171'; // شماره واقعی رضا
  const email = 'reza.heidari@samaninsurance.ir';
  const telegram = 'https://t.me/reza_heidari_haris';
  const instagram = 'https://instagram.com/reza_heidari_haris'; // اگر داری اضافه کن

  const callPhone = () => Linking.openURL(`tel:${phone}`);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>تماس با رضا حیدری هریس</Text>
      </View>

      <View style={styles.card}>
        <FontAwesome name="user-circle-o" size={120} color="#002B5B" style={styles.avatar} />

        <Text style={styles.name}>رضا حیدری هریس</Text>
        <Text style={styles.role}>کارشناس ارشد بیمه سامان</Text>

        {/* دکمه تماس مستقیم بزرگ و خفن */}
        <TouchableOpacity style={styles.callButton} onPress={callPhone}>
          <FontAwesome name="phone" size={32} color="#FFF" />
          <Text style={styles.callText}>تماس مستقیم: {phone}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={() => Linking.openURL(`mailto:${email}`)}>
          <FontAwesome name="envelope" size={26} color="#002B5B" />
          <Text style={styles.contactText}>{email}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={() => Linking.openURL(telegram)}>
          <FontAwesome name="paper-plane" size={26} color="#002B5B" />
          <Text style={styles.contactText}>تلگرام: @reza_heidari_haris</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={() => Linking.openURL(instagram)}>
          <FontAwesome name="instagram" size={26} color="#002B5B" />
          <Text style={styles.contactText}>اینستاگرام: @reza_heidari_haris</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>هر زمان آماده پاسخگویی به شما هستم</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { backgroundColor: '#002B5B', paddingTop: 60, paddingBottom: 40, alignItems: 'center' },
  headerTitle: { fontSize: 26, fontWeight: 'bold', color: '#FFF' },
  card: {
    backgroundColor: '#FFF',
    margin: 20,
    marginTop: -50,
    borderRadius: 36,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 35,
    elevation: 25,
  },
  avatar: { marginBottom: 24 },
  name: { fontSize: 28, fontWeight: 'bold', color: '#002B5B' },
  role: { fontSize: 18, color: '#E4002B', marginVertical: 12 },
  callButton: {
    flexDirection: 'row',
    backgroundColor: '#E4002B',
    width: '100%',
    paddingVertical: 22,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    shadowColor: '#E4002B',
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 15,
  },
  callText: { color: '#FFF', fontSize: 20, fontWeight: 'bold', marginLeft: 16 },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F4FF',
    padding: 20,
    borderRadius: 20,
    width: '100%',
    marginVertical: 10,
  },
  contactText: { fontSize: 17, color: '#002B5B', marginLeft: 16, fontWeight: '600' },
  footer: { textAlign: 'center', color: '#666', marginTop: 20, fontSize: 16, fontStyle: 'italic' },
});