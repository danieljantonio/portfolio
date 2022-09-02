import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '../components/common/card.common';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Daniel Antonio</title>
				<meta name='description' content='Daniel Jedidiah Antonio' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div>
				<div>Home</div>
				<Card
					title='Shalom Plaques'
					stack='React, React Native, Express, MongoDB, Stripe'
					body="An eCommerce app that allows parents to purchase their children's needs from the comfort of their home."
					href={'https://github.com/jedidiahaaaaa/shalom-plaques'}
				/>
				<Card
					title='Pustaka Jasa'
					stack='React, React Native, Express, MongoDB, Stripe'
					body="An eCommerce app that allows parents to purchase their children's needs from the comfort of their home."
					href={'https://play.google.com/store/apps/details?id=com.pustakajasa.esmartapps&hl=en_SG&gl=US'}
				/>
				<Card title='Pustaka Jasa' stack='React, React Native, Express, MongoDB, Stripe' body="An eCommerce app that allows parents to purchase their children's needs from the comfort of their home." href={'https://google.com'} />
			</div>
		</>
	);
};

export default Home;
