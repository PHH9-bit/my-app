import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../../assets/images/splash-screen-bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <ImageBackground
              source={require('../../assets/images/logo-saman.png')}
              style={styles.logoBackground}
              imageStyle={styles.logoImage}
              resizeMode="contain"
            >
              <Text style={styles.logoText}>بیمه سامان</Text>
            </ImageBackground>
          </View>

          <Text style={styles.agentName}>رضا حیدری هریس</Text>
          <Text style={styles.agentTitle}>نماینده و کارمند رسمی بیمه سامان</Text>

          <View style={styles.badge}>
            <FontAwesome name="shield" size={22} color="#E4002B" />
            <Text style={styles.badgeText}>مشاوره رایگان • خدمات ۲۴ ساعته • تخفیف ویژه</Text>
          </View>
        </View>

        <View style={styles.mainCard}>
          <View style={styles.profileContainer}>
            <View style={styles.profileBorder}>
              <View style={styles.profileImage}>
                {/* اگر عکس رضا رو گذاشتی، این بخش رو با Image جایگزین کن */}
                {/* مثال: */}
                {/* <Image source={require('../../assets/images/reza-photo.jpg')} style={{width: '100%', height: '100%', borderRadius: 62}} resizeMode="cover" /> */}
              </View>
            </View>
          </View>

          <Text style={styles.welcomeText}>با افتخار در خدمت شما هستم</Text>

          <Text style={styles.description}>
            درخواست صدور یا تمدید انواع بیمه‌نامه با بهترین شرایط، بالاترین تخفیف‌ها و مشاوره تخصصی{'\n\n'}
            • بیمه شخص ثالث و بدنه خودرو{'\n'}
            • بیمه عمر و سرمایه‌گذاری{'\n'}
            • بیمه آتش‌سوزی منزل و مغازه{'\n'}
            • بیمه مسئولیت{'\n'}
            • بیمه درمان تکمیلی{'\n'}
            • بیمه باربری و حمل و نقل
          </Text>

          <Link href="/request" style={styles.primaryButton}>
            <FontAwesome name="file-text-o" size={26} color="#FFFFFF" />
            <Text style={styles.primaryButtonText}>درخواست بیمه جدید</Text>
          </Link>

          <Link href="/contact" style={styles.secondaryButton}>
            <FontAwesome name="phone" size={26} color="#002B5B" />
            <Text style={styles.secondaryButtonText}>تماس مستقیم با رضا</Text>
          </Link>

          <View style={styles.featuresRow}>
            <View style={styles.featureItem}>
              <FontAwesome name="bolt" size={30} color="#E4002B" />
              <Text style={styles.featureText}>پاسخگویی سریع</Text>
            </View>
            <View style={styles.featureItem}>
              <FontAwesome name="percent" size={30} color="#E4002B" />
              <Text style={styles.featureText}>تخفیف‌های ویژه</Text>
            </View>
            <View style={styles.featureItem}>
              <FontAwesome name="headphones" size={30} color="#E4002B" />
              <Text style={styles.featureText}>پشتیبانی ۲۴/۷</Text>
            </View>
          </View>
        </View>

        <Text style={styles.footerText}>© ۱۴۰۴ شرکت بیمه سامان - رضا حیدری هریس</Text>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 43, 91, 0.70)',
  },
  container: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  header: {
    alignItems: 'center',
    paddingTop: height * 0.09,
    paddingBottom: 40,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logoBackground: {
    width: 160,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    opacity: 0.95,
  },
  logoText: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 8,
  },
  agentName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 16,
    letterSpacing: 0.5,
  },
  agentTitle: {
    fontSize: 19,
    color: '#E4002B',
    fontWeight: '700',
    marginTop: 8,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 40,
    marginTop: 24,
    backdropFilter: 'blur(10px)',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 12,
    fontWeight: '600',
  },
  mainCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: -40,
    borderRadius: 36,
    paddingVertical: 44,
    paddingHorizontal: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.35,
    shadowRadius: 40,
    elevation: 30,
  },
  profileContainer: {
    marginBottom: 24,
  },
  profileBorder: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#E4002B',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 124,
    height: 124,
    borderRadius: 62,
    backgroundColor: '#CCCCCC',
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#002B5B',
    marginBottom: 20,
  },
  description: {
    fontSize: 17,
    color: '#333333',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 40,
    paddingHorizontal: 8,
  },
  primaryButton: {
    flexDirection: 'row',
    backgroundColor: '#002B5B',
    width: '100%',
    paddingVertical: 22,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: '#002B5B',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 15,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  secondaryButton: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    borderColor: '#002B5B',
    width: '100%',
    paddingVertical: 20,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 36,
  },
  secondaryButtonText: {
    color: '#002B5B',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  featureItem: {
    alignItems: 'center',
    minWidth: 80,
  },
  featureText: {
    fontSize: 15,
    color: '#002B5B',
    marginTop: 10,
    fontWeight: '700',
  },
  footerText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 40,
    opacity: 0.9,
    fontWeight: '500',
  },
});