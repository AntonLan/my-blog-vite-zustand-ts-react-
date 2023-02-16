import { ICard } from '../service/model/ICard'
import dell from '@/assets/dell s2721.jpg'
import mac from '@/assets/mac-mini.jpg'
import keychron from '@/assets/keychron.jpg'
import logitech from '@/assets/master.jpg'
import adata from '@/assets/adata-hv320.jpg'

export const cardsEquipment: ICard[] = [
	{
		id: '1',
		title: 'Dell S2721DS',
		description:
			'27" QHD gaming monitor with blazing-fast IPS technology, stunning color coverage and tear-free, ' +
			'stutter-free gameplay in a revamped bold design.',
		photoUrl: dell
	},
	{
		id: '2',
		title: 'Mac mini m1',
		description:
			'27" QHD gaming monitor with blazing-fast IPS technology, stunning color coverage and tear-free, ' +
			'stutter-free gameplay in a revamped bold design.',
		photoUrl: mac
	},
	{
		id: '3',
		title: 'Logitech mx master for mac',
		description:
			'27" QHD gaming monitor with blazing-fast IPS technology, stunning color coverage and tear-free, ' +
			'stutter-free gameplay in a revamped bold design.',
		photoUrl: logitech
	},
	{
		id: '4',
		title: 'Keychron K3',
		description:
			'27" QHD gaming monitor with blazing-fast IPS technology, stunning color coverage and tear-free, ' +
			'stutter-free gameplay in a revamped bold design.',
		photoUrl: keychron
	},
	{
		id: '5',
		title: 'Adata hv320 1tb',
		description:
			'27" QHD gaming monitor with blazing-fast IPS technology, stunning color coverage and tear-free, ' +
			'stutter-free gameplay in a revamped bold design.',
		photoUrl: adata
	}
]
