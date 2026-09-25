### 00_script_in_html.html
* I learned in this part that there are three ways `<script>` tag works. first is inline, where code is written inside the file and automatically runs in the browser. Second is the external, same as the first but you get it from another file. Third is the module, it waits for the html file to load before it runs the code. 

### 01_base_syntax.js
* I was refreshed about the importance of capitaliation in javascript. Then the valid identifiers: letters, _, and $.  Then the invalid ones: starts with a digit, `first-name` will be read as subtraction, and `class` keyword.

### 02_variables.js
* I was refreshed about different types of variables. `typeof` checks the type of variable, also `let x = 12, y = 4` let you declare different variables in one statement. Last is the difference betweeen `==` and `===`, the first one converts the type first before comparing so it feels like it only checks value, while the second one checks for value and type both without converting anything.

### 03_functions.js
* In this part I was refreshed about the three ways to declare a function. First is `greet` which is a function declaration, second is `square` same as `greet` but it is an arrow function, and third is `calculator` which returns two results. 

### 04_objects.js
* In this part I remember the objects and how `this` works inside them. also I learned objects can still add new properties even though it's already made, like adding hobby after aboutMe was created.

### 05_arrays.js
* I was refreshed here about arrays like push and shift, both of these change the original array. push adds a new item in the end of the array, while shift removes the very first item. also `for...of` for looping through what's left after. then map is different because it don't touch the original array, instead it return a new array with changed values.

### 06_control_structures.js
* I'm refreshed about if/else. also for loop and while loop, for loop is when you know how many times it will loop using init, condition, then increment. while is continuously staying true so you need to add increment inside it or else it's gonna be infinite loop.

### 07_dom.html
* I learned in this par how javascript interacts with the page, like `getElementById` to get element using id then modify. also learned about `prompt()`, it asks input from user to put background color, and setTimeout() for running automatically. 

### 08_essential_features.js
* I learned here how to use map, destructuring, and spread together. map for loop and log each item, destructuring to get properties from object, and spread to create new array with new values without changing the original values.

### 09_tricky_parts.js
* I learned the difference between undefined and null. undefined is when you declare but there's no value, while null is there purposed to be empty. also `this` behaves differently depends if regular function or arrow function is used. Last is differenc of copying an array using `cobyByReference = original`, same array so it will change at the same time, while using `[...original]`, is creating a separate copy.

### 10_let_const.js
* I was refreshed on the difference of let, const, and var. let can be reassigned how many times, in const you can't reassign that's why it will throw error when you try to change it, and var still works but we shouldn't use it because it doesn't have block scope when in there's a lot of code.

### 11_arrow_functions.js
* In this part I learned how normal function can be turned into arrow function, including without parameter or just one parameter, and with implicit return that doesn't need `{}` and return keyword when only one expression will be returned.

### 12_destructuring.js
* I learned about destructuring, how to get value from object using a property name, it doesn't matter what the order. I also learend it can be also used inside a parameter of a function, like `printName({ name })`, to directly use name without using `person.name`.

### 13_spread_rest.js
* In this part I learned about spread and rest. they're both using `...` but different how they works, spread is use to expand existing array or object to new array. while rest is to collect how many arguments to put inside an array using `args`.

### 14_classes_inheritance.js
* I was refreshed about classes, how constructor works to set initial value like `this.name`, and how extends works for class to inherit other methods of other class (Student inherits `sayHello` from Person). 

### 15_modules_export.js
* I learned the difference of default and named export, only one can be declared in default (export default greet), while there can be different named export inside one file (`export { profileInfo }`), it needs to match the name when you import it again.

### 16_modules_import.js
* In this part it was the reverse of export, I learned how to import using default without curly braces but we can change its name. then named import using curly braces, it should match original name. they can be used together in one file.

### 17_logical_operators.js
* I was refreshed about truthy and falsy values. What considered falsy in javascript are false, 0, "", null, undefined, and NaN. But empty array `[]` and empty object `{}` are cosidered truthy even though they're empty. Also `&&` and `||` don't just return true or false, sometimes actual value is what they return, like `"" || "default"` returning the `"default"`.

### 18_ternary_nullish.js
* I new learned about ternary (`condition ? "yes" : "no"`) is shortcut for if/else in one line, also optional chaining `?.` use to not crash if there's no property, it will return undefined safely. And the differen betwee `||` and `??`, when it comes to 0 as value `||` is wrong because it overrides it, but when using `??` will work because it will only change `null` or `undefined`.

### 19_strings_numbers.js
* This part refreshed me on common string methods like trim, it is used to remove extra spaces, split is for spliting into array, `toUpperCase` to change the case, `includes` to check substring, and slice to remove some part using index. also number related like `parseInt`, it only reads digits until the first non-digit character, `toFixed` round numbers but it will return to string, not number. last is `NaN` checking using `Number.isNaN()`

### 20_array_methods.js
* I was refreshed about filter, it returns new array that passed on the condition. find, it returns the first match, not in array. some, it checks if there's one that passed. every, checks if everything passed. then sort, where you need to use spread into copy before sorting, because it change the original.

### 21_errors_json.js
* I learned about try/catch for errors without crashing the program, also `throw new Error()` to purposely raise an error when the input is invalid, which the try/catch then catches instead of letting the program crash. also `JSON.stringify` for converting object tot text/string and `JSON.parse` for converting bak to object.

### 22_async_javascript.js
* I learned about asynchronouse code, from callback(function that passed to another function to call later) to promise(wraps waiting logic with resolve). then async/await(modern), they have the same goal but different methods.

### 23_closures_scope.js
* Lastly I learned about scope, where it cannot be accessed outside the variable within the block using let, it throws `ReferenceError` if you try. also closures, how the function remembers the value even thought the parent function is already done, like `createCounter()` that every call it create its own private count that is separate to others.