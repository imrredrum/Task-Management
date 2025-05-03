'use client'

import useTaskStore from '@/store/task'
import { For, VStack } from '@chakra-ui/react'
import ListItem from './ListItem'

const TaskList = () => {
  const tasks = useTaskStore(state => state.tasks)

  const sortedTasks = [...tasks].sort(
    (a, b) => Number(a.completed) - Number(b.completed)
  )

  return (
    <VStack align='stretch'>
      <For each={sortedTasks}>
        {task => <ListItem key={task.id} {...task} />}
      </For>
    </VStack>
  )
}

export default TaskList
