import prisma from '$lib/prisma';

import type { PageServerLoad } from './$types';

export const load = (async ({ params: { id } }) => {
	const build = await prisma.build.findUnique({
		where: {
			id: id
		}
	});
	return { build };
}) satisfies PageServerLoad;
