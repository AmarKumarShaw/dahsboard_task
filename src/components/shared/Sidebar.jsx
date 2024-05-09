import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { FaArrowUp } from "react-icons/fa";
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'

const linkClass =
	'flex items-center gap-2 font-medium px-3 py-2 hover:no-underline rounded-sm text-base hover:text-blue-600'

export default function Sidebar() {
	return (
		<div className="bg-white w-60 p-3 flex flex-col">
			<div className="flex items-center gap-2 px-1 py-3">
				<img src="./images/logo_cloud.svg" />
				{/* <span className="text-blue-900 text-lg font-bold">cloudcash</span> */}
			</div>
			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2">
				{/* {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))} */}
				<div className='p-4'>
				<div className='h-10 flex items-center justify-center mb-4'>
				<img className='' src="./images/cloud.png" alt="" />
				</div>
				<p className='font-medium text-xs text-center py-2'>Give your money
awesome space in cloud </p>
				</div>
				<div className={classNames(linkClass, 'cursor-pointer font-medium rounded-xl bg-yellow-500 py-3 text-black text-sm')}>
					Upgrade to Premium 
					<span className="text-md">
					<FaArrowUp />
					</span>
				</div>
			</div>
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-blue-200 text-blue-700' : 'text-neutral-400', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}
