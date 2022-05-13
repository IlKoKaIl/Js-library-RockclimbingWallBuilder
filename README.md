# js-library-kokamihi
Getting stated:
You will need jquery for this library to work, I've included download links in the library code aswell as the documentation page.
Then you will need include CSS and JS files of plugin Which are included in the zip file in the repo

wallClimbify.css
WallClimbify.js

both of which I've added in the zipped package (wallclimbify-packaged.zip), along with run-wallclimbify.js which 
provides some examples for developers to use. But the only two required files are the two listed above.

Documentation can be found in pub/documentaion/index.html in the repo
or you can open the heroku page and there is a link to the documentation there aswell

To run the landing page and the rest of the content in this repo.
After cloning/pulling all the files from the repo. Open terminal and cd till you are in the js-library-kokamihi folder. Once here run node server.js
it Will then run the application at localhost:3000 where you can view it.
Or you can use the heroku deployed app here https://stormy-sands-39576.herokuapp.com/


Changes since alpha + ta/peer review comments

TA comment:
great way to present documentation!
I really think you've presented this library well - the use case is quite specific and the example is splendid!

peer review comment (on potential ways to improve for final release):
My only concern is that the core feature, which is updating the route, may rely too heavily on styling of the element position as opposed to DOM manipulation.
As for features that would increase complexity and add DOM manipulation, I think it would be nice to be able to have a user customizable wall for users to plan betas for walls not provided by the developer. I understand that you are having trouble updating holds dynamically so I don’t know how feasible this suggestion will be, but it will certainly be a cool additional if you can implement it.

Following this the main change I was working to implement since the alpha was the ability to create walls and routes through DOM, UI interactions rather than have it be completely done through scripts in html/js and then have the only user interaction be the ability to view routes through their steps afterwards. This is the main change I've made alongide some other minor ones for the final release as per the comments provided by the ta and my peer.
