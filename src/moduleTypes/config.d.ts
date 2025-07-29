declare module 'react-native-config' {
  export interface NativeConfig {
    API: string;
    AUTH_API: string;
    ENVIRONMENT: string;
    ENABLE_MIRAGE: string;
  }

  export const Config: NativeConfig
  export default Config
}