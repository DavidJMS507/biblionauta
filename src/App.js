import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

export default function App() {
  return (
    <SafeAreaProvider>
      <View className='m-auto'>
        <StatusBar style="auto" />
        <Text className='font-bold text-lg'>Open up App.js to start working on your app!</Text>
      </View>
    </SafeAreaProvider>
  );
}