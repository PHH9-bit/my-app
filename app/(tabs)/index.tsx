import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const { height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* هدر لوکس با پس‌زمینه سرمه‌ای و لوگو */}
      <View style={styles.header}>
        <Image source={require('../../assets/images/logo-saman.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>بیمه سامان</Text>
        <Text style={styles.agentName}>رضا حیدری هریس</Text>
        <Text style={styles.agentRole}>نماینده رسمی و کارمند شرکت بیمه سامان</Text>
        <View style={styles.trustBadge}>
          <FontAwesome name="shield" size={20} color="#E4002B" />
          <Text style={styles.trustText}>مشاوره رایگان • پاسخگویی ۲۴ ساعته • تخفیف ویژه</Text>
        </View>
      </View>

      {/* کارت پروفایل رضا با طراحی خفن */}
      <View style={styles.profileCard}>
        <View style={styles.avatarBorder}>
          <View style={styles.avatar} />
        </View>
        <Text style={styles.welcome}>با افتخار در خدمت شما هستم</Text>
        <Text style={styles.bio}>
          بیش از ۱۰ سال تجربه در صنعت بیمه{'\n'}
          تخصص در ارائه بهترین پوشش بیمه‌ای با شرایط ویژه
        </Text>
      </View>

      {/* دکمه‌های اصلی */}
      <View style={styles.actions}>
        <Link href="/request" style={styles.actionButtonPrimary}>
          <FontAwesome name="file-text-o" size={26} color="#FFF" />
          <Text style={styles.actionText}>درخواست بیمه جدید</Text>
        </Link>

        <Link href="/contact" style={styles.actionButtonSecondary}>
          <FontAwesome name="phone" size={26} color="#002B5B" />
          <Text style={styles.actionTextSecondary}>تماس مستقیم با من</Text>
        </Link>
      </View>

      {/* انواع بیمه با کارت‌های زیبا */}
      <Text style={styles.sectionTitle}>انواع بیمه قابل ارائه</Text>
      <View style={styles.insuranceGrid}>
        {['شخص ثالث', 'بدنه خودرو', 'عمر و سرمایه', 'آتش‌سوزی', 'مسئولیت', 'درمان تکمیلی'].map((item, index) => (
          <View key={index} style={styles.insuranceItem}>
            <MaterialIcons name="security" size={32} color="#E4002B" />
            <Text style={styles.insuranceText}>{item}</Text>
          </View>
        ))}
      </View>

      {/* مزایای همکاری */}
      <Text style={styles.sectionTitle}>چرا با من بیمه کنید؟</Text>
      <View style={styles.benefits}>
        <View style={styles.benefitItem}>
          <FontAwesome name="percent" size={28} color="#E4002B" />
          <Text style={styles.benefitText}>بالاترین تخفیف قانونی</Text>
        </View>
        <View style={styles.benefitItem}>
          <FontAwesome name="clock-o" size={28} color="#E4002B" />
          <Text style={styles.benefitText}>صدور فوری بیمه‌نامه</Text>
        </View>
        <View style={styles.benefitItem}>
          <FontAwesome name="headphones" size={28} color="#E4002B" />
          <Text style={styles.benefitText}>پشتیبانی ۲۴ ساعته</Text>
        </View>
        <View style={styles.benefitItem}>
          <FontAwesome name="car" size={28} color="#E4002B" />
          <Text style={styles.benefitText}>خسارت سریع و آسان</Text>
        </View>
      </View>

      <Text style={styles.footer}>© ۱۴۰۴ شرکت بیمه سامان - رضا حیدری هریس</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: {
    backgroundColor: '#002B5B',
    alignItems: 'center',
    paddingTop: height * 0.08,
    paddingBottom: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  logo: { width: 160, height: 110, marginBottom: 10 },
  title: { fontSize: 36, fontWeight: '900', color: '#FFF' },
  agentName: { fontSize: 30, fontWeight: 'bold', color: '#FFF', marginTop: 10 },
  agentRole: { fontSize: 18, color: '#E4002B', fontWeight: '600', marginTop: 6 },
  trustBadge: { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.15)', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 40, marginTop: 24 },
  trustText: { color: '#FFF', fontSize: 16, marginLeft: 10, fontWeight: '600' },
  profileCard: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginTop: -60,
    borderRadius: 36,
    paddingVertical: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.3,
    shadowRadius: 40,
    elevation: 30,
  },
  avatarBorder: { width: 140, height: 140, borderRadius: 70, backgroundColor: '#E4002B', padding: 8, marginBottom: 20 },
  avatar: { width: 124, height: 124, borderRadius: 62, backgroundColor: '#CCC' },
  welcome: { fontSize: 26, fontWeight: 'bold', color: '#002B5B' },
  bio: { fontSize: 16, color: '#555', textAlign: 'center', marginTop: 12, lineHeight: 24, paddingHorizontal: 20 },
  actions: { paddingHorizontal: 20, marginTop: 30 },
  actionButtonPrimary: {
    flexDirection: 'row',
    backgroundColor: '#002B5B',
    paddingVertical: 22,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: '#002B5B',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 15,
  },
  actionButtonSecondary: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderWidth: 3,
    borderColor: '#002B5B',
    paddingVertical: 20,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: { color: '#FFF', fontSize: 20, fontWeight: 'bold', marginLeft: 16 },
  actionTextSecondary: { color: '#002B5B', fontSize: 20, fontWeight: 'bold', marginLeft: 16 },
  sectionTitle: { fontSize: 24, fontWeight: 'bold', color: '#002B5B', textAlign: 'center', marginTop: 40, marginBottom: 20 },
  insuranceGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', paddingHorizontal: 20 },
  insuranceItem: {
    backgroundColor: '#FFF',
    width: '45%',
    margin: 8,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  insuranceText: { marginTop: 12, fontSize: 15, fontWeight: '600', color: '#002B5B', textAlign: 'center' },
  benefits: { paddingHorizontal: 30, marginVertical: 20 },
  benefitItem: { flexDirection: 'row', alignItems: 'center', marginVertical: 14 },
  benefitText: { fontSize: 17, color: '#333', marginLeft: 16, fontWeight: '600' },
  footer: { textAlign: 'center', color: '#888', marginVertical: 40, fontSize: 14 },
});