const defaults = {
	'height_of_row': '100px',
	'hook_image': 'img/default-hook.png',
	'hook_width': '20px',
	'hook_height': '20px',
	'left_hand_image': 'img/hl.png',
	'right_hand_image': 'img/hr.png',
	'left_feet_image': 'img/fr.png',
	'right_feet_image': 'img/fl.png',
	'hand_width': '20px',
	'feet_width': '16px',
	'add_hook_text': 'Add Hooks',
	'adding_hook_text': 'Stop Adding Hooks',
	'add_route_text': 'Add Route',
	'adding_route_text': 'Stop Adding Route',
	'hook_helping_text': '*Click on cell to create hook'
}
let is_creating_hook = 0;
let is_creating_route = 0;
let $selected_wall = '';
let global_routes = [];
let global_hooks = [];
let hooks_count = 0;
let hook_refs = [];
let global_routes_t = [];

$.fn.createWall = function(p){
	// this is object to selected div
	$this = this;
		
	// checks
	if(p == null){
		console.error("Invalid wall parameters");
		return;
	}		
	
	if("number_of_columns" in p && "number_of_rows" in p){
		
		const height_of_row = ("height_of_row" in p && Number.isInteger(p.height_of_row)) ? p.height_of_row+'px' : defaults.height_of_row;
		
		$this.append('<div class="climbify-container"></div>');
		
		$parent = $this.find('.climbify-container');
		
		let html = '';
		html += '<div class="wall">';
		
		for(let row=0; row<p.number_of_rows; row++){
			let t_r = Number(row)+Number(1);
			
			html += '<div class="row" data-row="'+t_r+'" style="height:'+height_of_row+'">';
			
			for(let col=0; col<p.number_of_columns; col++){
				let t_c = Number(col)+Number(1);
				
				html += '<div class="column" data-has-hook="0" data-row="'+t_r+'" data-col="'+t_c+'">';
				
				html += '</div>';
				
			}
			
			html += '</div>';
			
		}
		
		html += '</div>';
		
		$parent.html(html);
		
		if("background_color" in p){
			$parent.find('.wall').css('background-color', p.background_color);
		}
		
		if("background_image" in p){
			$parent.find('.wall').css('background-image', 'url('+p.background_image+')');
		}
		
		// create action buttons
		let action_buttons_html = '';
		
		action_buttons_html = 
			'<div class="action-buttons">'+
				'<button class="add-hook">'+defaults.add_hook_text+'</button>'+
				'<button class="add-route">'+defaults.add_route_text+'</button>'+
				'<p class="hook-helping-text">'+defaults.hook_helping_text+'</p>'+
				'<div class="add-route-form">'+
					'<input type="text" class="route-name" placeholder="Route Name">'+
					'<div class="route-steps">'+
					'</div>'+
					'<button type="button" class="open-route-step-button">Add Step</button>'+
					'<button type="button" class="create-route">Create Route</button>'+
				'</div>'+
			'</div>';
			
		$parent.append(action_buttons_html);
		
		return $parent;
		
	}
	else{
		console.error("Invalid wall parameters");
		return;
	}
	
};


$.fn.addHooks = function(hooks){
	$wall = this;	
	createHooksMechanism($wall, hooks);
};

$.fn.addRoute = function(route_data){
	$wall = this;
	createRoutesMechanism($wall, route_data);
};

function createHooksMechanism($wall, hooks){
	
	if(hooks == null){
		console.error("Invalid hook parameters");
		return;
	}
	
	hooks.forEach(function(hook,i){
		let hook_image = ('hook_image' in hook) ? hook.hook_image : defaults.hook_image;
		let hook_width = ('hook_width' in hook) ? hook.hook_width+'px' : defaults.hook_width;
		let hook_height = ('hook_height' in hook) ? hook.hook_height+'px' : defaults.hook_height;
		
		if("row" in hook && "column" in hook && hook.row>0 && hook.column>0){
						
			$div = $wall.find('.row .column[data-row='+hook.row+'][data-col='+hook.column+']');
			
			let html = '';
			html += '<div class="hook" style="width:'+hook_width+';height:'+hook_height+';background-image:url('+hook_image+');"><div class="hook-number" data-hook-name="h'+hooks_count+'">h'+hooks_count+'</div></div>';
			
			$div.html(html);
			$div.attr('data-has-hook', 1);
			
			// push in global hooks
			let d = {
				row: hook.row,
				column: hook.column,
				hook_image: hook_image,
				hook_width: hook_width,
				hook_height: hook_height,
				hook_name: 'h'+hooks_count,
			}
			
			global_hooks.push(d);
			
			hook_refs['h'+hooks_count] = { row: hook.row, column: hook.column };
			
			hooks_count++;
			
		}
		else{
			console.error("Invalid hook parameters");
			return;
		}
		
	});
	
}

