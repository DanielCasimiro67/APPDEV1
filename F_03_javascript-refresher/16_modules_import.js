import greet from "./15_modules_export.js";
import { profileInfo } from "./15_modules_export.js";

console.log(greet());
console.log(`Profile: ${profileInfo.name}, ${profileInfo.course}`);
