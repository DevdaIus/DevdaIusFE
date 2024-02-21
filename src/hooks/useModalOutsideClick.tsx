import { useEffect } from "react";

interface Props {
  ref: any;
  callback: () => void;
}

function useModalOutsideClick({ ref, callback }: Props) {
  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback?.();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => window.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
}

export default useModalOutsideClick;