import SideBarFooter from './footer';

const Sidebar = () => {
	return (
		<div className="h-screen w-[15%] p-2 bg-purple-200 rounded justify-center flex flex-col">
			<div className="head flex flex-col">
				<h1 className="text-lg">Placement</h1>
			</div>

			<div className="body flex flex-1 flex-col "></div>
			<div className="footer">
				<SideBarFooter />
			</div>
		</div>
	);
};

export default Sidebar;
