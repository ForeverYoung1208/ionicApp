import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionicApp',
  webDir: 'dist',
  android: {
    minWebViewVersion: 55,
    backgroundColor: '#00000000',
    allowMixedContent: true, // remove when using https
  },
  server: {
    androidScheme: 'http', // remove when using https
    cleartext: true, // remove when using https
  },
};

export default config;
