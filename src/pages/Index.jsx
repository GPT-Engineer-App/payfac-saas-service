import { Container, Heading, Text, VStack, Box, Image, Link, Icon } from "@chakra-ui/react";
import { FaCloud, FaLock, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          Payment Facilitation as a Service for SaaS/ISVs in High-Risk Markets
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Empowering software providers with seamless, secure, and compliant payment solutions tailored for high-risk industries.
        </Text>
        <Box display="flex" flexDirection={{ base: "column", md: "row" }} justifyContent="space-around" width="full">
          <VStack spacing={4} alignItems="center">
            <Icon as={FaCloud} w={10} h={10} color="blue.500" />
            <Text fontSize="lg" fontWeight="bold">
              Cloud-Based Integration
            </Text>
            <Text textAlign="center">Integrate cutting-edge payment processing directly into your software with our cloud-based API solutions.</Text>
          </VStack>
          <VStack spacing={4} alignItems="center">
            <Icon as={FaLock} w={10} h={10} color="green.500" />
            <Text fontSize="lg" fontWeight="bold">
              Enhanced Security
            </Text>
            <Text textAlign="center">Ensure transactions are secure with advanced fraud protection and compliance with industry standards like PCI DSS.</Text>
          </VStack>
          <VStack spacing={4} alignItems="center">
            <Icon as={FaChartLine} w={10} h={10} color="orange.500" />
            <Text fontSize="lg" fontWeight="bold">
              Market Analytics
            </Text>
            <Text textAlign="center">Gain insights into your transactions and market trends to help optimize your business strategies.</Text>
          </VStack>
        </Box>
        <Image src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoaWdoJTIwcmlzayUyMHBheW1lbnQlMjBwcm9jZXNzaW5nfGVufDB8fHx8MTcxNTA0MTgyM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="High Risk Payment Processing" />
        <Text fontSize="md" textAlign="center">
          Discover how our tailored solutions can transform your business operations and increase your revenue streams in high-risk sectors.
        </Text>
        <Link href="https://example.com" isExternal color="teal.500">
          Learn More About Our Services
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
