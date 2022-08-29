import { FC } from 'react';
import Link from 'next/link';
import styles from '../../styles/components/header.module.scss';
import { useRouter } from 'next/router';

const Header: FC = () => {
	const { pathname } = useRouter();
	return (
		<nav className={styles['nav']}>
			<Link href='/'>Jedidiah.dev</Link>
			<div className={styles['nav-items']}>
				<Link href='/about'>
					<a className={pathname === '/about' ? styles['nav-active'] : ''}>About</a>
				</Link>
				<Link href='/projects'>
					<a className={pathname === '/projects' ? styles['nav-active'] : ''}>Projects</a>
				</Link>
				<Link href='/tools'>
					<a className={pathname === '/tools' ? styles['nav-active'] : ''}>Tools</a>
				</Link>
				<Link href='/colors'>
					<a className={pathname === '/colors' ? styles['nav-active'] : ''}>Colors</a>
				</Link>
			</div>
		</nav>
	);
};

export default Header;
