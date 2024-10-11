import { BuySellSelector } from '@/components/BuySellSelector';
import { LineDivider } from '@/components/LineDivider';
import { AntDesign } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

export default function TransactionsScreen() {

  return (
    <View className='flex-1 h-screen px-8 py-4'>
      <BuySellSelector />
      <LineDivider />
      <View className='flex-1 flex-row gap-1'>
        <View className='h-11 px-3 border border-gray-voice-100 flex-row items-center justify-center rounded-xl'>
          <Text className='text-black-voice font-semibold text-sm'>Períodos</Text>
        </View>
        <View className='flex-row max-h-10 justify-between items-center flex-1 bg-gray-voice-100 rounded-lg p-[3px]'>
          <Pressable className='bg-white p-2 rounded-lg flex items-center justify-center'>
            <Text className='text-blue-voice-600 text-sm font-semibold'>1D</Text>
          </Pressable>
          <Pressable className='p-2 rounded-lg flex items-center justify-center'>
            <Text className='text-black-voice text-sm font-semibold'>7D</Text>
          </Pressable>
          <Pressable className='p-2 rounded-lg flex items-center justify-center'>
            <Text className='text-black-voice text-sm font-semibold'>15D</Text>
          </Pressable>
          <Pressable className='p-2 rounded-lg flex items-center justify-center'>
            <Text className='text-black-voice text-sm font-semibold'>1M</Text>
          </Pressable>
          <Pressable className='p-2 rounded-lg flex items-center justify-center'>
            <Text className='text-black-voice text-sm font-semibold'>6M</Text>
          </Pressable>
          <Pressable className='p-2 rounded-lg flex items-center justify-center'>
            <Text className='text-black-voice text-sm font-semibold'>1A</Text>
          </Pressable>
          <Pressable className='p-2 rounded-lg flex items-center justify-center'>
            <AntDesign name='swap' size={15} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
