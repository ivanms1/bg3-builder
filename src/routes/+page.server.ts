``; // src/routes/create/+page.server.ts

import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { BuildStatus } from '@prisma/client';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const name = data.get('name');
		const buildData = data.get('build');

		if (!name || !buildData) {
			return fail(400, { name, buildData, missing: true });
		}

		if (typeof name != 'string' || typeof buildData != 'string') {
			return fail(400, { incorrect: true });
		}

		await prisma.build.create({
			data: {
				data: buildData,
				name,
				status: BuildStatus.DRAFT,
				user: {
					connect: {
						id: 'clov7fzzh0000p8e1nepry80l'
					}
				}
			}
		});

		throw redirect(303, `/`);
	}
} satisfies Actions;
