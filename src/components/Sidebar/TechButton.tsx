import { Button } from '../ui/button'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal'
import Technologies from './Technologies'

const TechButton = () => {
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure()

  return (
    <>
      <Button
        variant='outline'
        size='icon'
        className='w-12 h-12 rounded-full ring-1 ring-blue-900/30 hover:ring-blue-600/40 backdrop-blur-md
          bg-gradient-to-br shadow-md hover:shadow-lg from-blue-800 to-teal-800 hover:from-blue-600 hover:to-teal-600 transition-all duration-300'
        onClick={onOpen}
      >
        🚀
      </Button>
      <Modal
        isOpen={isOpen}
        size={'lg'}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalHeader>Tools I&apos;ve Explored</ModalHeader>
          <ModalBody>
            <Technologies />
          </ModalBody>
          <ModalFooter>
            <Button color='danger' variant='outline' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TechButton