# JavaScript

## Data types

Data type | Example
--- | ---
Number | `18`
String | `'taco'` and `'18'`
Boolean | `true` or `false`

Additional resources: [data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

## Variables

`let x = 1`

- `let` is a **keyword** that tells the computer we are defining a variable

- `x` is the **name** of the variable

- `=` is the **assignment operator**

- `1` is the **value** of the variable

### Naming your variables

- Use camel-case
- Start with a letter
- Use a noun (unless you're naming a function)
- Be descriptive

`let firstName = 'Chris';`

`let numberOfPets = 2;`

## Expressions and operators

"An expression is any valid set of literals, variables, operators, and expressions that evaluates to a single value." [[source](http://lib.ru/JAVA/javascr/expr.html)]

```JavaScript
let x = 3; // expression

x = x + 1; // expression

x += 1; // expression using shorthand compound assignment operator

x++; // increments by 1
```

### String Considerations

- `+` will convert a number to a string and concatenate them
 - `'1' + 2 = '12'`
- all other operators will convert a string into a number, if possible
 - `'10' - 5 = 5`
 - `'36' / 6 = 6`
 - `'ten' * 3 = NaN`

## NaN, null, undefined values

**NaN** stands for Not a Number. Value is not a legal number.

**null** represents an empty value.

**undefined** indicates a variable has not been assigned a value.

**not defined** indicates a variable was referenced but it doesn't exist in the correct scope.

## Modify HTML Elements

`document` is our HTML page
`querySelector` finds the first element that matches
`innerHTML` allows us to change the HTML for the selected element

```JS
const pageTitle = document.querySelector('#page-title');
pageTitle.innerHTML = 'Hello World!'; // Set the text for our h1
pageTitle.style.backgroundColor = "lightblue"; // Set the background color four our h1
```

## Conditional statements and comparison operators

```JavaScript
if (/*expression is truthy*/) {
  // perform some logic
} else {
  // perform some other logic
}
```

### Comparison Operators

Operator | Description | Example | Returns
--- | --- | --- | ---
`==` | equal to | `8 == 8` | true
`==` | equal to | `'8' == 8` | true
`===` | equal to and type | `8 === 8` | true
`===` | equal value and type | `'8' === 8` | false
`!=` | not equal to | `8 != 8` | false
`!==` | not equal value or type | `'8' !== 8` | true
`>` | greater than | `8 > 8` | false
`<` | less than | `8 < 8` | false
`>=` | greater than | `8 >= 8` | true
`<=` | less than | `8 <= 8` | true

### Logical Operators

`&&` (and)

```JavaScript
// false && false is false
// true && false is false
// true && true is true
```

`||` (or)

```JavaScript
// false || false is false
// true || false is true
// true || true is true
```

`!` (not)

```JavaScript
// !false is true
// !true is false
```

### Further Reading

https://developer.mozilla.org/en-US/docs/Glossary/Falsy

https://developer.mozilla.org/en-US/docs/Glossary/Truthy

## Jargon
      . - dot
      () - parenthesis, parens
      [] - brackets, square brackets, square braces
      {} - braces, curlies, curly braces, curly brackets
      < - less than, bird, angle brackets
      > - greater than, gator, angle brackets
      / - slash, whack, forward slash
      \ - back slash
      ! - not, bang
      # - pound, hash, number
      * - star, splat
      || - or, pipes
      $ - dollar sign, bling, cash
      NaN - not a number, bread
