//if i can use the local storagedirectly then why this hook???
//1.simplifes the getting setting of data directly for mutligple components 
//2.allows u to automaticlly change data and relfect it in local sotrage using useeffct 
//4.more about this on 
// https://chatgpt.com/c/678fa19d-e398-800a-b884-d43dadb87921
"use client";
import { useEffect, useState } from "react";
type SetValue<T> = T | ((val: T) => T);
function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: SetValue<T>) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    try { 
      if (typeof window !== "undefined") { 
        const item = window.localStorage.getItem(key);    
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (error) { 
      console.log(error);
      return initialValue;
    }
  });
  useEffect(() => {
    try {
      const valueToStore =
        typeof storedValue === "function"
          ? storedValue(storedValue)
          : storedValue;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);
  return [storedValue, setStoredValue];
}
export default useLocalStorage;
//if i can use the local storagedirectly then why this hook???
//1.simplifes the getting setting of data directly for mutligple components 
//2.allows u to automaticlly change data and relfect it in local sotrage using useeffct 
//4.more about this on 
// https://chatgpt.com/c/678fa19d-e398-800a-b884-d43dadb87921