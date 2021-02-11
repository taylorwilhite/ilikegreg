import './App.css';
import { 
  ChakraProvider,
  Input,
  Flex,
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image
} from '@chakra-ui/react';
import logo from './logo.jpg';

function App() {
  const {isOpen, onOpen, onClose } = useDisclosure()
  return (
    <ChakraProvider>
      <Box w="100%">
        <Flex w="100%" h="100vh" justify="center" align="center" wrap="wrap" flexDir="column">
            <Image src={logo} w="20%" />
            <Input m={2} w="55%" placeholder="social security number" size="md"/>
            <Input m={2} w="55%" placeholder="password" type="password" size="md"/>
          <Button onClick={onOpen} colorScheme="blue" size="lg">
            I now and forever like Greg; see you tomorrow
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Thanks for liking Greg!</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Come back tomorrow to keep liking Greg!
              </ModalBody>

              <ModalFooter>
                <Button maxW="60%" colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
            
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
