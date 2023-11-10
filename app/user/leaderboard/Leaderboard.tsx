'use client';
import React, { useState } from 'react';

const Leaderboard = ({ userData }: { userData: any[] }) => {
	const [filter, setFilter] = useState('total');
	const [ascending, setAscending] = useState(true);
	const [selectedLanguage, setSelectedLanguage] = useState('All'); // Default filter by All languages
	const [selectedYear, setSelectedYear] = useState('All'); // Default filter by All languages

	const filteredAndSortedData = userData
		.filter((user) =>
			selectedLanguage === 'All' ? true : user.language === selectedLanguage,
		)
		.sort((a, b) => {
			if (ascending) {
				return a.data[filter] - b.data[filter];
			} else {
				return b.data[filter] - a.data[filter];
			}
		});

	const languageOptions = ['All', 'C', 'C++', 'Java', 'Python']; // Add more languages as needed
	const yearOptions = ['I','II','III','IV']
	return (
		<div className="p-4">
			<div className="mb-4 flex items-center">
				<label className="mr-2">Filter By:</label>
				<select
					className="border rounded px-2 py-1"
					onChange={(e) => setFilter(e.target.value)}
				>
					<option value="total">Total Problems Solved</option>
					<option value="easy">Easy Problems Solved</option>
					<option value="medium">Medium Problems Solved</option>
					<option value="hard">Hard Problems Solved</option>
				
				</select>
				<button
					className="ml-2 px-2 py-1 bg-blue-500 text-white rounded"
					onClick={() => setAscending(!ascending)}
				>
					{ascending ? 'Sort Ascending' : 'Sort Descending'}
				</button>
			</div>

			<div className="mb-4">
				<label className="mr-2">Filter by Year:</label>
				<select
					className="border rounded px-2 py-1"
					value={selectedYear}
					onChange={(e) => setSelectedYear(e.target.value)}
				>
					{yearOptions.map((year) => (
						<option key={year} value={year}>
							{year}
						</option>
					))}
				</select>
			</div>

			<div className="mb-4">
				<label className="mr-2">Filter by Language:</label>
				<select
					className="border rounded px-2 py-1"
					value={selectedLanguage}
					onChange={(e) => setSelectedLanguage(e.target.value)}
				>
					{languageOptions.map((language) => (
						<option key={language} value={language}>
							{language}
						</option>
					))}
				</select>
			</div>

			<table className="w-full border-collapse border border-gray-300">
				<thead>
					<tr>
						<th className="p-2 border border-gray-300">Rank</th>
						<th className="p-2 border border-gray-300">Name</th>
						<th className="p-2 border border-gray-300">Reg No</th>

						<th className="p-2 border border-gray-300">Language</th>
						<th className="p-2 border border-gray-300">
							Total Problems Solved
						</th>
					</tr>
				</thead>
				<tbody>
					{filteredAndSortedData.map((user, index) => (
						<tr key={user.uid}>
							<td className="p-2 border border-gray-300">{index + 1}</td>
							<td className="p-2 border border-gray-300">{user.displayName}</td>
							<td className="p-2 border border-gray-300">{user.regNo}</td>
							<td className="p-2 border border-gray-300">{user.year}</td>
							<td className="p-2 border border-gray-300">{user.language}</td>
							<td className="p-2 border border-gray-300">
								{user.data[filter]}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Leaderboard;
