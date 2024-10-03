import { CloseIcon } from '@/assets/icons/CloseIcon';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { RecordModeSelector } from '@/components/RecordModeSelector';
import { router } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export default function TypedRecordingModalScreen() {
  function handleBackNavigation() {
    router.back()
  }

  return (
    <View className='flex-1 py-28 px-6 h-screen items-center gap-14 bg-white'>
      <View className="flex-row justify-between w-full items-center">
        <RecordModeSelector />

        <TouchableOpacity className='p-1 rounded-full bg-gray-voice-100' onPress={handleBackNavigation}>
          <CloseIcon />
        </TouchableOpacity>
      </View>

      <View className='flex flex-col w-full px-1.5 flex-1 gap-3'>
        <Input placeholder='Será uma compra ou uma venda?' />
        <Input placeholder='Para quem será destinado?' />
        <Input placeholder='Qual é o produto?'/>
        <Input placeholder='Há alguma especificação. Se sim, qual?'/>
        <Input placeholder='Qual a quantidade?'/>
        <Input placeholder='Qual o valor unitário?'/>
        <Input placeholder='Qual o valor total?'/>
        <Input placeholder='Qual a forma de pagamento?'/>
        <Input placeholder='Há alguma observação a ser feita? Se sim, qual?'/>
      </View>

      <Button children="Já finalizei" />
    </View>
  );
}
