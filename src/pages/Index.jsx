import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Event Management Platform</Heading>
        <Text fontSize="lg" textAlign="center">
          Welcome to the Event Management Platform. Organize and manage your events seamlessly.
        </Text>
        <Button
          leftIcon={<FaCalendarAlt />}
          colorScheme="teal"
          size="lg"
          mt={6}
          onClick={() => navigate("/create-event")}
        >
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;