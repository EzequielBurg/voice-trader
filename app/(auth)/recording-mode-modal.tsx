import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { GestureResponderEvent, Text, View } from 'react-native';

Ionicons.glyphMap

export default function RecordingModeModalScreen() {
  const [usedMenu, setUsedMenu] = useState(false);

  function handleDismiss(e: GestureResponderEvent, path?: any) {
    console.log('e', e)
    e.preventDefault();
    e.stopPropagation()
    console.log(usedMenu)
    router.back();
  }

  console.log('o',usedMenu)
  return (
    <View onTouchEndCapture={handleDismiss} className='h-full w-full justify-center bg-black-voice/75 backdrop-blur-md items-center'>
      <View nativeID='CRAZY' className='p-5 gap-2 rounded-md w-4/5 items-center bg-white'>
        <Link href='/(auth)/guided-recording-modal' className='py-2 px-4 w-full border-2 border-blue-voice-600 rounded-md'>
          <Text className='text-blue-voice-600 text-base font-semibold'>Ativar Gravação Guiada</Text>
        </Link>
        <Link href='/(auth)/(tabs)/menu' className='py-2 px-4 w-full border-2 border-blue-voice-600 rounded-md'>
          <Text className='text-blue-voice-600 font-semibold text-base'>Ativar Gravação Livre</Text>
        </Link>
        <Link href='/(auth)/(tabs)/reports' className='py-2 px-4 w-full border-2 border-blue-voice-600 rounded-md'>
          <Text className='text-blue-voice-600 font-semibold text-base'>Ativar Digitação</Text>
        </Link>
      </View>
    </View>
  );
}
