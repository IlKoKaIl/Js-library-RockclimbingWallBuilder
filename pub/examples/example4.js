$(document).ready(function () {
    let wall_data = {
      number_of_rows: 10, // max horizontal number of hooks - required
      number_of_columns: 10, // max verticle number of hooks - required
      height_of_row: 50, // height of row - optional
      //background_color: '#ed4a4a',  // optional
      background_image: "bg.jpg", // optional
    };
  
    let hooks = [
      {
        row: 1, // which row want to create hook - top to bottom numbers - required
        column: 1, // which row column to create hook - left to right numbers - required
        hook_image: getRandomHookRed(), // any custom image - optional
        hook_width: "20", // custom hook width in number - optional
        hook_height: "20", // custom hook height in number - optional
      },
      {
        row: 2,
        column: 2,
        hook_image: getRandomHookRed(),
      },
      {
        row: 3,
        column: 2,
        hook_image: getRandomHookRed(),
      },
      {
        row: 3,
        column: 4,
        hook_width: "10",
        hook_height: "10",
        hook_image: getRandomHookRed(),
      },
      {
        row: 4,
        column: 4,
        hook_width: "40",
        hook_height: "40",
        hook_image: getRandomHookRed(),
      },
      {
        row: 4,
        column: 1,
        hook_image: getRandomHookRed(),
      },
      {
        row: 5,
        column: 3,
        hook_width: "10",
        hook_height: "10",
        hook_image: getRandomHookRed(),
      },
      {
        row: 6,
        column: 5,
        hook_image: getRandomHookRed(),
      },
      {
        row: 6,
        column: 2,
        hook_image: getRandomHookRed(),
      },
      {
        row: 7,
        column: 3,
        hook_image: getRandomHookRed(),
      },
      {
        row: 8,
        column: 2,
        hook_image: getRandomHookRed(),
      },
      {
        row: 9,
        column: 1,
        hook_image: getRandomHookRed(),
      },
      {
        row: 9,
        column: 4,
        hook_image: getRandomHookRed(),
      },
      {
        row: 10,
        column: 3,
        hook_image: getRandomHookRed(),
      },
      // Blue route from this point onwards
      {
        row: 10,
        column: 7,
        hook_image: getRandomHookBlue(),
      },
      {
        row: 9,
        column: 9,
        hook_image: getRandomHookBlue(),
      },
      {
        row: 8,
        column: 8,
        hook_image: getRandomHookBlue(),
      },
      {
        row: 7,
        column: 7,
        hook_image: getRandomHookBlue(),
      },
      {
        row: 6,
        column: 10,
        hook_image: getRandomHookBlue(),
      },
      {
        row: 5,
        column: 9,
        hook_image: getRandomHookBlue(),
      },
      {
        row: 5,
        column: 7,
        hook_image: getRandomHookBlue(),
      },
      {
        row: 3,
        column: 8,
        hook_image: getRandomHookBlue(),
      },
      {
        row: 1,
        column: 9,
        hook_image: getRandomHookBlue(),
      },
    ];
  
    let route_data_2 = {
      route_name: "Route 2",
      steps: [
        {
          rh: {
            row: 7,
            column: 7,
          },
  
          lh: {
            row: 7,
            column: 7,
          },
        },
        {
          lh: {
            row: 5,
            column: 7,
          },
  
          rh: {
            row: 5,
            column: 9,
          },
  
          rf: {
            row: 8,
            column: 8,
          },
        },
        {
          lh: {
            row: 3,
            column: 8,
          },
  
          rh: {
            row: 5,
            column: 9,
          },
  
          rf: {
            row: 8,
            column: 8,
          },
          lf: {
            row: 7,
            column: 7,
          },
        },
        {
          lh: {
            row: 3,
            column: 8,
          },
  
          rh: {
            row: 1,
            column: 9,
          },
  
          rf: {
            row: 8,
            column: 8,
          },
          lf: {
            row: 7,
            column: 7,
          },
        },
        {
          lh: {
            row: 1,
            column: 9,
          },
  
          rh: {
            row: 1,
            column: 9,
          },
  
          rf: {
            row: 6,
            column: 10,
          },
          lf: {
            row: 5,
            column: 7,
          },
        },
      ],
    };
    let route_data_1 = {
      // lh: left hand, rh: right land, lf: left feet, rf: right feet
      route_name: "Route 1",
      steps: [
        {
          rh: {
            row: 10,
            column: 3,
          },
        },
        {
          lh: {
            row: 9,
            column: 1,
          },
          rh: {
            row: 10,
            column: 3,
          },
        },
        {
          lh: {
            row: 9,
            column: 1,
          },
          rh: {
            row: 8,
            column: 2,
          },
        },
        {
          lh: {
            row: 8,
            column: 2,
          },
          rh: {
            row: 8,
            column: 2,
          },
        },
        {
          lh: {
            row: 8,
            column: 2,
          },
          rh: {
            row: 7,
            column: 3,
          },
        },
        {
          lh: {
            row: 7,
            column: 3,
          },
          rh: {
            row: 7,
            column: 3,
          },
          lf: {
            row: 10,
            column: 3,
          },
          rf: {
            row: 9,
            column: 4,
          },
        },
        {
          lh: {
            row: 7,
            column: 3,
          },
          rh: {
            row: 6,
            column: 5,
          },
          lf: {
            row: 10,
            column: 3,
          },
          rf: {
            row: 9,
            column: 4,
          },
        },
        {
          lh: {
            row: 5,
            column: 3,
          },
          rh: {
            row: 6,
            column: 5,
          },
          lf: {
            row: 8,
            column: 2,
          },
          rf: {
            row: 9,
            column: 4,
          },
        },
        {
          lh: {
            row: 5,
            column: 3,
          },
          rh: {
            row: 3,
            column: 4,
          },
          lf: {
            row: 8,
            column: 2,
          },
          rf: {
            row: 7,
            column: 3,
          },
        },
        {
          lh: {
            row: 3,
            column: 2,
          },
          rh: {
            row: 3,
            column: 2,
          },
          lf: {
            row: 6,
            column: 2,
          },
          rf: {
            row: 7,
            column: 3,
          },
        },
        {
          lh: {
            row: 3,
            column: 2,
          },
          rh: {
            row: 2,
            column: 2,
          },
          lf: {
            row: 6,
            column: 2,
          },
          rf: {
            row: 5,
            column: 3,
          },
        },
        {
          lh: {
            row: 1,
            column: 1,
          },
          rh: {
            row: 1,
            column: 1,
          },
          lf: {
            row: 4,
            column: 1,
          },
          rf: {
            row: 5,
            column: 3,
          },
        },
      ],
    };
  
    // create wall
    $wall = $("#wall-climbing").createWall(wall_data);
  
    // create hooks
    $wall.addHooks(hooks);
  
    let route = $wall.addRoute(route_data_1);
    let route2 = $wall.addRoute(route_data_2);
  });
  
  function getRandomHookRed() {
    let array = [
      "../hooks/1.png",
      "../hooks/2.png",
      "../hooks/3.png",
      "../hooks/4.png",
    ];
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function getRandomHookBlue() {
    let array = [
      "../hooks/hook1.png",
      "../hooks/hook2.png",
      "../hooks/hook3.png",
      "../hooks/hook4.png",
    ];
    return array[Math.floor(Math.random() * array.length)];
  }