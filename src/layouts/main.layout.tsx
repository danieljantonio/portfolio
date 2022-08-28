import { FC, ReactNode } from 'react';
import Header from '../components/common/header.common';

interface Props {
	children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default MainLayout;
