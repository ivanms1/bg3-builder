import { writable } from 'svelte/store';

function createBuild() {
	const { subscribe, set, update } = writable(initialBuild);

	return {
		subscribe,
		setName: (name: string) => update((build) => ({ ...build, name })),
		setClassName: (className: string) => update((build) => ({ ...build, className })),
		setRace: (race: string) => update((build) => ({ ...build, race })),
		setCurrentStep: (currentStep: Steps) => update((build) => ({ ...build, currentStep })),
		setLevel: (level: number, comment: string) =>
			update((build) => ({ ...build, levels: { ...build.levels, [level]: { comment } } })),
		resetBuild: () => set(initialBuild),
		set
	};
}

const initialLevels = {
	1: {
		comment: ''
	},
	2: {
		comment: ''
	},
	3: {
		comment: ''
	},
	4: {
		comment: ''
	},
	5: {
		comment: ''
	},
	6: {
		comment: ''
	},
	7: {
		comment: ''
	},
	8: {
		comment: ''
	},
	9: {
		comment: ''
	},
	10: {
		comment: ''
	},
	11: {
		comment: ''
	},
	12: {
		comment: ''
	}
};

type Steps = 'name' | 'race' | 'class' | 'levels';

const initialBuild: {
	name: string;
	currentStep: Steps;
	className: string;
	race: string;
	levels: Record<number, { comment: string }>;
} = {
	name: '',
	currentStep: 'name',
	className: 'Barbarian',
	race: 'Dragonborn',
	levels: initialLevels
};

export const build = createBuild();
