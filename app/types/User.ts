export interface User {
	uid: string | null;
	displayName: string | null;
	email: string | null;
	photoURL: string | null;
	regNo?: string | null;
	leetcodeUsername?: string;
	gfgUsername?: string;
	totalProblems?: number;
	problemsToday?: number;
	problemsThisWeek?: number;
	language?: 'Java' | 'Python' | 'C++' | 'C';
	history?: any;
}
