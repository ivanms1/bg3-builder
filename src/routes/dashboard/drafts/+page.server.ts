import prisma from '$lib/prisma';
import { BuildStatus } from '@prisma/client';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = await prisma.build.findMany({
		where: {
			status: BuildStatus.DRAFT
		}
	});

	return { builds: response };
}) satisfies PageServerLoad;
