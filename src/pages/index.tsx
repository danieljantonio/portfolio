import { faGithubAlt, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Card from '../components/common/card.common';
import Head from 'next/head';
import LinkIcon from '../components/common/link-icon.common';
import type { NextPage } from 'next';
import s from '../styles/pages/index.module.scss';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Daniel Antonio</title>
				<meta name='description' content='Daniel Jedidiah Antonio' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div>
				<div className='title'>Hi, I&apos;m Daniel J. Antonio</div>
				<div className='paragraph'>
					I am a full stack web developer based in Indonesia who builds and creates eCommerce, CMS, and SaaS applications. For the past 3 years I have worked as a remote web application developer for{' '}
					<a href='https://pixlr.com' target='_blank' className='highlight' rel='noreferrer'>
						&ldquo;Pixlr&rdquo;
					</a>{' '}
					(2019 - 2021) while working on various freelance projects on the side to date.
				</div>
				<div className={s['icon-container']}>
					<LinkIcon url='https://github.com/danieljantonio' icon={faGithubAlt} />
					<LinkIcon url='https://www.linkedin.com/in/daniel-antonio-647329161/' icon={faLinkedin} />
					<LinkIcon url='https://www.instagram.com/jedidiahaaaaa/' icon={faInstagram} />
					{/* <LinkIcon url='https://www.twitter.com/danieljdanielj/' icon={faTwitter} /> */}
				</div>
				<hr />
			</div>
			<div>
				<div className='header'>Past Projects</div>
				<Card
					colorCode='0'
					title='Shalom Plaques'
					stack='NextJS, React, Express, MongoDB, Typescript'
					body="Product catalogue enabling customers to browse through the company's products and search for the product they need."
					href={'https://shalomplaques.com/'}
				/>
				<Card
					colorCode='1'
					title='Pustaka Jasa'
					stack='React, React Native, Express, MongoDB, Stripe'
					body="An eCommerce app that allows parents to purchase their children's needs from the comfort of their home."
					href={'https://play.google.com/store/apps/details?id=com.pustakajasa.esmartapps&hl=en_SG&gl=US'}
				/>
			</div>
		</>
	);
};

export default Home;
