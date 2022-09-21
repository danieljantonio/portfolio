import { useRouter } from 'next/router';
import { FC } from 'react';
import s from '../../styles/components/card.module.scss';

interface Props {
	title: string;
	body: string;
	href: string;
	stack?: string;
	colorCode: string;
}

const Card: FC<Props> = ({ title, body, href, stack, colorCode }) => {
	return (
		<a href={href} className={s['card']} target='_blank' rel='noreferrer'>
			<div className={`${s['card-brand']} ${s[`cb-${colorCode}`]}`}></div>
			<div className={s['card-content']}>
				<div className={s['card-header']}>
					<div className={s['card-title']}>{title}</div>
					{stack ? <div className={s['card-stack']}>{stack}</div> : <></>}
				</div>
				<div className={s['card-body']}>{body}</div>
			</div>
		</a>
	);
};

export default Card;
