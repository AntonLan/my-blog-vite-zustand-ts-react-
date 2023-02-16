import { FC } from 'react'
import { cardsEquipment } from '../variables/variables'
import CardEquipment from '../component/CardEquipment'

const Home: FC = () => {
	return (
		<div className='flex flex-wrap gap-4 justify-center mt-[20vh] mx-auto max-w-3xl'>
			{cardsEquipment.map(card => {
				return (
					<CardEquipment
						key={card.id}
						id={card.id}
						title={card.title}
						description={card.description}
						photo={card.photoUrl}
					/>
				)
			})}
		</div>
	)
}

export default Home
