import React from 'react'
import { type FetchStatus } from '../../redux/slices.ts'

interface Props {
  fetchStatus: FetchStatus,
  fetchError?: string, // TODO: sum type here
}

export const LoadingNotice = ({ fetchStatus, fetchError }: Props): JSX.Element => {
  if (fetchStatus == 'idle') {
    return <p className='font-light'>Swim lanes not loaded yet</p>
  }
  else if (fetchStatus == 'failed') {
    return <p className='font-light animate-animated animate-wobble'>Failed to load swim lanes: {fetchError || '(no error provided)'}</p>
  }
  else if (fetchStatus == 'loading') {
    return <p className='font-light animate-animated animate-infinite animate-pulse'>Loading swim lanes</p>
  }
  else {
    return <p className='font-light animate-animated animate-bounce delay-1000 invisible'>Loaded swim lanes</p>
  }
}
