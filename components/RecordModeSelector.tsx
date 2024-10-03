import { RecordShortIcon } from "@/assets/icons/RecordShortIcon";
import clsx from "clsx";
import { Link, usePathname, useSegments } from 'expo-router';
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export function RecordModeSelector() {
  const segments = useSegments()

  const [currMode, setCurrMode] = useState('Gravação Guiada')

  const notWhite = (segments[1]?.includes('guided') || segments[1]?.includes('typed'))

  const path = usePathname()

  const mode = path.split('/').at(1)?.split('-').at(0)

  useEffect(() => {
    switch (mode) {
      case 'guided':
        setCurrMode('Gravação Guiada')
        break;
      case 'free':
        setCurrMode('Gravação Livre')
        break;
      case 'typed':
        setCurrMode('Digitação')
        break;
      default:
        setCurrMode('Gravação Guiada')
        break;
    }
  }, [mode])

  return (
    <>
      <Link href='/(auth)/recording-mode-modal'>
        <View className="flex-row items-center max-w-36 gap-3">
          <View className="rounded-full justify-center items-center w-14 h-14 bg-white">
            <RecordShortIcon />
          </View>
          <View>
            <Text className={clsx("font-semibold text-base", { "text-blue-voice-200": notWhite, "text-white": !notWhite })}>
              {currMode} Ativa
            </Text>
            <Text className={clsx("text-sm", { "text-black-voice": notWhite, "text-white": !notWhite })}>
              Clique para alterar
            </Text>
          </View>
        </View>
      </Link>
    </>
  )
}
