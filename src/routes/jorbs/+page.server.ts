import type { PageLoad } from './$types';

export const load: PageLoad = () => {
		return {
				jobs: [
						{role: "Software Engineer", company: "Netflix", status: "Applied"},
						{role: "Web Developer", company: "Facebook", status: "Rejected"},
				],
		};
};
