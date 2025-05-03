import { z } from 'zod'

export const TaskSchema = z.object({
  id: z.string().uuid(),
  text: z.string().min(1, '任務名稱為必填'),
  completed: z.boolean(),
  point: z.number().int().min(0, '任務點數不得小於 0'),
})
export type TTask = z.infer<typeof TaskSchema>
