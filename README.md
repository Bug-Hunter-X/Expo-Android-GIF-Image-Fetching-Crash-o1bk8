# Expo Android GIF Image Fetching Crash

This repository demonstrates a bug where an Expo app crashes on Android when fetching and displaying a GIF image from a URL using the Image component. The app works correctly on iOS.

## Bug Description

The app fetches a GIF image from an online source. While the iOS version works as expected, the Android version crashes without providing clear error messages in the console. The crash happens in the background, making debugging challenging.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app on an Android emulator or device using `expo start`.
4. Observe the app crash.

## Solution

The solution involves using a library to handle GIF decoding, such as `react-native-gifted-image`. This library can often handle GIF images more effectively than the native Image component on Android.

## Additional Notes

This issue might be related to the way Android handles GIF decoding within the React Native Image component.  Using a dedicated GIF library often provides more robust handling of these types of files.

