import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionicApp',
  webDir: 'dist',
  android: {
    minWebViewVersion: 55,
    backgroundColor: "#00000000",
  },  
};

export default config;
