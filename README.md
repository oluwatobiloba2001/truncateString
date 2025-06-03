# Truncate String Script

This JavaScript script demonstrates a function to truncate strings based on a specified length, appending ellipses (`...`) when the string exceeds the length. The script randomly selects a name from an array, generates a random number, and applies the truncation function to the selected name.

## Features

- Truncates a string if it exceeds a specified length.
- Randomly selects a name from a predefined array of names.
- Generates a random number as the truncation limit.

## Code Description

### `truncateString` Function

The `truncateString` function takes two parameters:
- `str` (string): The string to be truncated.
- `num` (number): The maximum length of the string.

If the string's length exceeds the specified number, the function truncates the string and appends `...`. Otherwise, it returns the original string.

### Key Variables
- `name`: An array of names.
- `choosedName`: A randomly selected name from the `name` array.
- `randomNumber`: A random number between 0 and 10, used as the truncation length.

### Example Output
The script randomly selects a name and a truncation limit, then logs the truncated result.  
Example:
```javascript
const choosedName = "tobiloba";
const randomNumber = 4;
console.log(truncateString(choosedName, randomNumber)); // Output: "tobi..."
