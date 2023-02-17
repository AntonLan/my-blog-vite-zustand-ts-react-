import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { cardsEquipment } from '../variables/variables'

const Equipment: FC = () => {
	const params = useParams()
	const equipment = cardsEquipment.find(c => {
		return params.id === c.id
	})

	return (
		<div className='flex flex-wrap flex-col gap-4 mx-auto max-w-3xl mt-[20vh]'>
			<img className='border-0 rounded-md w-[400px] mx-auto' src={equipment?.photoUrl} alt={equipment?.title} />
			<h1 className='font-bold text-3xl'>{equipment?.title}</h1>
			<p>{equipment?.description}</p>
		</div>
	)
}

export default Equipment
