- Add pictures in `nhu-reinis-wedding\src\images` to use.
- Example syntax to import and use pictures in `nhu-reinis-wedding\src\components\WithFamily.js` and `nhu-reinis-wedding\src\components\WithFriends.js`:
    1. Import using `import intro_pic from "../images/intro_pic.jpg";`
    2. To use, change the `src` attribute in the `img` tag to the appropriate name. E.g for the above import, the syntax would be `<img className="intro-img" src={intro_pic} alt="" />`
- `WithFamily` is for pictures of the bride & groom (and Kick).
- `WithFriends` is for pictures of the bride & groom with friends.

RUN IN DEV MODE
- In terminal:
    1. npm start

DEPLOYMEMT
- In terminal:
    1. git add .
    2. git commit -m "Meaning message"
    3. git push origin master
    4. npm run deploy
