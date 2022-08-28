import '../styles/globals.scss';
import type { AppType } from 'next/dist/shared/lib/utils';
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
