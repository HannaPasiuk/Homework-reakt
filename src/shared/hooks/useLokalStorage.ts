import { useEffect, useState } from "react"

export const useLocalStorage = <T>(key: string, initialValue: T) : [T, React.Dispatch<React.SetStateAction<T>>] => {


const [storageValue, setStorageValue] = useState<T>(() => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : initialValue;
})
useEffect(() => {
  localStorage.setItem(key, JSON.stringify(storageValue))
}, [key, storageValue])

  return [storageValue, setStorageValue]

}