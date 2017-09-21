import path from "path";
const config = new Map();
config.set("port", 3000);
config.set("staticDir",path.join(__dirname, '..', 'build'));
config.set("viewsDir", path.join(__dirname,'..', 'build'))	;

export default config;