// Regular Expression

/* 
    ? A way to search through a string. It's able to modify, find and replace, etc.

    ? Almost always starts with / and ends with /

    ? Content between / / is what we're searching for.
        * /The/g is looking for the word "The"
        * /e+/ --> match more than one in a row
        * /e+a?/ --> match more than one "e" in a row AND optional "a"
        * star character --> Match zero or more
        * /.at/ --> match anything at all
        * /\./ --> \ escapes to access special characters
        * /\w/ --> match any word
        * /\W/ --> anything that's not a word
        * /\s/ --> match any whitespace
        * /\S/ --> match any NOT whitespace
        * {min_start, max_end} --> range of character length. Leave , at the end to do min_start or more
        * [] --> can do characters or ranges (ex: [ab], [a-z], [0-8], etc.)
    
    ! Matt
    ! resource for understanding all of those: https://www.youtube.com/watch?v=rhzKDrUiJVk
    ! game to match: https://regexr.com/
    ! RegEx Docs (they're good!) = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#using_regular_expressions_in_javascript
    ! RegEx Game I like: https://regexlearn.com/learn/regex101


    ? Flags after the /
        * /g - Global -> match all
        * /i - Case Insensitive
        * /m - Multiline
        * /s - Single Line
*/

// JS Form Validation

function validate() {
    // Grab email values
    // let email = document.getElementById("email").value
    // console.log(email)

    // // Grab phone values
    // let mobile = document.getElementById("mobile").value
    // console.log(mobile)
    
    // // Wrap in / / a regEx for email and phone numbers
    // let emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    // let phoneRegEx = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/

    // // Utilize .test() method to return true or false (built-in)
    // !emailRegEx.test(email)
    //     ? alert("Email format invalid.")
    //     : null

    // !phoneRegEx.test(mobile)
    //     ? alert("Phone number must be in (123) 456-7890 format")
    //     : null
}