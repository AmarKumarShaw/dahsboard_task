import React,{useState} from 'react'



export default function TransactionChart() {
	const [isChecked, setIsChecked] = useState(false)
	
	  const handleCheckboxChange = () => {
		setIsChecked(!isChecked)
	  }
	return (
		<div className="h-[22rem] w-7/12 bg-white p-4 rounded-3xl shadow-lg flex flex-col flex-1">
			<strong className="text-gray-700 font-bold px-2 w-full">Cards</strong>
			<div className='flex justify-between'>
			<div>
					<img src="./images/Card.png" alt="" />
	<div className="mt-3 w-full flex-1 text-xs">
			<div className='ml-8 w-full bg-blue-500/20 h-2.5 rounded-full overflow-hidden'>
            <div className='bg-blue-500 flex justify-center items-center w-[24%] h-full text-xs text-white font-bold'></div>
		<div>
		<p>Weekly Payment</p>
		<p className='font-bold'>$350.60/$4000</p>
		
		</div>
        </div>	
        </div>	
			</div>

		
			<div className='flex flex-col gap-4 text-right '>
<div>
<p className='text-blue-600'>
				$ <span className='text-blue-600 text-4xl'>2850.75</span>
			</p>
				<p className='text-gray-400 text-md font-light'>Current Balance</p>
</div>
<div>
<p >
				$ <span className='text-green-600 text-3xl '>1500.75</span>
			</p>
				<p className='text-gray-400 text-md font-light'>Income</p>
</div>
<div>
<p>
				$ <span className='text-red-600 text-2xl '>350.75</span>
			</p>
				<p className='text-gray-400 text-md font-light'>Outcome</p>
</div>
<div>

<div>
<label className='flex cursor-pointer select-none  '>
        <div className='relative ml-20'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only '
          />
          <div className='block h-8 w-14 rounded-full bg-gray-200'></div>
          <div className='dot absolute left-1 top-1 h-6 w-6 rounded-full bg-gray-400 transition'></div>
        </div>
      </label>
</div>
			
				<p className='text-gray-300 font-light'>Deactivate Card</p>
</div>
			</div>
			</div>
				
			</div>
	
	)
}
