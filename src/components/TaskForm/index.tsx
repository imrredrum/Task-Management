'use client'

import useTaskStore from '@/store/task'
import { TaskSchema, type TTask } from '@/validations'
import { Box, Button, Flex, Input } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { type SubmitErrorHandler, useForm } from 'react-hook-form'
import { Checkbox } from '../ui/checkbox'
import { NumberInputField, NumberInputRoot } from '../ui/number-input'
import { showToast } from '../Toast'

const TaskForm = () => {
  const addTask = useTaskStore(state => state.addTask)
  const { register, handleSubmit, setValue, reset } = useForm<
    Omit<TTask, 'id'>
  >({
    defaultValues: { text: '', completed: false, point: 0 },
    resolver: zodResolver(TaskSchema.omit({ id: true })),
  })

  const onSubmit = (data: Omit<TTask, 'id'>) => {
    addTask(data)
    showToast('添加新任務')
    reset()
  }

  const onError: SubmitErrorHandler<Omit<TTask, 'id'>> = errors => {
    const messages = Object.values(errors)
      .map(e => e.message)
      .join(' | ')
    showToast(messages, { type: 'error' })
  }

  return (
    <Box px={4} pt={4} pb={3}>
      <Flex
        as='form'
        onSubmit={handleSubmit(onSubmit, onError)}
        columnGap={4}
        rowGap={3}
        justifyContent='flex-end'
        alignItems='center'
        wrap='wrap'
      >
        <Input placeholder='任務名稱' {...register('text')} width='100%' />

        <Checkbox onCheckedChange={e => setValue('completed', !!e.checked)}>
          已完成
        </Checkbox>

        <NumberInputRoot
          min={0}
          onValueChange={e => setValue('point', e.valueAsNumber)}
          flexBasis={110}
          flexShrink={1}
          flexGrow={1}
          maxW={200}
        >
          <NumberInputField placeholder='點數' />
        </NumberInputRoot>

        <Button type='submit'>新增任務</Button>
      </Flex>
    </Box>
  )
}

export default TaskForm
