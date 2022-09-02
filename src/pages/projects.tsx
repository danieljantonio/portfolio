import { NextPage } from 'next';
import Card from '../components/common/card.common';

const Projects: NextPage = () => {
	return (
		<div>
			<div className='title'>Projects</div>
			<div></div>
			<Card
				colorCode='0'
				title='Shalom Plaques'
				stack='React, React Native, Express, MongoDB, Stripe'
				body="An eCommerce app that allows parents to purchase their children's needs from the comfort of their home."
				href={'https://github.com/jedidiahaaaaa/shalom-plaques'}
			/>
			<Card
				colorCode='1'
				title='Pustaka Jasa'
				stack='React, React Native, Express, MongoDB, Stripe'
				body="An eCommerce app that allows parents to purchase their children's needs from the comfort of their home."
				href={'https://play.google.com/store/apps/details?id=com.pustakajasa.esmartapps&hl=en_SG&gl=US'}
			/>
		</div>
	);
};

export default Projects;
