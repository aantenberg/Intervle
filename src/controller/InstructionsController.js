import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function useInstructionsController() {
  const [isOpen, setIsOpen] = useState(false);

  const openPane = () => setIsOpen(true);

  const closePane = () => setIsOpen(false);

  const [cookies, setCookies, removeCookies] = useCookies(['guesses']);

  useEffect(() => {
    if (!cookies['intervle']) {
      openPane()
    }
  }, [cookies])

  return { isOpen, openPane, closePane }
}