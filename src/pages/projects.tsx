import Card from '../components/common/card.common';
import { NextPage } from 'next';

const Projects: NextPage = () => {
	return (
		<div>
			<div className='title'>Projects</div>
			<div></div>
			<Card
				colorCode='0'
				title='Shalom Plaques'
				stack='NextJS, React, Express, MongoDB, Typescript'
				body="An eCommerce app that allows parents to purchase their children's needs from the comfort of their home."
				href={'https://shalomplaques.com'}
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
