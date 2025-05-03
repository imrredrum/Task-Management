'use client'

import { Box, Button, HStack, Input, Text } from '@chakra-ui/react'
import { NumberInputField, NumberInputRoot } from '../ui/number-input'
import type { TTask } from '@/validations'
import useTaskStore from '@/store/task'
import { useState } from 'react'
import { showToast } from '../Toast'

const ListItem = (task: TTask) => {
  const { toggleTask, deleteTask, updateTask } = useTaskStore(state => state)

  const [editing, setEditing] = useState(false)
  const [editText, setEditText] = useState('')
  const [editPoint, setEditPoint] = useState(0)

  const handleSave = () => {
    updateTask(task.id, { text: editText, point: editPoint })
    showToast('任務已更新')
    setEditing(false)
  }

  const handleDelete = () => {
    deleteTask(task.id)
    showToast('任務已刪除', { type: 'error' })
  }

  const handleToggle = (isCompleted: TTask['completed']) => () => {
    toggleTask(task.id)
    if (isCompleted) {
      showToast('任務狀態已還原')
    } else {
      showToast('任務狀態更新', { type: 'success' })
    }
  }

  return (
    <Box
      p={4}
      shadow='md'
      borderWidth={1}
      bg={task.completed ? 'gray.100' : 'white'}
    >
      {editing ? (
        <>
          <Input
            value={editText}
            onChange={e => setEditText(e.target.value)}
            mb={2}
          />
          <NumberInputRoot
            min={0}
            value={String(editPoint)}
            onValueChange={e => setEditPoint(e.valueAsNumber)}
          >
            <NumberInputField />
          </NumberInputRoot>
        </>
      ) : (
        <Text
          fontWeight='bold'
          textDecoration={task.completed ? 'line-through' : 'none'}
        >
          {task.text}
        </Text>
      )}

      <Text>
        {task.completed ? '已完成' : '未完成'} ／ 點數: {task.point}
      </Text>

      <HStack mt={2} gap={2}>
        <Button
          size='sm'
          onClick={handleToggle(task.completed)}
          variant={task.completed ? 'surface' : 'solid'}
        >
          {task.completed ? '標記未完成' : '標記完成'}
        </Button>
        <Button size='sm' colorPalette='red' onClick={handleDelete}>
          刪除
        </Button>
        {editing ? (
          <Button size='sm' colorPalette='green' onClick={handleSave}>
            儲存
          </Button>
        ) : (
          <Button
            size='sm'
            variant='outline'
            onClick={() => {
              setEditing(true)
              setEditText(task.text)
              setEditPoint(task.point)
            }}
          >
            修改
          </Button>
        )}
      </HStack>
    </Box>
  )
}

export default ListItem
