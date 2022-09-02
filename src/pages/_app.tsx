import '../styles/globals.scss';
import type { AppType } from 'next/dist/shared/lib/utils';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import MainLayout from '../layouts/main.layout';

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</>
	);
};

export default MyApp;
