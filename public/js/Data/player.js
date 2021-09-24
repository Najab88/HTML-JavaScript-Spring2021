playerData ={
	info:{
		src:`images/Brown_Naja_spritesheet.png`
	},
	states:{
    	idle:
		{
			fps:15,
			cycle:true,
			frames:[
				{ width: 256, height: 219, startX: 517, startY: 1 },
				{ width: 256, height: 219, startX: 775, startY: 1 },
				{ width: 256, height: 219, startX: 517, startY: 259 },
				{ width: 256, height: 219, startX: 775, startY: 259 },
				{ width: 256, height: 219, startX: 1, startY: 517 },
				{ width: 256, height: 219, startX: 259, startY: 517 },
				{ width: 256, height: 219, startX: 517, startY: 517 },
				{ width: 256, height: 219, startX: 775, startY: 517 },
				{ width: 256, height: 219, startX: 1, startY: 775 },
				{ width: 256, height: 219, startX: 259, startY: 775 },
				{ width: 256, height: 219, startX: 1, startY: 259 },
				{ width: 256, height: 219, startX: 259, startY: 259 }
			]
		},
		walk:
		{
			fps:15,
			cycle:true,
			frames:[
				{ width: 256, height: 219, startX: 1033, startY: 517 },
				{ width: 256, height: 219, startX: 1033, startY: 775 },
				{ width: 256, height: 219, startX: 1, startY: 1033 }
				]
		},
		jump:
		{
			fps:15,
			cycle:false,
			frames:[
				{ width: 256, height: 219, startX: 517, startY: 775 },
				{ width: 256, height: 219, startX: 775, startY: 775 }
				]
		},
		crouch:
		{
			fps:15,
			cycle:false,
			frames:[
				{ width: 256, height: 219, startX: 1, startY: 1 },
				{ width: 256, height: 219, startX: 259, startY: 1 }
					
				]
		},
		attack:
		{
			fps:15,
			cycle:false,
			frames:[
				{ width: 256, height: 219, startX: 1033, startY: 1 },
				{ width: 256, height: 219, startX: 1033, startY: 259 }
				
				]
		}

	}
		
}