# Android APK build

The BiteFixes mobile application is configured for APK generation with Expo/EAS.

## Local

```bash
npm ci
npx eas build --platform android --profile preview
```

The `preview` profile is intended to produce an installable APK for direct device testing against BiteFixes Backend.

## Release

```bash
npx eas build --platform android --profile production
```

Validate authentication, backend connectivity, services and conversation flows before release.
