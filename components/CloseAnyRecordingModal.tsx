import { CloseIcon } from "@/assets/icons/CloseIcon";
import { Link } from "expo-router";

export function CloseAnyRecordingModal() {
  return (
    <Link className='p-1 rounded-full bg-gray-voice-100' href='/(auth)/(tabs)/'>
      <CloseIcon />
    </Link>
  )

}
