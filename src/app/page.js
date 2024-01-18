'use client'
import Game from '@/components/Game';
import InstructionsModal from '@/components/InstructionsModal';
import Header from '@/components/header';
import useInstructionsController from '@/controller/InstructionsController';

export default function Home() {
  const instructionsController = useInstructionsController();
  return (
    <main>
      <InstructionsModal instructionsController={instructionsController} />
      <Header openPane={instructionsController.openPane} />
      <Game instructionsController={instructionsController} />
    </main>
  )
}
