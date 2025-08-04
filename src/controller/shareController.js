import { useEffect, useState } from "react";

export default function useShareResultsController(isGameOver) {
  const [isOpen, setIsOpen] = useState(false);

  const openPane = () => setIsOpen(true);

  const closePane = () => setIsOpen(false);

  useEffect(() => {
    if (isGameOver) {
      openPane()
    }
  }, [isGameOver]);

  return { isOpen, openPane, closePane }
}