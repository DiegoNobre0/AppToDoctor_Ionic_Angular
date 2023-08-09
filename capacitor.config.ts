import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.appdoctor',
  appName: 'AppDoctorsMobile',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
