import { React } from '../../../deps.ts'
import { useGetLanesQuery } from '../../redux/apiSlice.ts'

export const Lanes = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetLanesQuery()

  let content
  if (isLoading) {
    content = 'loading'
  }
  else if (isSuccess) {
    content = 'yay'
  }
  else if (isError) {
    content = `bad ${error}`
  }

  return <p>{content}</p>
}
