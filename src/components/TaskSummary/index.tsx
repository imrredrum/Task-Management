'use client'

import useTaskStore from '@/store/task'
import { Center, HStack } from '@chakra-ui/react'

const TaskSummary = () => {
  const tasks = useTaskStore(state => state.tasks)

  const completedTasks = tasks.filter(task => task.completed)

  return (
    <Center px={4} pb={3}>
      <HStack w='full' gap={0}>
        <Center w='1/2'>
          完成個數：{completedTasks.length} / {tasks.length}
        </Center>
        <Center w='1/2'>
          完成點數：{completedTasks.reduce((acc, cur) => acc + cur.point, 0)} /{' '}
          {tasks.reduce((acc, cur) => acc + cur.point, 0)}
        </Center>
      </HStack>
    </Center>
  )
}

export default TaskSummary
