export const RACES_OPTIONS: { label: string; value: string }[] = [
	{
		label: 'Dragonborn',
		value: 'dragonborn'
	},
	{
		label: 'Drow',
		value: 'drow'
	},
	{
		label: 'Dwarf',
		value: 'dwarf'
	},
	{
		label: 'Elf',
		value: 'elf'
	},
	{
		label: 'Gythyanki',
		value: 'gythyanki'
	},
	{
		label: 'Gnome',
		value: 'gnome'
	},
	{
		label: 'Half-Elf',
		value: 'half-elf'
	},
	{
		label: 'Halfling',
		value: 'halfling'
	},
	{
		label: 'Half-Orc',
		value: 'half-orc'
	},
	{
		label: 'Human',
		value: 'human'
	},
	{
		label: 'Tiefling',
		value: 'tiefling'
	}
];

export const SUBRACE_OPTIONS: Record<string, { label: string; value: string }[]> = {
	dragonborn: [
		{
			label: 'Black',
			value: 'black'
		},
		{
			label: 'Blue',
			value: 'blue'
		},
		{
			label: 'Brass',
			value: 'brass'
		},
		{
			label: 'Bronze',
			value: 'bronze'
		},
		{
			label: 'Copper',
			value: 'copper'
		},
		{
			label: 'Gold',
			value: 'gold'
		},
		{
			label: 'Green',
			value: 'green'
		},
		{
			label: 'Red',
			value: 'red'
		},
		{
			label: 'Silver',
			value: 'silver'
		},
		{
			label: 'White',
			value: 'white'
		}
	],
	drow: [
		{
			label: 'Loth-Sworn',
			value: 'loth-sworn'
		},
		{
			label: 'Seldarine',
			value: 'seldarine'
		}
	],
	dwarf: [
		{
			label: 'Gold',
			value: 'gold'
		},
		{
			label: 'Shield',
			value: 'shield'
		},
		{
			label: 'Duergar',
			value: 'duergar'
		}
	],
	elf: [
		{
			label: 'High',
			value: 'high'
		},
		{
			label: 'Wood',
			value: 'wood'
		}
	],
	gythyanki: [],
	gnome: [
		{
			label: 'Rock',
			value: 'rock'
		},
		{
			label: 'Forest',
			value: 'forest'
		},
		{
			label: 'Deep',
			value: 'deep'
		}
	],
	'half-elf': [
		{
			label: 'High',
			value: 'high'
		},
		{
			label: 'Wood',
			value: 'wood'
		},
		{
			label: 'Drow',
			value: 'drow'
		}
	],
	halfling: [
		{
			label: 'Lightfoot',
			value: 'lightfoot'
		},
		{
			label: 'Strongheart',
			value: 'strongheart'
		}
	],
	'half-orc': [],
	human: [],
	tiefling: [
		{
			label: 'Asmodeus',
			value: 'asmodeus'
		},
		{
			label: 'Mephistopheles',
			value: 'mephistopheles'
		},
		{
			label: 'Zariel',
			value: 'zariel'
		}
	]
};

export const BACKGROUND_OPTIONS: { label: string; value: string }[] = [
	{
		label: 'Acolyte',
		value: 'acolyte'
	},
	{
		label: 'Charlatan',
		value: 'charlatan'
	},
	{
		label: 'Criminal',
		value: 'criminal'
	},
	{
		label: 'Entertainer',
		value: 'entertainer'
	},
	{
		label: 'Folk Hero',
		value: 'folk-hero'
	},
	{
		label: 'Guild Artisan',
		value: 'guild-artisan'
	},
	{
		label: 'Noble',
		value: 'noble'
	},
	{
		label: 'Outlander',
		value: 'outlander'
	},
	{
		label: 'Sage',
		value: 'sage'
	},
	{
		label: 'Soldier',
		value: 'soldier'
	},
	{
		label: 'Urchin',
		value: 'urchin'
	}
];

export const CLASS_OPTIONS: { label: string; value: string }[] = [
	{
		label: 'Barbarian',
		value: 'barbarian'
	},
	{
		label: 'Bard',
		value: 'bard'
	},
	{
		label: 'Cleric',
		value: 'cleric'
	},
	{
		label: 'Druid',
		value: 'druid'
	},
	{
		label: 'Fighter',
		value: 'fighter'
	},
	{
		label: 'Monk',
		value: 'monk'
	},
	{
		label: 'Paladin',
		value: 'paladin'
	},
	{
		label: 'Ranger',
		value: 'ranger'
	},
	{
		label: 'Rogue',
		value: 'rogue'
	},
	{
		label: 'Sorcerer',
		value: 'sorcerer'
	},
	{
		label: 'Warlock',
		value: 'warlock'
	},
	{
		label: 'Wizard',
		value: 'wizard'
	}
];

export const ABILITIES = [
	'strength',
	'dexterity',
	'constitution',
	'intelligence',
	'wisdom',
	'charisma'
] as const;
