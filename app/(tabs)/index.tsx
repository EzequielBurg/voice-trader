import { Text, View } from "react-native";

export default function TabOneScreen() {
  return (
    <View className='flex-1 items-center justify-center bg-slate-700 p-6 border'>
      <Text className='text-5xl p-2 rounded-md text-blue-voice-200 font-semibold border border-blue-300'>Tab One!</Text>
      <Text className='text-blue-voice-600 text-2xl'>voice trader</Text>
    </View>
  );
}
