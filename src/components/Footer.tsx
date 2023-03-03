import { Box, Button, Container, Link, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text color="white">
          © 2022 Social Media Analyzer. All rights reserved.
        </Text>
        <Stack direction={"row"} spacing={6}>
          <Button
            size="lg"
            colorScheme="linkedin"
            variant="solid"
            leftIcon={<FaLinkedin />}
          >
            <Link href="https://www.linkedin.com/in/andrewkykoo/" isExternal>
              LinkedIn
            </Link>
          </Button>

          <Button
            size="lg"
            colorScheme="gray"
            variant="solid"
            leftIcon={<FaGithub />}
          >
            <Link
              href="https://github.com/andrewkykoo/social-media-analyzer-frontend"
              isExternal
            >
              Github
            </Link>
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
