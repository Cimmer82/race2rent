import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'com.rent2race.app',
  appPath: 'src/mobile',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  ios: {
    discardUncaughtJsExceptions: true
  }
} as NativeScriptConfig;