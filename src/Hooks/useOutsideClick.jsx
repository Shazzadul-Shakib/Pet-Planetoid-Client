import { useEffect, useRef, useState } from "react";

const useOutsideClick = (value) => {
  // Profilecard toggle state
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(value);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return [isOpen,setIsOpen, ref];
};

export default useOutsideClick;