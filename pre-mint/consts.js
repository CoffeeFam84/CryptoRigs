const traits = [
	{
		type: 'CASE',
		data: [
			{
				name: 'CASE BIG TOWER ULTRA',
				amount: 1
			}, {
				name: 'CASE BIG TOWER BLUE',
				amount: 50
			}, {
				name: 'CASE MID TOWER GOLD',
				amount: 5
			}, {
				name: 'CASE MID TOWER GREEN',
				amount: 1500
			}, {
				name: 'CASE MINI TOWER GOLD',
				amount: 10
			}, {
				name: 'CASE MINI TOWER SILVER',
				amount: 8434
			}
		]
	},
	{
		type: 'CPU',
		data: [{
			name: 'XEON W-3375 ULTRA',
			amount: 1
		},{
			name: 'AMD TR 3990X ULTRA',
			amount: 1
		}, {
			name: 'INTEL 11900K ULTRA',
			amount: 1
		}, {
			name: 'INTEL 11900K BLUE',
			amount: 20
		}, {
			name: 'INTEL 11700K GOLDEN',
			amount: 2
		}, {
			name: 'INTEL 11700K GREEN',
			amount: 100
		}, {
			name: 'INTEL 11600K GOLDEN',
			amount: 3
		}, {
			name: 'INTEL 11600K GREEN',
			amount: 900
		}, {
			name: 'INTEL 11500 GOLDEN',
			amount: 5
		}, {
			name: 'INTEL 11500 SILVER',
			amount: 3968
		}, {
			name: 'AMD 5950X ULTRA',
			amount: 1
		}, {
			name: 'AMD 5950X BLUE',
			amount: 20
		}, {
			name: 'AMD 5900X GOLDEN',
			amount: 2
		}, {
			name: 'AMD 5900X GREEN',
			amount: 100
		}, {
			name: 'AMD 5800X GOLDEN',
			amount: 3
		}, {
			name: 'AMD 5800X GREEN',
			amount: 900
		}, {
			name: 'AMD 5600X GOLDEN',
			amount: 5
		}, {
			name: 'AMD 5600X SILVER',
			amount: 3968
		}]
	}, 
	{
		type: 'PSU',
		data: [
			{
				name: 'PSU 5000W ULTRA',
				amount: 1
			}, {
				name: 'PSU 5000W BLUE',
				amount: 50
			}, {
				name: 'PSU 800W GOLDEN',
				amount: 5
			}, {
				name: 'PSU 800W GREEN',
				amount: 500
			}, {
				name: 'PSU 500W GOLDEN',
				amount: 10
			}, {
				name: 'PSU 500W GREEN',
				amount: 1000
			}, {
				name: 'PSU 300W GOLDEN',
				amount: 15
			}, {
				name: 'PSU 300W SILVER',
				amount: 8419
			}
		]
	},
	{
		type: 'RAM',
		data: [
			{
				name: 'SIZE 32 SPEED 5333 ULTRA',
				amount: 1
			},
			{
				name: 'SIZE 16 SPEED 5333 NORMAL',
				amount: 10
			},
			{
				name: 'SIZE 32 SPEED 4600 GOLDEN',
				amount: 2
			},
			{
				name: 'SIZE 16 SPEED 4600 GREEN',
				amount: 50
			},
			{
				name: 'SIZE 32 SPEED 3800 GOLDEN',
				amount: 5
			},
			{
				name: 'SIZE 16 SPEED 3800 GREEN',
				amount: 500
			},
			{
				name: 'SIZE 32 SPEED 3200 GOLDEN',
				amount: 10
			},
			{
				name: 'SIZE 16 SPEED 3200 GREEN',
				amount: 1000
			},
			{
				name: 'SIZE 32 SPEED 2666 GOLDEN',
				amount: 15
			},
			{
				name: 'SIZE 16 SPEED 2666 SILVER',
				amount: 8407
			}
		]
	},
	{
		type: 'DRIVE',
		data: [
			{
				name: 'nVME ULTRA',
				amount: 1
			}, {
				name: 'nVME BLUE',
				amount: 50
			}, {
				name: 'SSD GOLDEN',
				amount: 5
			}, {
				name: 'SSD GREEN',
				amount: 500
			}, {
				name: 'HDD GOLDEN',
				amount: 10
			}, {
				name: 'HDD GREEN',
				amount: 1000
			}, {
				name: 'FLOPPY GOLDEN',
				amount: 15
			}, {
				name: 'FLOPPY SILVER',
				amount: 8419
			}
		]
	},
	{
		type: 'GPU',
		data: [{
			name: 'RTX 3090 ULTRA',
			amount: 1
		}, {
			name: 'RTX 3090 BLUE',
			amount: 20
		}, {
			name: 'RTX 3080 GOLDEN',
			amount: 2
		}, {
			name: 'RTX 3080 GREEN',
			amount: 100
		}, {
			name: 'RTX 3070 GOLDEN',
			amount: 3
		}, {
			name: 'RTX 3070 GREEN',
			amount: 900
		}, {
			name: 'RTX 3060 GOLDEN',
			amount: 5
		}, {
			name: 'RTX 3060 SILVER',
			amount: 3969
		}, {
			name: 'RX 6900-XT ULTRA',
			amount: 1
		}, {
			name: 'RX 6900-XT BLUE',
			amount: 20
		}, {
			name: 'RX 6800-XT GOLDEN',
			amount: 2
		}, {
			name: 'RX 6800-XT',
			amount: 100
		}, {
			name: 'RX 6700-XT GOLDEN',
			amount: 3
		}, {
			name: 'RX 6700-XT',
			amount: 900
		}, {
			name: 'RADEON-VII GOLDEN',
			amount: 5
		}, {
			name: 'RADEON - VII SILVER',
			amount: 3969
		}]
	}
]

module.exports = {
	traits: traits
}