import { faGithubAlt, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import type { NextPage } from 'next';
import Head from 'next/head';
import LinkIcon from '../components/common/link-icon.common';
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
				<div className='title'>Hi, I'm Daniel J. Antonio</div>
				<div className='paragraph'>
					I am a full stack web developer based in Indonesia who builds and creates eCommerce, CMS, and SaaS applications. For the past 3 years I have worked as a remote web application developer for{' '}
					<a href='https://pixlr.com' target='_blank' className='highlight'>
						"Pixlr"
					</a>{' '}
					(2019 - 2021) while working on various freelance projects on the side to date.
				</div>
				<div className={s['icon-container']}>
					<LinkIcon url='https://github.com/jedidiahaaaaa' icon={faGithubAlt} />
					<LinkIcon url='https://www.linkedin.com/in/daniel-antonio-647329161/' icon={faLinkedin} />
					<LinkIcon url='https://www.instagram.com/jedidiahaaaaa/' icon={faInstagram} />
					<LinkIcon url='https://www.twitter.com/danieljdanielj/' icon={faTwitter} />
				</div>
				<hr />
			</div>
		</>
	);
};

export default Home;
