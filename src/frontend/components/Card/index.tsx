import {
  React,
} from '../../../deps-frontend.ts'

interface Props {
  //id: string
  title: string
  description: string
}

export const Card = ({ title, description }: Props) => {

  return <div className='card-item'>
    <p><u>{title}</u><br/>{description}</p>
    </div>
}
