import Link from 'next/link';
import SideBarFooter from './footer';

const Sidebar = () => {
	return (
		<div className="hidden md:block  max-w-2xl h-screen mx-auto">
			<aside className="w-64" aria-label="Sidebar">
				<div className="px-3 py-4 h-screen overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
					<ul className="space-y-2 flex flex-col h-full">
						{/* <li>
							<a
								href="#"
								className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								<svg
									className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
									<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
								</svg>
								<span className="ml-3">Dashboard</span>
							</a>
						</li> */}
						{/* <li>
							<a
								href="#"
								className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								<svg
									className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
										clipRule="evenodd"
									></path>
								</svg>
								<span className="flex-1 ml-3 whitespace-nowrap">Users</span>
							</a>
						</li> */}
						<li>
							<a
								href="/user/leaderboard"
								className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								<svg
									className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
										clipRule="evenodd"
									></path>
								</svg>
								<span className="flex-1 ml-3 whitespace-nowrap">
									Leaderboard
								</span>
							</a>
						</li>
						<li>
							<a
								href="/user/editProfile"
								className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								<svg
									className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
										clipRule="evenodd"
									></path>
								</svg>
								<span className="flex-1 ml-3 whitespace-nowrap">Edit Profile</span>
							</a>
						</li>
						<li className="flex-1"></li>
						<li>
							<a
								href="#"
								className="flex items-center p-2 text-base bg-gray-100 font-normal text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700"
							>
								<SideBarFooter />
							</a>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	);
};
export default Sidebar;
// const Sidebar = () => {
// 	return (
// 		<div className="h-screen w-[15%] p-2 bg-purple-200 rounded justify-center flex flex-col">
// 			<div className="head flex flex-col">
// 				<h1 className="text-lg">Placement</h1>
// 			</div>

// 			<div className="body flex flex-1 flex-col ">
// 				<SidebarItem name="Dashboard" href="/user/dashboard" iconURL="#" />
// 			</div>
// 			<div className="footer">
// 				<SideBarFooter />
// 			</div>
// 		</div>
// 	);
// };

// export default Sidebar;

// export const SidebarItem = ({
// 	name,
// 	href,
// 	iconURL,
// }: {
// 	name: string;
// 	href: string;
// 	iconURL: string;
// }) => {
// 	return (
// 		<li>
// 			<Link href={href}>{name}</Link>
// 		</li>
// 	);
// };
