$(document).ready(function(){

	let wall_data = {
		number_of_rows: 10,  // max horizontal number of hooks - required
		number_of_columns: 10,   // max verticle number of hooks - required
		height_of_row: 50,   // height of row - optional
		//background_color: '#ed4a4a',  // optional
		background_image: 'img/bg.jpg',  // optional
	}
	
	let hooks = [
		{
			row: 1,   // which row want to create hook - top to bottom numbers - required
			column: 1,   // which row column to create hook - left to right numbers - required
			hook_image: getRandomHook(),   // any custom image - optional
			hook_width: '20',  // custom hook width in number - optional
			hook_height: '20' // custom hook height in number - optional
		},
		{
			row: 2,
			column: 2,
			hook_image: getRandomHook()
		},
		{
			row: 3,
			column: 2,
			hook_image: getRandomHook()
		},
		{
			row: 3,
			column: 4,
			hook_width: '10',
			hook_height: '10',
			hook_image: getRandomHook()
		},
		{
			row: 4,
			column: 4,
			hook_image: 'blue-circle.png',
			hook_width: '40',
			hook_height: '40',
			hook_image: getRandomHook()
		},
		{
			row: 4,
			column: 1,
			hook_image: getRandomHook()
		},
		{
			row: 5,
			column: 3,
			hook_width: '10',
			hook_height: '10',
			hook_image: getRandomHook()
		},
		{
			row: 6,
			column: 5,
			hook_image: getRandomHook()
		},
		{
			row: 6,
			column: 2,
			hook_image: getRandomHook()
		},
		{
			row: 7,
			column: 3,
			hook_image: getRandomHook()
		},
		{
			row: 8,
			column: 2,
			hook_image: getRandomHook()
		},
		{
			row: 9,
			column: 1,
			hook_image: getRandomHook()
		},
		{
			row: 9,
			column: 4,
			hook_image: getRandomHook()
		},
		{
			row: 10,
			column: 3,
			hook_image: getRandomHook()
		},
	];
	
	let route_data = {    // lh: left hand, rh: right land, lf: left feet, rf: right feet
		'route_name': 'Route 1',
		'steps': [
			{
				rh: {
					row: 10,
					column: 3
				}
			},
			{
				lh:{
					row: 9,
					column: 1
				},
				rh: {
					row: 10,
					column: 3
				}
			},
			{
				lh:{
					row: 9,
					column: 1
				},
				rh: {
					row: 8,
					column: 2
				}
			},
			{
				lh:{
					row: 8,
					column: 2
				},
				rh: {
					row: 8,
					column: 2
				}
			},
			{
				lh:{
					row: 8,
					column: 2
				},
				rh: {
					row: 7,
					column: 3
				}
			},
			{
				lh:{
					row: 7,
					column: 3
				},
				rh: {
					row: 7,
					column: 3
				},
				lf:{
					row: 10,
					column: 3
				},
				rf:{
					row: 9,
					column: 4
				}
			},
			{
				lh:{
					row: 7,
					column: 3
				},
				rh: {
					row: 6,
					column: 5
				},
				lf:{
					row: 10,
					column: 3
				},
				rf:{
					row: 9,
					column: 4
				}
			},
			{
				lh:{
					row: 5,
					column: 3
				},
				rh: {
					row: 6,
					column: 5
				},
				lf:{
					row: 8,
					column: 2
				},
				rf:{
					row: 9,
					column: 4
				}
			},
			{
				lh:{
					row: 5,
					column: 3
				},
				rh: {
					row: 3,
					column: 4
				},
				lf:{
					row: 8,
					column: 2
				},
				rf:{
					row: 7,
					column: 3
				}
			},
			{
				lh:{
					row: 3,
					column: 2
				},
				rh: {
					row: 3,
					column: 2
				},
				lf:{
					row: 6,
					column: 2
				},
				rf:{
					row: 7,
					column: 3
				}
			},
			{
				lh:{
					row: 3,
					column: 2
				},
				rh: {
					row: 2,
					column: 2
				},
				lf:{
					row: 6,
					column: 2
				},
				rf:{
					row: 5,
					column: 3
				}
			},
			{
				lh:{
					row: 1,
					column: 1
				},
				rh: {
					row: 2,
					column: 2
				},
				lf:{
					row: 4,
					column: 1
				},
				rf:{
					row: 5,
					column: 3
				}
			},
		]
	};
					
	// create wall
	$wall = $("#wall-climbing").createWall(wall_data);
					
	// create hooks
	$wall.addHooks(hooks);
	
	//$wall.addRoute(route_data);
	
});

function getRandomHook(){
	let fn = 'hooks/';
	let array = ['hook1.png', 'hook2.png', 'hook3.png', 'hook4.png'];
	return fn+array[Math.floor(Math.random() * array.length)];
}