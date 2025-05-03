'use client'

import TaskForm from '@/components/TaskForm'
import { Box, Container, Separator, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const TaskSummary = dynamic(() => import('@/components/TaskSummary'), {
  ssr: false,
})
const TaskList = dynamic(() => import('@/components/TaskList'), { ssr: false })

export default function HomePage() {
  return (
    <Container h='dvh' maxW='lg'>
      <VStack h='full' alignItems='stretch' gap={0}>
        <TaskForm />
        <TaskSummary />
        <Separator />
        <Box flexGrow={1} flexShrink={1} overflowY='auto' px={4} pt={3} pb={4}>
          <TaskList />
        </Box>
      </VStack>
    </Container>
  )
}
