import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"

interface ITextAndImageProps {
  title: string
  text: string
  showLargeImage: boolean
  image: {
    small: string
    medium: string
    large: string
  }
}

export function TextAndImage({ title, text, showLargeImage, image }: ITextAndImageProps) {
  return (
    <Container maxW='5xl'>
      <Stack
        align={{ md: 'center' }}
        spacing={{ base: 10, md: 20 }}
        py={{ base: 10, md: 16 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 4, md: 8 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          >
            {title}
          </Heading>

          <Text as='article' dangerouslySetInnerHTML={{ __html: text }} />
        </Stack>

        {image && (
          <Box>
            {showLargeImage && (
              <Image src={image.large} width={400} height={400} alt="" />
            )}

            {!showLargeImage && (
              <Image src={image.small} width={200} height={200} alt="" />
            )}
          </Box>
        )}
      </Stack>
    </Container>
  )
}