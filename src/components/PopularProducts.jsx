import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const popularProducts = [
	{
		id: '3432',
		product_name: 'Macbook M1 Pro 14"',
		product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
		product_price: '$1499.00',
		product_stock: 341
	},
	{
		id: '7633',
		product_name: 'Samsung Galaxy Buds 2',
		product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
		product_price: '$399.00',
		product_stock: 24
	},
	{
		id: '6534',
		product_name: 'Asus Zenbook Pro',
		product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
		product_price: '$899.00',
		product_stock: 56
	},
	{
		id: '9234',
		product_name: 'LG Flex Canvas',
		product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
		product_price: '$499.00',
		product_stock: 98
	},
	{
		id: '4314',
		product_name: 'Apple Magic Touchpad',
		product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
		product_price: '$699.00',
		product_stock: 0
	},
	{
		id: '4342',
		product_name: 'Nothing Earbuds One',
		product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
		product_price: '$399.00',
		product_stock: 453
	}
]

function PopularProducts() {
	return (
		<div className="w-5/12 -mt-32 bg-white p-4 pb-0 rounded-sm ">
			<strong className="text-gray-700  text-lg font-bold">Outcome Statistics</strong>
			<div className="mt-4 flex flex-col gap-3">
				
					{/* <div className='px-2 py-2 bg-orange-200 text-orange-500'><FaCartShopping /></div> */}
					<div>


					{/* {This is section} */}
					<div className=" flex flex-col gap-3">
				<div className='flex justify-between  items-center gap-2'>
				<div className='px-2 py-2  bg-orange-200 text-orange-500 '><FaCartShopping /></div>
					<div  className="w-full flex items-center justify-center">
					
					<div className='w-full bg-orange-500/20 h-2.5 rounded-full overflow-hidden'>
            <div className='bg-orange-500 flex justify-center items-center w-[52%] h-full text-xs text-white font-bold'></div>
        </div>

					</div>
					<div><p className="text-gray-400 text-md">52%</p></div>
				</div>
				<div className='flex justify-between  items-center gap-2'>
				<div className='px-2 py-2  bg-green-200 text-green-500'><FaCartShopping /></div>
					<div  className="w-full flex items-center justify-center">
					
					<div className='w-full bg-green-500/20 h-2.5 rounded-full overflow-hidden'>
            <div className='bg-green-500 flex justify-center items-center w-[21%] h-full text-xs text-white font-bold'></div>
        </div>

					</div>
					<div><p className="text-gray-400 text-md">21%</p></div>
				</div>
				<div className='flex justify-between  items-center gap-2'>
				<div className='px-2 py-2  bg-blue-200 text-blue-500'><FaCartShopping /></div>
					<div  className="w-full flex items-center justify-center">
					
					<div className='w-full bg-blue-500/20 h-2.5 rounded-full overflow-hidden'>
            <div className='bg-blue-500 flex justify-center items-center w-[74%] h-full text-xs text-white font-bold'></div>
        </div>

					</div>
					<div><p className="text-gray-400 text-md">74% </p></div>
				</div>
			</div>
			
			
		</div>

			<div className='new-transaction shadow-lg p-4 rounded-2xl'>
			<div className='mt-4'>
				<p className='text-gray-700 font-bold text-md pb-2'>New transaction</p>
			<div className='flex gap-6 items-center text-sm '>
			<div className='text-center h-8 w-8 text-sm'>
				<img className='rounded-full' src="./images/Ann.png" alt="" />
				<p>Amar</p>
			</div>
			<div className='text-center h-8 w-8 text-sm'>
				<img className='rounded-full' src="./images/Monica.png" alt="" />
				<p>Monica</p>
			</div>
			<div className='text-center h-8 w-8 text-sm'>
				<img className='rounded-full' src="./images/John.png" alt="" />
				<p>John</p>
			</div>
			<div className='text-center h-8 w-8 text-sm'>
				<img  className='rounded-full' src="./images/Mike.png" />
				<p>Mike</p>
			</div>
			<div className='text-center h-8 w-8 text-sm'>
				<img  className='rounded-full' src="./images/Mila.png" />
				<p>Mia</p>
			</div>
			<div className=' bg-yellow-500 text-center h-8 w-8 text-sm rounded-full'>
				
				<p className='font-bold text-2xl'>+</p>
			</div>
			</div>
			</div>
				<div className='flex items-center justify-between '>
				
				
				<div className='flex '>
					{/* {Transaction Sections} */}
				
				
				<input type="text" value="0" className='w-36 h-10 px-2 py-2 border rounded-lg mr-2 text-gray-200 outline-none' />
				<div className='h-10  bg-yellow-500 text-black font-medium text-xs px-1 rounded-lg text-center flex items-center'><p className='px-2 text-xs w-32 flex items-center'>Send the transfer <IoIosArrowForward /></p></div>
				</div>
				<div>
					<img className='h-auto w-52' src="./images/loan.png" alt="" />
				</div>
				</div>
			</div>
			
					</div>
		
		</div>
	)
}

export default PopularProducts
