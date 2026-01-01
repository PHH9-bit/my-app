import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function InsuranceRequestScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('');
  const [details, setDetails] = useState('');

  const submitRequest = () => {
    if (!name.trim() || !phone.trim() || !type.trim()) {
      Alert.alert('خطا', 'لطفاً نام، شماره تماس و نوع بیمه را وارد کنید.');
      return;
    }

    Alert.alert(
      'درخواست ثبت شد ✅',
      'ممنون از شما! درخواست‌تون با موفقیت ثبت شد.\nرضا حیدری هریس در اسرع وقت با شما تماس می‌گیره.',
      [{ text: 'باشه', onPress: () => {} }]
    );
  };

  return (
    <LinearGradient colors={['#F5F7FA', '#FFFFFF']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>درخواست بیمه</Text>

        <View style={styles.form}>
          <Text style={styles.label}>نام و نام خانوادگی</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="علی احمدی" />

          <Text style={styles.label}>شماره تماس</Text>
          <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" placeholder="09123456789" />

          <Text style={styles.label}>نوع بیمه مورد نظر</Text>
          <TextInput style={styles.input} value={type} onChangeText={setType} placeholder="مثال: شخص ثالث، بدنه، عمر، آتش‌سوزی" />

          <Text style={styles.label}>توضیحات بیشتر (اختیاری)</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={details}
            onChangeText={setDetails}
            multiline
            placeholder="جزئیات خودرو، ملک یا نیاز خود را توضیح دهید..."
          />

          <Link href="#" onPress={submitRequest} style={styles.submitButton}>
            <Text style={styles.submitText}>ارسال درخواست</Text>
          </Link>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#002B5B', textAlign: 'center', marginBottom: 30 },
  form: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 10,
  },
  label: { fontSize: 16, fontWeight: '600', color: '#002B5B', marginTop: 16, marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 14,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#FAFBFD',
  },
  textArea: { height: 120, textAlignVertical: 'top' },
  submitButton: {
    backgroundColor: '#E4002B',
    paddingVertical: 18,
    borderRadius: 16,
    marginTop: 30,
    alignItems: 'center',
  },
  submitText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});