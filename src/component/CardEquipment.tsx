import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ICard } from '../service/model/ICard'

interface ICardProps {
	card: ICard
}

const CardEquipment: FC<ICardProps> = ({ card }) => {
	const navigate = useNavigate()

	const selectCard = (id: any) => {
		navigate('/card/' + `${id}`)

	}

	return (
		<div className='flex flex-wrap cursor-pointer gap-4 justify-center w-[250px] mx-auto max-w-3xl' onClick={() => selectCard(card.id)}>
			<img className='border-0 rounded-md' src={card.photoUrl} alt={card.title} />
			<h1>{card.title}</h1>
			<p>{card.description}</p>
		</div>
	)
}

export default CardEquipment
