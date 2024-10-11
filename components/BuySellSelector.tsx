import clsx from "clsx";
import { useState } from "react";
import { Text, View } from "react-native";

export function BuySellSelector() {
  const [optionSelected, setOptionSelected] = useState(0)

  return (
    <View className='flex-row max-h-10 items-center flex-1 bg-gray-voice-100 rounded-lg p-[3px]'>
      <View
        onTouchStart={() => setOptionSelected(0)}
        className={clsx('p-1 rounded-md flex-row justify-center flex-1', {
          'bg-white': optionSelected === 0,
        })}>
        <Text className={clsx('font-semibold', {'text-blue-voice-600': optionSelected === 0})}>Compras</Text>
      </View>
      <View
        onTouchStart={() => setOptionSelected(1)}
        className={clsx('p-1 rounded-md flex-row justify-center flex-1', {
          'bg-white': optionSelected === 1,
        })}>
        <Text className={clsx('font-semibold', {'text-blue-voice-600': optionSelected === 1})}>Vendas</Text>
      </View>
    </View>
  )
}
