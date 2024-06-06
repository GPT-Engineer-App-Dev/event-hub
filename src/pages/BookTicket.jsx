import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading } from "@chakra-ui/react";

const BookTicket = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [tickets, setTickets] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      name,
      email,
      event,
      tickets,
    });
    alert("Tickets booked successfully!");
  };

  return (
    <Box maxW="container.md" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg">
      <Heading as="h2" size="xl" mb={6} textAlign="center">Book Tickets</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="event" isRequired>
            <FormLabel>Event</FormLabel>
            <Input
              type="text"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
            />
          </FormControl>
          <FormControl id="tickets" isRequired>
            <FormLabel>Number of Tickets</FormLabel>
            <Input
              type="number"
              value={tickets}
              min={1}
              onChange={(e) => setTickets(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="teal" size="lg" type="submit" mt={4}>
            Book Tickets
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default BookTicket;