function createRoutesMechanism($wall, route_data){
	
	if(route_data == null){
		console.error("Invalid route");
		return;
	}
	
	let steps = [];
	let route = {};
	
	steps = route_data.steps;
	route.id = Math.floor((Math.random()*999999999)+99999999);
	route.number_of_steps = route_data.steps.length;
	route.name = route_data.route_name;
	route.steps = steps;
	
	route_data.steps.forEach(function(step,i){
		
		let index = Number(i)+Number(1);
		
		let rh = ('rh' in step) ? step.rh : null;
		let lh = ('lh' in step) ? step.lh : null;
		let rf = ('rf' in step) ? step.rf : null;
		let lf = ('lf' in step) ? step.lf : null;
		
		if(rh != null){
			let row = rh.row;
			let column = rh.column;
			$div = $wall.find('.row .column[data-row='+row+'][data-col='+column+']');
			$div.append('<div class="step right-hand" data-step="'+index+'" data-route-id="'+route.id+'"><img src="'+defaults.right_hand_image+'" width="'+defaults.hand_width+'"></div>');
		}
		
		if(lh != null){
			let row = lh.row;
			let column = lh.column;
			$div = $wall.find('.row .column[data-row='+row+'][data-col='+column+']');
			$div.append('<div class="step left-hand" data-step="'+index+'" data-route-id="'+route.id+'"><img src="'+defaults.left_hand_image+'" width="'+defaults.hand_width+'"></div>');
		}
		
		if(rf != null){
			let row = rf.row;
			let column = rf.column;
			$div = $wall.find('.row .column[data-row='+row+'][data-col='+column+']');
			$div.append('<div class="step right-feet" data-step="'+index+'" data-route-id="'+route.id+'"><img src="'+defaults.right_feet_image+'" width="'+defaults.feet_width+'"></div>');
		}
		
		if(lf != null){
			let row = lf.row;
			let column = lf.column;
			$div = $wall.find('.row .column[data-row='+row+'][data-col='+column+']');
			$div.append('<div class="step left-feet" data-step="'+index+'" data-route-id="'+route.id+'"><img src="'+defaults.left_feet_image+'" width="'+defaults.feet_width+'"></div>');
		}		
		
	});
	
	// create/append routes dropdowns html
	let html = '';
	if(!$wall.find('.routes-selection').length){
		html +=
			'<div class="routes-selection">'+
				'<div class="routes-dropdown">'+
					'<h3>Routes</h3>'+
					'<select class="routes-dropdown">'+
						
						'<option value="">Select Route</option>'+
						'<option value="'+route.id+'">'+route.name+'</option>'+
					'</select>'+
				'</div>'+
				'<div class="routes-steps">'+
				'</div>'+
			'</div>';
		$wall.append(html);
	}
	else{
		html = '<option value="'+route.id+'">'+route.name+'</option>';
		$wall.find('.routes-selection select.routes-dropdown').append(html);
	}
	
	global_routes_t[route.id] = route;
	global_routes.push(route);
	
	return route;
	
}

