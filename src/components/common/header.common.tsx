import { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => {
	return (
		<nav>
			<Link href='/'>Jedidiah</Link>
			<Link href='/about'>About</Link>
			<Link href='/projects'>Projects</Link>
			<Link href='/tools'>Tools</Link>
			<Link href='/colors'>Colors</Link>
			{/* <div>Toggle Dark Mode</div> */}
		</nav>
	);
};

export default Header;
