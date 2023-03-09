import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"

interface IHeroProps {
  title: string
  subtitle: string
  image: string | null
}

export function Hero({ title, subtitle, image = null }: IHeroProps) {
  return (
    <Container maxW='5xl'>
      <Stack
        textAlign='center'
        align='center'
        spacing={{ base: 2, md: 4 }}
        py={{ base: 10, md: 16 }}
      >
        {image && (
          <Box boxSize={150}>
            <Image src={image} width={150} height={150} alt="" priority />
          </Box>
        )}

        <Heading
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
          lineHeight={1.1}
        >
          {title}
        </Heading>

        <Text
          maxW='3xl'
          fontSize='xl'
          fontWeight={600}
          color='gray.500'
        >
          {subtitle}
        </Text>
      </Stack>
    </Container>
  )
}