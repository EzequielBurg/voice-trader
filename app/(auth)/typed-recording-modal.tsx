import { Button } from '@/components/Button';
import { CloseAnyRecordingModal } from '@/components/CloseAnyRecordingModal';
import { Input } from '@/components/Input';
import { RecordModeSelector } from '@/components/RecordModeSelector';
import React from 'react';
import { ScrollView, View } from 'react-native';

export default function TypedRecordingModalScreen() {
  return (
    <View className='flex-1 pt-28 px-6 h-screen items-center bg-white'>
      <ScrollView showsVerticalScrollIndicator={false} className='h-screen'>
        <View className="flex-row justify-between w-full items-center">
          <RecordModeSelector />
          <CloseAnyRecordingModal />
        </View>
        <View className='flex flex-col my-20 w-full px-1.5 flex-1 gap-3'>
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
      </ScrollView>
    </View>
  );
}
