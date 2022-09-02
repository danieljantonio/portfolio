import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import s from '../../styles/components/link-icon.module.scss';

interface Props {
	icon: IconProp;
	url: string;
}

const LinkIcon: FC<Props> = ({ url, icon }) => {
	return (
		<a href={url} className={s['mini-link']} target='_blank'>
			<FontAwesomeIcon icon={icon} color='white' />
		</a>
	);
};

export default LinkIcon;
