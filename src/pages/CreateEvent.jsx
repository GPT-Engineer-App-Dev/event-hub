import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, Heading } from "@chakra-ui/react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      eventName,
      eventDate,
      eventLocation,
      eventDescription,
    });
    alert("Event created successfully!");
  };

  return (
    <Box maxW="container.md" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg">
      <Heading as="h2" size="xl" mb={6} textAlign="center">Create Event</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="event-name" isRequired>
            <FormLabel>Event Name</FormLabel>
            <Input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </FormControl>
          <FormControl id="event-date" isRequired>
            <FormLabel>Event Date</FormLabel>
            <Input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </FormControl>
          <FormControl id="event-location" isRequired>
            <FormLabel>Event Location</FormLabel>
            <Input
              type="text"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
            />
          </FormControl>
          <FormControl id="event-description">
            <FormLabel>Event Description</FormLabel>
            <Textarea
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="teal" size="lg" type="submit" mt={4}>
            Create Event
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateEvent;