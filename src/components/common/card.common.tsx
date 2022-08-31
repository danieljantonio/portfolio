import { useRouter } from 'next/router';
import { FC } from 'react';
import { Url } from 'url';
import s from '../../styles/components/card.module.scss';

interface Props {
	title: string;
	body: string;
	href: string;
	stack?: string;
}

const Card: FC<Props> = ({ title, body, href, stack }) => {
	const router = useRouter();

	return (
		<div className={s['card']} onClick={() => router.push(href)}>
			<div className={s['card-brand']}></div>
			<div className={s['card-content']}>
				<div className={s['card-title']}>
					<div>{title}</div>
					{stack ? <div>{stack}</div> : <></>}
				</div>
				<div className={s['card-body']}>{body}</div>
			</div>
		</div>
	);
};

export default Card;
