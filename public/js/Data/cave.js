var x = false;
var caveData = {
	info: {
		//front cave
		layout: [
			[x,x, x, x, x, x, x, x, x, x, x, x],
			[0,2, 5, 8, 11, 14, 18, 21, x, x, x, x],
			[1, 3, 6, 9, 12, 15, 19, 22, x, x, x],
			[x, 4, 7, 10, 13, 17, 20, 23, x, x, x],
			[x, x, x, x, x, x, x, x,x,x,x,]

		],
		src: `images/treefbg.png`,
	},
	states:
		[

			{//0
				fps: 1,
				cycle: false,
				frames: [
					{ width: 128, height: 128, startX: 0, startY: 0 },


				]
			},
			{//1
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 128, startY: 0 }]
			},
			{//2
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 256, startY: 0 }]
			},
			{//3
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 384, startY: 0 }]
			},
			{//4
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 512, startY: 0 }]
			},
			{//5
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 640, startY: 0 }]
					 //{ width: 128, height: 128, startX: 2943, startY: 0 }
			
				
			},
			{//6
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 768, startY: 0 }]
			},
			{//7
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 896, startY: 0 }]
			},
			{//8
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1024, startY: 0 }]
			},
			{//9
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1152, startY: 0 }]
			},
			{//10
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1280, startY: 0 }]
			},
			{//11
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1408, startY: 0 }]
			},
			{//12
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1536, startY: 0 }]
			},
			{//13
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1664, startY: 0 }]
			},
			{//14
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1792, startY: 0 }]
			},
			{//15
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1920, startY: 0 }]
			},
			{//16
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1920, startY: 0 }]//,
					//{ width: 128, height: 128, startX: 2816, startY: 0 }]
					
			},
			{//17
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 2048, startY: 0 }]
			},
			{//18
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 2176, startY: 0 }]
			},
			{//19
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 2304, startY: 0 }]
			},
			{//20
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 2432, startY: 0 }]
			},
			{//21
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 2560, startY: 0 }]
			},
			{//22
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 2688, startY: 0 }]
			},
			{//23
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 2816, startY: 0 }]
			},
			{//24
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 2944, startY: 0 }]
			}




		]
}
var caveBackData = {
	info: {
		//back cave
		layout: [


			[x,x, x, x, x, x, x, x, x, x, x, x],
			[x,0, 3, 6, 9, 12, 3, 6, 9, 12, 15, 19,],
			[x,1, 4, 7, 10, 13, 4, 7, 10, 13, 17, 20,],
			[x,2, 5, 8, 11, 14, 5, 8, 11,14,18,x,]


		],
		src: `images/treebg.png`,
	},
	states:
		[
			{//0
				fps: 1,
				cycle: false,
				frames: [
					{ width: 128, height: 128, startX: 0, startY: 0 },


				]
			},
			{//1
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 128, startY: 0 }]
			},
			{//2
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 256, startY: 0 }]
			},
			{//3
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 384, startY: 0 }]
			},
			{//4
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 512, startY: 0 }]
			},
			{//5 
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 640, startY: 0 }]
			},
			{//6
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 768, startY: 0 }]
			},
			{//7
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 896, startY: 0 }]
			},
			{//8 eyes
				fps: 100,
				cycle: true,
				frames: [{ width: 128, height: 128, startX: 1024, startY: 0 },
					{ width: 128, height: 128, startX: 2688, startY: 0 }]
			},
			{//9
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1152, startY: 0 }]
			},
			{//10 eyes
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1280, startY: 0 }]
			},
			{//11
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1408, startY: 0 }]
			},
			{//12
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1536, startY: 0 }]
			},
			{//13
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1664, startY: 0 }]
			},
			{//14
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1792, startY: 0 }]
			},
			{//15
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1920, startY: 0 }]
			},
			{//16
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1920, startY: 0 }]
			},
			{//17
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 2048, startY: 0 }]
			},
			{//18
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 2176, startY: 0 }]
			},
			{//19
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 2304, startY: 0 }]
			},
			{//20
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 2432, startY: 0 }]
			},
			{//20
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 2560, startY: 0 }]
			},
			{//21
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 2560, startY: 0 }]
			},
			{//22
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 2688, startY: 0 }]
			}
			
		]
}



var caveHitData = {
	info: {
		layout: [


			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
			[x, 0, 0, 0, 0, 0, 0, x, x, x,],
			[x, x, x, x, x, x, x, x, x, x,],
			[x, x, x, x, x, x, x, x, x, x,]



		],
		src: `images/treefbg.png`
	},
	states:
		[
			{
				fps: 1,
				cycle: false,
				frames: [
					{ width: 128, height: 128, startX: 0, startY: 0 },


				]
			}

		]
}