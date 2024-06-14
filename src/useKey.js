import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(() => {
    const callbacks = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };

    document.addEventListener("keydown", callbacks);
    return () => {
      document.removeEventListener("keydown", callbacks);
    };
  }, [key, action]);

  return [key, action];
}
