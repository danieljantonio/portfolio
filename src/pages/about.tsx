import { NextPage } from 'next';
import Image from 'next/image';
import s from '../styles/pages/about.module.scss';

const About: NextPage = () => {
	return (
		<div className={s['about']}>
			<div className={s['image-container']}>
				<Image src='/static/images/daniel-drumming.jpg' className={s['image']} height={500} width={880} alt='daniel drumming' />
			</div>
			<div className={s['text-container']}>
				<div className={s['header']}>Who am I?</div>
				<div className={s['paragraph']}>
					My name is Daniel Jedidiah Antonio, a remote full stack developer based in Indonesia. I graduated with a BSc (hons) in Computer Science and Masters of Business Administration, the later while working in{' '}
					<a href='https://pixlr.com' className='highlight'>
						Pixlr.com
					</a>{' '}
					and freelancing for the first half.
				</div>
				<div className={s['paragraph']}>
					I am currently working as a freelance remote developer for a plethora of clients, creating eCommerce platforms, dashboards, CMS, CRMs, mobile, and SaaS applications. These applications are built using React, React Native,
					Typescript, MongoDB, Stripe, and various other technologies.
				</div>
				<div className={s['paragraph']}>
					Outside of work, I spend my time playing the drums, enjoying a nice cup of coffee, playing DotA 2, and occassionally joining charitable events near me. I enjoy learning various ways to develop myself further and have been studying
					and trading stocks recently.
				</div>
				<div className={s['paragraph']}>
					If you&apos;d like to know more about me and my activities, feel free to follow me on{' '}
					<a className='highlight' href='https://instagram.com/jedidiahaaaaa' target='_blank' rel='noreferrer'>
						Instagram
					</a>{' '}
					and{' '}
					<a className='highlight' href='https://twitter.com/danieljdanielj' target='_blank' rel='noreferrer'>
						Twitter
					</a>
					.
				</div>
			</div>
			<hr />
			<div>
				<div className={s['text-container']}>
					<div className={s['header']}>Work Experience</div>
					<div className={s['row-experience']}>
						<div className={s['work-details']}>
							<div className={s['highlight']}>Freelance</div>
							<div className={s['work-role']}>Full Stack | Mobile Developer</div>
						</div>
						<div className={s['work-date']}>2019 -</div>
					</div>
					<div className={s['row-experience']}>
						<div className={s['work-details']}>
							<div className={s['highlight']}>Pixlr</div>
							<div className={s['work-role']}>Web Application Developer</div>
						</div>
						<div className={s['work-date']}>2019 - 2021</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
