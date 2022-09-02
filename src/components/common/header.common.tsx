import { FC } from 'react';
import Link from 'next/link';
import s from '../../styles/components/header.module.scss';
import { useRouter } from 'next/router';

const Header: FC = () => {
	const { pathname } = useRouter();
	return (
		<div className={s['nav-container']}>
			<div className={s['gradient']}></div>
			<nav className={s['nav']}>
				<Link href='/'>
					<a className={s['brand']}>Jedidiah.dev</a>
				</Link>
				<div className={s['nav-items']}>
					<Link href='/'>
						<a className={pathname === '/' ? s['nav-active'] : ''}>Home</a>
					</Link>
					<Link href='/about'>
						<a className={pathname === '/about' ? s['nav-active'] : ''}>About</a>
					</Link>
					<Link href='/projects'>
						<a className={pathname === '/projects' ? s['nav-active'] : ''}>Projects</a>
					</Link>
					<Link href='/tech-stack'>
						<a className={pathname === '/tech-stack' ? s['nav-active'] : ''}>Tech Stack</a>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Header;
