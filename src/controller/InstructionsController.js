import { useState } from "react";

export default function useInstructionsController() {
  const [isOpen, setIsOpen] = useState(false);

  const openPane = () => setIsOpen(true);

  const closePane = () => setIsOpen(false);

  return { isOpen, openPane, closePane }
}