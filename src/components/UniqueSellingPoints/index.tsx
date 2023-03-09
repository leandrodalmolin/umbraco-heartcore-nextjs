import { LinkType } from "@/graphql/generated/graphql"
import { Card, Container, Flex, Grid, Heading, Link, ListItem, SimpleGrid, Stack, Text, UnorderedList, VStack } from "@chakra-ui/react"
import Image from "next/image"

interface IUniqueSellingPointsProps {
  title: string
  sellingPoints: {
    title: string
    text?: string | null
    link?: {
      name: string,
      target?: string | null,
      type: LinkType,
      url: string
    }[]
    image?: {
      url: string
    } | null
  }[]
}

export function UniqueSellingPoints({ title, sellingPoints }: IUniqueSellingPointsProps) {
  return (
    <Container maxW='5xl'>
      <Stack
        py={{ base: 10, md: 16 }}
        spacing={{ base: 5, md: 10 }}
      >
        <Heading
          textAlign='center'
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
        >
          {title}
        </Heading>

        {sellingPoints?.length > 0 && (
          <SimpleGrid minChildWidth='300px' spacing={6}>
            {sellingPoints.map(point => (
              <Card key={point.title} p={5}>
                <Flex flexDirection='column' gap={1}>
                  {point.image && (
                    <Image src={point.image.url} width={200} height={200} alt="" />
                  )}

                  <Heading size='md'>{point.title}</Heading>
                  <Text
                    mt={2}
                    fontSize='sm'
                    color='gray.600'
                  >{point.text}</Text>

                  {point.link && point.link.length > 0 && (
                    <UnorderedList mt={2}>
                      {point.link.map(item => (
                        <ListItem key={item.url}>
                          <Link href={item.url} target={item.target ?? ''}>
                            {item.name} - {item.type}
                          </Link>
                        </ListItem>
                      ))}
                    </UnorderedList>
                  )}
                </Flex>
              </Card>
            ))}
          </SimpleGrid>
        )}
      </Stack>
    </Container >
  )
}
