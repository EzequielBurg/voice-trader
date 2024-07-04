import { RecordLargeIcon } from '@/assets/icons/RecordLargeIcon';
import { RecordShortIcon } from '@/assets/icons/RecordShortIcon';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
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
          <View className="flex-row items-center max-w-36 gap-1">
            <View className="rounded-full justify-center items-center w-14 h-14 bg-white">
              <RecordShortIcon />
            </View>
            <View>
              <Text className="font-semibold text-white text-base">Gravação Guiada Ativa</Text>
              <Text className="text-white text-sm">Clique para alterar</Text>
            </View>
          </View>
          <Feather name='bell' color="#fff" size={30} />
        </View>

        <View className='h-full gap-10 mt-[30%] items-center'>
          <Text className="text-white text-3xl mb-5 font-semibold">Olá!</Text>
          <RecordLargeIcon />
          <Text className="text-white text-3xl max-w-64 font-semibold flex-1 flex-row text-center">
            Toque para gravar e transcrever
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}
