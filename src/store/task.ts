import type { TTask } from '@/validations'
import { create } from 'zustand'

const LOCAL_KEY = 'zustand-tasks'

interface TaskState {
  tasks: TTask[]
  addTask: (task: Omit<TTask, 'id'>) => void
  toggleTask: (id: TTask['id']) => void
  deleteTask: (id: TTask['id']) => void
  updateTask: (id: TTask['id'], updates: Partial<Omit<TTask, 'id'>>) => void
}

const useTaskStore = create<TaskState>((set, get) => {
  const saved =
    typeof window !== 'undefined' ? localStorage.getItem(LOCAL_KEY) : null
  const initial = saved ? JSON.parse(saved) : []

  const persist = (tasks: TTask[]) => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(tasks))
  }

  return {
    tasks: initial,
    addTask: task => {
      const newTask = { ...task, id: crypto.randomUUID() }
      const updated = [...get().tasks, newTask]
      persist(updated)
      set({ tasks: updated })
    },
    toggleTask: id => {
      const updated = get().tasks.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
      persist(updated)
      set({ tasks: updated })
    },
    deleteTask: id => {
      const updated = get().tasks.filter(t => t.id !== id)
      persist(updated)
      set({ tasks: updated })
    },
    updateTask: (id, updates) => {
      const updated = get().tasks.map(t =>
        t.id === id ? { ...t, ...updates } : t
      )
      persist(updated)
      set({ tasks: updated })
    },
  }
})

export default useTaskStore
