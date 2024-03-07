import { Box, Container, Heading, Text, VStack, HStack, Link, Button, useColorModeValue } from "@chakra-ui/react";
import { FaRegClock, FaRegComment } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("green.100", "green.900");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Container maxW="2xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Title */}
        <Box>
          <Heading as="h1" fontFamily="serif" textAlign="center" mb={4}>
            My Blog
          </Heading>
        </Box>

        {/* Navigation */}
        <HStack justify="center" spacing={8}>
          <Link fontFamily="serif" href="#" _hover={{ textDecoration: "none" }} color={textColor}>
            Home
          </Link>
          <Link fontFamily="serif" href="#" _hover={{ textDecoration: "none" }} color={textColor}>
            About
          </Link>
          <Link fontFamily="serif" href="#" _hover={{ textDecoration: "none" }} color={textColor}>
            Contact
          </Link>
        </HStack>

        {/* Post Preview */}
        <Box p={5} bg={bgColor} borderRadius="md">
          <Heading as="h3" size="md" fontFamily="serif" mb={2}>
            The Beauty of Nature
          </Heading>
          <Text fontFamily="serif" mb={4}>
            Nature is often seen as a beautiful escape from the chaos of urban life. In this post, we explore the serenity and beauty of the natural world...
          </Text>
          <HStack spacing={4} fontSize="sm" fontFamily="serif" color={textColor}>
            <HStack spacing={1}>
              <FaRegClock />
              <Text>June 10, 2021</Text>
            </HStack>
            <HStack spacing={1}>
              <FaRegComment />
              <Text>24 Comments</Text>
            </HStack>
          </HStack>
          <Button mt={4} leftIcon={<FaRegClock />} fontFamily="serif" variant="outline" colorScheme="green">
            Read More
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
