import { useSession } from '@/hooks/useSession';
import { Text, TouchableOpacity, View } from 'react-native';

export default function MenuScreen() {
  const {signOut} = useSession()

  return (
    <View className='flex-1 items-center justify-center'>
      <TouchableOpacity onPress={signOut}>
        <Text className='text-xl font-semibold'>Sair</Text>
      </TouchableOpacity>
      <View className='my-7 w-4/5' />
    </View>
  );
}
