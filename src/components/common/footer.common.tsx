import { FC } from 'react';
import s from '../../styles/components/footer.module.scss';

const Footer: FC = () => {
	return <footer className={s['footer']}>Copyright © {new Date().getFullYear()} Daniel J. Antonio, Inc. All rights reserved.</footer>;
};

export default Footer;
