import {
  React,
} from '../../deps.ts'

import { CreateCard } from '../CreateCard/index.tsx'
import { CreateLane } from '../CreateLane/index.tsx'

export const ManageTasks = () => {
  return <div className='flex flex-row max-w-full'>
    <CreateCard />
    <CreateLane />
  </div>
}
