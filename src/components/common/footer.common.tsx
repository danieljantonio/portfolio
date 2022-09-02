import { FC } from 'react';
import s from '../../styles/components/footer.module.scss';

const Footer: FC = () => {
	return (
		<footer className={s['footer']}>
			This page was created by taking inspiration from{' '}
			<a href='https://daleanthony.com/' className={s['reference-link']}>
				Dale Anthony
			</a>
			.
		</footer>
	);
};

export default Footer;
