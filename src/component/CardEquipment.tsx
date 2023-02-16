import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface ICardProps {
	id?: string
	title?: string
	description?: string
	photo?: string | undefined
}

const CardEquipment: FC<ICardProps> = ({ id, title, description, photo }) => {
	const navigate = useNavigate()

	const selectCard = (id: any) => {
		navigate('/card/' + `${id}`)

	}

	return (
		<div className='flex flex-wrap gap-4 justify-center w-[250px] mx-auto max-w-3xl' onClick={() => selectCard(id)}>
			<img className='border-0 rounded-md' src={photo} alt={title} />
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	)
}

export default CardEquipment
