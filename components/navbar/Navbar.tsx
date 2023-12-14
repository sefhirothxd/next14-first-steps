import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import { ActiveLink } from '..';

const navItems = [
	{ path: '/about', text: 'About' },
	{ path: '/pricing', text: 'Pricing' },
	{ path: '/contact', text: 'Contact' },
];

export const Navbar = () => {
	return (
		<nav className="flex flex-1 justify-between  bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
			<Link href={'/'} className="flex items-center gap-x-2">
				<HomeIcon />
				<span>Home</span>
			</Link>

			<div className=" flex gap-x-2">
				{navItems.map((item) => (
					<ActiveLink key={item.text} {...item} />
				))}
			</div>
		</nav>
	);
};
