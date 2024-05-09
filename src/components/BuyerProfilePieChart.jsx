import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const data = [
	{ name: 'Male', value: 540 },
	{ name: 'Female', value: 620 },
	{ name: 'Other', value: 210 }
]

const RADIAN = Math.PI / 180
const COLORS = ['#00C49F', '#FFBB28', '#FF8042']

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

export default function BuyerProfilePieChart() {
	return (
		<div className="w-5/12 h-[16rem] bg-white p-4  flex flex-col">
			<div  className='flex gap-2 items-center '>
			<strong className="text-gray-700 font-bold">Goals</strong>
			<div className='bg-yellow-500 h-5 w-5 flex items-center justify-center rounded-full'><p className='font-bold'>+</p></div>
			</div>
			<div className="grid grid-cols-3 justify-between gap-2">
			

			<div className='flex flex-col shadow-lg  p-2 px-4 rounded-lg'>
						<div>
						<div className='dollar'>
							<p className="text-gray-500 text-xl font-medium">$550</p>
						</div>
						<div className='date'> <p className='text-gray-400'>12/20/20</p></div>
						</div>
						<div>
						<div className='image mt-12'>
							<img className="" src="./images/holiday.png" alt="" />
						</div>
						<div className='text'> <p className='text-lg text-gray-600'> Holidays</p> </div>
						</div>
					</div>	<div className='flex flex-col shadow-lg   p-2 px-4 rounded-lg'>
						<div>
						<div className='dollar'>
							<p className="text-gray-500 text-xl font-medium">$550</p>
						</div>
						<div className='date'> <p className='text-gray-400'>12/20/20</p></div>
						</div>
						<div>
						<div className='image mt-12'>
							<img className="" src="./images/paint.png" alt="" />
						</div>
						<div className='text'> <p className='text-lg text-gray-600'>Renovation</p> </div>
						</div>
					</div>	<div className='flex flex-col shadow-lg p-2 px-4  rounded-lg'>
						<div>
						<div className='dollar'>
							<p className="text-gray-500 text-xl font-medium">$550</p>
						</div>
						<div className='date'> <p className='text-gray-400 font-light text-sm'>12/20/20</p></div>
						</div>
						<div>
						<div className='image mt-12 '>
							<img className="" src="./images/game.png" alt="" />
						</div>
						<div className='text'> <p className='text-lg text-gray-600'>Xbox</p></div>
						</div>
					</div>	
			</div>
		</div>
	)
}
