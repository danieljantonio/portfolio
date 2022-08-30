import { FC } from 'react';
import Link from 'next/link';
import styles from '../../styles/components/header.module.scss';
import { useRouter } from 'next/router';

const Header: FC = () => {
	const { pathname } = useRouter();
	return (
		<div className={styles['nav-container']}>
			<div className={styles['nav-gradient']}></div>
			<nav className={styles['nav']}>
				<Link href='/'>
					<a className={styles['brand']}>Jedidiah.dev</a>
				</Link>
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
				</div>
			</nav>
		</div>
	);
};

export default Header;
