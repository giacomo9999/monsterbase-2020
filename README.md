09 Jan- Changing the CSS Library from Bootstrap to Semantic in the previous version of MonsterBase proved WAY beyond my ability, so I am starting with a new CRA app and rebuilding the React components using Semantic UI.

To anyone curious as to why I would want to do that: the elements in the Semantic UI are much more "polished" design-wise than what is easily available in Bootstrap. Using Semantic will give me a much better-looking result with far less work than Bootstrap would (at least at my current skill level.) 

So then, right now I need to:
1. Rebuild the existing React components using Semantic
2. Copy all the server-side stuff into the main directory.

10 Jan - All the basic blocks are in place.  Getting ready to start shfting to Semantic.

11 Jan - Moved some components to Semantic.

12 Jan - Everything seems to be going smoothly. Building out React components for the front end.

13 Feb - After a month of coding sidequests and non-coding stuff, I am back on this and adding back-end and database functionality. For whatever reason, neither Postman nor Chrome can reach any endpoints with CORS enabled...I have no idea why. (EDIT: Line 21 in server.js was "app.use(cors)" instead of "app.use(cors());". I am an idiot.)

15 Feb - Minimal back-end and database stuff set up and working OK.  Successfully deployed at https://monsterbase-190215.herokuapp.com/ . Note to anyone who might actually go there: there's no real functionality yet.

EDIT: Spoke too soon when I said "Successfully deployed." React keeps trying to connect to localhost:4000 instead of the actual Express app, and keeps getting rejected.  

3:37 PM. I'm deleting the process PORT variable from the Heroku dashboard...will that work? NO IT DOES NOT.

3:38 PM. Making sure that proxy value in package.json matches the port that the server is running on. (As per https://medium.freecodecamp.org/how-to-deploy-a-react-app-with-an-express-server-on-heroku-32244fe5a250)