$(document).ready(function(){
	
	$(document).on('change', '.climbify-container .routes-selection .routes-dropdown select', function(){
		$this = $(this);
		$wall = $this.closest('.climbify-container');
		if($this.val().length){
			let steps_html = '';
			for(let i=0;i<global_routes_t[$this.val()].number_of_steps;i++){
				let number = Number(i)+Number(1);
				steps_html += '<div class="single-step" data-step="'+number+'"><span>'+number+'</span></div>';
			}
			$wall.find('.routes-selection .routes-steps').html(steps_html);
		}
	});
	
	$(document).on('click', '.climbify-container .routes-selection .routes-steps .single-step', function(){
		$this = $(this);
		$wall = $this.closest('.climbify-container');
		
		if(!$this.hasClass('selected')){
			const route_id = $wall.find('.routes-selection .routes-dropdown select').val();
			const step_no = $this.data('step');
			
			$wall.find('.wall .row .column .step').hide();
			$wall.find('.wall .row .column .step[data-step='+step_no+'][data-route-id='+route_id+']').show();
			
			$wall.find('.routes-selection .routes-steps .single-step').removeClass('selected');
			$this.addClass('selected');
			
		}
		
	});
	
	$(document).on('click', '.action-buttons .add-hook', function(){
		$this = $(this);
		
		if(is_creating_route == 1){
			alert('Route creation process running. Please stop that first');
			return;
		}
		
		$action_buttons = $this.closest('.action-buttons');
		$climbify_container = $this.closest('.climbify-container');
		
		if(is_creating_hook == 0){
			$this.addClass('selected');
			is_creating_hook = 1;
			$this.html(defaults.adding_hook_text);
			$action_buttons.find('.hook-helping-text').show();
			$climbify_container.find('.wall').addClass('visible-grids');
		}
		else{
			$this.removeClass('selected');
			is_creating_hook = 0;
			$this.html(defaults.add_hook_text);
			$action_buttons.find('.hook-helping-text').hide();
			$climbify_container.find('.wall').removeClass('visible-grids');
		}
		
	});
	
	$(document).on('click', '.action-buttons .add-route', function(){
		$this = $(this);
		
		if(is_creating_hook == 1){
			alert('Hook creation process running. Please stop that first');
			return;
		}
		
		$action_buttons = $this.closest('.action-buttons');
		$climbify_container = $this.closest('.climbify-container');
		
		if(is_creating_route == 0){
			$this.addClass('selected');
			is_creating_route = 1;
			$this.html(defaults.adding_route_text);
			$climbify_container.find('.wall').addClass('visible-grids');
			$selected_wall = $climbify_container;
			$climbify_container.find('.wall .row .column .hook').addClass('no-bg');
			$climbify_container.find('.wall .row .column .hook .hook-number').addClass('show');
			$action_buttons.find('.add-route-form').show();
		}
		else{
			$this.removeClass('selected');
			is_creating_route = 0;
			$this.html(defaults.add_route_text);
			$climbify_container.find('.wall').removeClass('visible-grids');
			$climbify_container.find('.wall .row .column .hook').removeClass('no-bg');
			$climbify_container.find('.wall .row .column .hook .hook-number').removeClass('show');
			$action_buttons.find('.add-route-form').hide();
		}
		
	});
	
	$(document).on('click', '.climbify-container .wall.visible-grids .row .column', function(){
		
		$column = $(this);
		
		if(is_creating_hook == 1 && $column.attr('data-has-hook') == 0){
			
			const d = [{
				row: $column.data('row'),
				column: $column.data('col')
			}];
						
			createHooksMechanism($wall, d);
			
		}
		
	});
	
	$(document).on('click', '.climbify-container .add-route-form .open-route-step-button', function(){
		
		$this = $(this);
		$form = $this.closest('.add-route-form');
		
		let html = 
			'<div class="route-step">'+
				'<div class="lh">'+
					'<span class="label">Left hand hook</span><input type="text" placeholder="h1">'+
				'</div>'+
				'<div class="rh">'+
					'<span class="label">Right hand hook</span><input type="text" placeholder="h3">'+
				'</div>'+
				'<div class="lf">'+
					'<span class="label">Left feet hook</span><input type="text" placeholder="h1">'+
				'</div>'+
				'<div class="rf">'+
					'<span class="label">Right feet hook</span><input type="text" placeholder="h3">'+
				'</div>'+
			'</div>';
			
		$form.find('.route-steps').append(html);
			
	});
	
	$(document).on('click', '.climbify-container .add-route-form .create-route', function(){
	
		$this = $(this);
		$form = $this.closest('.add-route-form');
		$climbify_container = $this.closest('.climbify-container');
			
		let route_name = $form.find('.route-name').val();
		let steps = [];
		if(route_name.length){
			
			$form.find('.route-steps .route-step').each(function(){
				$step = $(this);
				let o = {}
				if($step.find('.lh input').val().length){
					let val = $step.find('.lh input').val();
					console.log(val);
					let a = {
						row: hook_refs[val].row,
						column: hook_refs[val].column
					}
					o.lh = a;
				}
				if($step.find('.rh input').val().length){
					let val = $step.find('.rh input').val();
					let a = {
						row: hook_refs[val].row,
						column: hook_refs[val].column
					}
					o.rh = a;
				}
				if($step.find('.lf input').val().length){
					let val = $step.find('.lf input').val();
					let a = {
						row: hook_refs[val].row,
						column: hook_refs[val].column
					}
					o.lf = a;
				}
				if($step.find('.rf input').val().length){
					let val = $step.find('.rf input').val();
					let a = {
						row: hook_refs[val].row,
						column: hook_refs[val].column
					}
					o.rf = a;
				}
				
				steps.push(o);
				
			});
						
			// route final data
			const d = {
				'route_name': route_name,
				'steps': steps
			}
			
			createRoutesMechanism($climbify_container, d);
			
			// clear form
			$form.find('.route-steps').html('');
			$form.find('.route-name').val('');
			$climbify_container.find('.action-buttons .add-route').click();
						
		}
		
		
	
	});
	
});