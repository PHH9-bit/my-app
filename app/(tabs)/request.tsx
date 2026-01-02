import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

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
      'ممنون از شما! درخواست شما با موفقیت ثبت شد.\nرضا حیدری هریس در اسرع وقت با شما تماس خواهد گرفت.',
      [{ text: 'باشه' }]
    );

    // اختیاری: پاک کردن فرم بعد از ارسال
    setName('');
    setPhone('');
    setType('');
    setDetails('');
  };

  return (
    <View style={styles.container}>
      {/* هدر سرمه‌ای ساده و شیک بدون گرادیانت خارجی */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>درخواست بیمه</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.formCard}>
          <Text style={styles.label}>نام و نام خانوادگی</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="علی احمدی"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>شماره تماس</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholder="09123456789"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>نوع بیمه مورد نظر</Text>
          <TextInput
            style={styles.input}
            value={type}
            onChangeText={setType}
            placeholder="مثال: شخص ثالث، بدنه، عمر، آتش‌سوزی"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>توضیحات بیشتر (اختیاری)</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={details}
            onChangeText={setDetails}
            multiline
            placeholder="جزئیات خودرو، ملک یا نیاز خود را توضیح دهید..."
            placeholderTextColor="#999"
          />

          <View style={styles.submitButton} onTouchEnd={submitRequest}>
            <Text style={styles.submitText}>ارسال درخواست</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    backgroundColor: '#002B5B',
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    padding: 20,
    paddingTop: 0,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 28,
    marginTop: -30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 20,
  },
  label: {
    fontSize: 17,
    fontWeight: '600',
    color: '#002B5B',
    marginTop: 20,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#DDD',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 16,
    backgroundColor: '#FAFBFD',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#E4002B',
    paddingVertical: 20,
    borderRadius: 20,
    marginTop: 36,
    alignItems: 'center',
    shadowColor: '#E4002B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 12,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 'bold',
  },
});