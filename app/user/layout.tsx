import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-row">
			<Sidebar />

			<div className="main flex-1 h-screen overflow-y-scroll">{children}</div>
		</div>
	);
};

export default AdminLayout;
