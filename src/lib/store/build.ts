import { writable } from 'svelte/store';

function createBuild() {
	const { subscribe, set, update } = writable(initialBuild);

	return {
		subscribe,
		setName: (name: string) => update((build) => ({ ...build, name })),
		setClassName: (className: string) => update((build) => ({ ...build, className })),
		setSubrace: (subrace: { label: string; value: string }) =>
			update((build) => ({ ...build, subrace })),
		setLevel: (level: number, info: { comment: string; className: string }) =>
			update((build) => ({
				...build,
				levels: { ...build.levels, [level]: { comment: info.comment, className: info.className } }
			})),
		removeLevel: (level: number) =>
			update((build) => {
				const levels = build.levels;

				if (Object.keys(levels).length === 1) {
					return {
						...build,
						levels: {}
					};
				}

				Object.keys(levels).forEach((key) => {
					const num = parseInt(key);

					if (num === level) {
						delete levels[num];
					}

					if (num > level) {
						levels[num - 1] = levels[num];
						delete levels[num];
					}
				});

				return {
					...build,
					levels
				};
			}),
		setAbility: (ability: string, value: number) =>
			update((build) => ({ ...build, abilities: { ...build.abilities, [ability]: value } })),
		resetAbilities: () =>
			update((build) => ({
				...build,
				abilities: initialAbilities,
				bonusAbilities: { plusOne: '', plusTwo: '' }
			})),
		resetBuild: () => set(initialBuild),
		setPlusOne: (plusOne: string) =>
			update((build) => ({ ...build, bonusAbilities: { ...build.bonusAbilities, plusOne } })),
		setPlusTwo: (plusTwo: string) =>
			update((build) => ({ ...build, bonusAbilities: { ...build.bonusAbilities, plusTwo } })),
		set
	};
}

const initialLevels = {};

const initialGear = {
	1: {
		head: [],
		torso: [],
		hands: [],
		boots: [],
		cloak: [],
		necklace: [],
		firstRing: [],
		secondRing: [],
		weaponPrimary: [],
		weaponSecondary: [],
		rangePrimary: [],
		rangeSecondary: []
	},
	2: {
		head: [],
		torso: [],
		hands: [],
		boots: [],
		cloak: [],
		necklace: [],
		firstRing: [],
		secondRing: [],
		weaponPrimary: [],
		weaponSecondary: [],
		rangePrimary: [],
		rangeSecondary: []
	},
	3: {
		head: [],
		torso: [],
		hands: [],
		boots: [],
		cloak: [],
		necklace: [],
		firstRing: [],
		secondRing: [],
		weaponPrimary: [],
		weaponSecondary: [],
		rangePrimary: [],
		rangeSecondary: []
	}
};

const initialAbilities: Record<string, number> = {
	strength: 8,
	dexterity: 8,
	constitution: 8,
	intelligence: 8,
	wisdom: 8,
	charisma: 8
};

const initialBuild: {
	name: string;
	className: string;
	race: {
		label: string;
		value: string;
	};
	subrace: {
		label: string;
		value: string;
	};
	background: {
		label: string;
		value: string;
	};
	levels: Record<number, { comment: string; className: string }>;
	abilities: Record<string, number>;
	bonusAbilities: {
		plusOne: string;
		plusTwo: string;
	};
	gear: Record<
		number,
		{
			head: string[];
			torso: string[];
			hands: string[];
			boots: string[];
			cloak: string[];
			necklace: string[];
			firstRing: string[];
			secondRing: string[];
			weaponPrimary: string[];
			weaponSecondary: string[];
			rangePrimary: string[];
			rangeSecondary: string[];
		}
	>;
} = {
	name: '',
	className: '',
	race: {
		label: '',
		value: ''
	},
	subrace: {
		label: '',
		value: ''
	},
	background: {
		label: '',
		value: ''
	},
	levels: initialLevels,
	abilities: initialAbilities,
	bonusAbilities: {
		plusOne: '',
		plusTwo: ''
	},
	gear: initialGear
};

export const build = createBuild();
