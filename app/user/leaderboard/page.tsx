import { firestore } from '@/config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import React from 'react';
import LeaderboardTable from './Leaderboard';

interface ProblemsData {
	total: number;
	school: number;
	basic: number;
	easy: number;
	medium: number;
	hard: number;
	score: number;
}

const getData = async (user: any) => {
	let data: ProblemsData = {
		total: 0,
		school: 0,
		basic: 0,
		easy: 0,
		medium: 0,
		hard: 0,
		score: 0,
	};

	if (user.leetcodeUsername !== '') {
		const request = await fetch(
			`https://leetcode-stats-api.herokuapp.com/${user.leetcodeUsername}`,
			{
				next: { revalidate: 3600 },
			},
		);
		const response = await request.json();

		data.total += response.totalSolved;
		data.easy += response.easySolved;
		data.medium += response.mediumSolved;
		data.hard += response.hardSolved;
		data.score += 0.5 * data.easy + data.medium + 1.5 * data.hard;
	}
	if (user.gfgUsername !== '') {
		const request = await fetch(
			`https://geeksforgeeks-api.vercel.app/get/${user.gfgUsername}`,
			{
				next: { revalidate: 5 },
			},
		);
		const response = await request.json();
		data.total += response.total_problems_solved;
		data.easy += response.problems.easy.count;
		data.medium += response.problems.medium.count;
		data.hard += response.problems.hard.count;
		data.school += response.problems.school.count;
		data.basic += response.problems.basic.count;
		data.score += response.overall_coding_score;
	}
	return { ...user, data: data };
};

const Leaderboard = async () => {
	const snapshot = await getDocs(collection(firestore, 'users'));
	const userPromises = snapshot.docs.map(async (doc) => getData(doc.data()));

	const userData = await Promise.all(userPromises);

	return <LeaderboardTable userData={userData} />;
};

export default Leaderboard;
