import { Link, router } from 'expo-router';
import { GestureResponderEvent, Text, View } from 'react-native';

export default function RecordingModeModalScreen() {
  function handleDismiss(e: GestureResponderEvent) {
    e.preventDefault();
    e.stopPropagation()
    router.back();
  }

  return (
    <View className='relative h-full w-full'>
      <View onTouchEndCapture={handleDismiss} className='absolute top-0 left-0 h-full w-full justify-center bg-black-voice/75 backdrop-blur-md items-center'/>

      <View className='p-5 z-10 absolute top-[40%] left-[10%] gap-2 rounded-md w-4/5 items-center bg-white'>
        <Link href='/(auth)/guided-recording-modal' className='py-2 px-4 w-full border-2 border-blue-voice-600 rounded-md'>
          <Text className='text-blue-voice-600 text-base font-semibold'>Ativar Gravação Guiada</Text>
        </Link>
        <Link href='/(auth)/free-recording-modal' className='py-2 px-4 w-full border-2 border-blue-voice-600 rounded-md'>
          <Text className='text-blue-voice-600 font-semibold text-base'>Ativar Gravação Livre</Text>
        </Link>
        <Link href='/(auth)/typed-recording-modal' className='py-2 px-4 w-full border-2 border-blue-voice-600 rounded-md'>
          <Text className='text-blue-voice-600 font-semibold text-base'>Ativar Digitação</Text>
        </Link>
      </View>
    </View>
  );
}
