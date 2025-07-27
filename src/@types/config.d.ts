declare module 'react-native-config' {
  export interface NativeConfig {
      API: string;
      ENVIRONMENT: string;
      ENABLE_MIRAGE?: boolean;
  }
  
  export const Config: NativeConfig
  export default Config
}