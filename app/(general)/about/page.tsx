import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'About page',
	description: 'SEO Description',
	keywords: ['probando', 'react', 'next'],
};

const AboutPage = () => {
	return (
		<>
			<h1 className="text-5xl">AboutPage</h1>
		</>
	);
};

export default AboutPage;
