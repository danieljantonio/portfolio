import { FC, ReactNode } from 'react';
import Footer from '../components/common/footer.common';
import Header from '../components/common/header.common';

interface Props {
	children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default MainLayout;
