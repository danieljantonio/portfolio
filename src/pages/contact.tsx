import { NextPage } from 'next';
import { useState } from 'react';
import s from '../styles/pages/contact.module.scss';

type ContactState = {
	name: string;
	email: string;
	inquiry: string;
};

const Contact: NextPage = () => {
	const [form, setForm] = useState<ContactState>({ name: '', email: '', inquiry: '' });

	const validateForm: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const isValid = Object.values(form).every((value) => value.length > 0);
		if (!isValid) return alert('Please fill in all the fields.');
		if (isValid) window.location.href = `mailto:jedidiah.main@gmail.com?subject=Product Inquiry&body=Hi, I am ${form.name}. \n${form.inquiry}. \n\n You can contact me through ${form.email}.`;
	};

	return (
		<div className={s['contact']}>
			<div className='title'>Contact</div>
			<form autoComplete='off' onSubmit={validateForm} id='contact-form'>
				<div className={s['input-container']}>
					<label htmlFor='name'>Name: </label>
					<input type='text' id='name' onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder='John Doe' />
				</div>
				<div className={s['input-container']}>
					<label htmlFor='email'>Email: </label>
					<input type='email' id='email' onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder='johndoe@gmail.com' />
				</div>
				<div className={s['input-container']}>
					<label htmlFor='name'>Inquiry: </label>
					<textarea id='email' rows={5} onChange={(e) => setForm({ ...form, inquiry: e.target.value })} placeholder="I'd like to create a web app." />
				</div>
				<button type='submit' form='contact-form'>
					Email
				</button>
			</form>
		</div>
	);
};

export default Contact;
