import { VoiceLogo } from '@/assets/icons/VoiceLogo';
import { useSession } from '@/hooks/useSession';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function SignIn() {
  const { signIn } = useSession();

  return (
    <View className='pt-10 flex flex-col items-center justify-center h-full'>
      <VoiceLogo />
      <Text className='my-16 text-black-voice text-3xl'>Olá! Seja bem vindo!</Text>
      <TouchableOpacity
        className='flex p-4 bg-blue-voice-200 rounded-md'
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/');
        }}>
        <Text className='text-white'>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
