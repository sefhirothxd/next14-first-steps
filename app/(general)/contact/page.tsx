import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Contact page',
	description: 'Page to contact',
};

const ContactPage = () => {
	return (
		<>
			<h1 className="text-5xl">ContactPage</h1>
		</>
	);
};

export default ContactPage;
