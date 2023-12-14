import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Pricing page',
	description: 'Page princing service',
};

const PricingPage = () => {
	return (
		<>
			<h1 className="text-5xl">PricingPage</h1>
		</>
	);
};

export default PricingPage;
