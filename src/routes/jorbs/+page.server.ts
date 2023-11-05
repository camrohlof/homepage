import type { PageLoad } from './$types';
import dayjs from 'dayjs';

export const load: PageLoad = (() => {
	const now = dayjs();
	return {
		jobs: [
			{role: "Software Engineer", company: "Netflix", status: "Applied", applicationDate: now.toDate(), lastUpdate: now.toDate()},
			{role: "Web Developer", company: "Facebook", status: "Rejected", applicationDate: now.toDate(), lastUpdate: now.toDate()},
		],
	};
});
