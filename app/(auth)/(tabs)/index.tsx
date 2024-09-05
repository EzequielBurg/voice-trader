import { RecordLargeIcon } from '@/assets/icons/RecordLargeIcon';
import { RecordModeSelector } from '@/components/RecordModeSelector';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { Link } from 'expo-router';
import { Text, View } from "react-native";

export default function VoiceScreen() {
  return (
    <LinearGradient
      colors={['#0067E5', '#4D95ED']}
      locations={[0.7, 0.99]}
      className='flex-1 items-center py-28 px-6 h-screen'
    >
      <View className="flex-1 justify-start h-full">
        <View className="flex-row justify-between w-full items-center">
          <RecordModeSelector />
          <Feather name='bell' color="#fff" size={30} />
        </View>

        <View className='h-full gap-10 mt-[30%] items-center'>
          <Text className="text-white text-3xl mb-5 font-semibold">Olá!</Text>
          <Link href="/(auth)/guided-recording-modal">
            <RecordLargeIcon />
          </Link>
          <Text className="text-white text-3xl max-w-64 font-semibold flex-1 flex-row text-center">
            Toque para gravar e transcrever
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}
