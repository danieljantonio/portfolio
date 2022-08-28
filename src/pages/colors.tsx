import { NextPage } from 'next';

const Colors: NextPage = () => {
	const colorsDark: string[] = ['#111111', '#222222', '#2a2a2a', '#363636', '#b1b1b1', '#f6f6f6'];
	const colorsLight: string[] = ['#f6f6f6', '#ffeea8', '#ffe066', '#f7b801', '#2e2e2e', '#454545'];
	return (
		<>
			<div style={{ display: 'flex', marginBottom: 50 }}>
				{colorsDark.map((color) => (
					<div style={{ height: 100, width: 100, backgroundColor: color, color: 'white', textAlign: 'center' }}>{color}</div>
				))}
			</div>
			<div style={{ display: 'flex' }}>
				{colorsLight.map((color) => (
					<div style={{ height: 100, width: 100, backgroundColor: color, textAlign: 'center' }}>{color}</div>
				))}
			</div>
		</>
	);
};

export default Colors;
