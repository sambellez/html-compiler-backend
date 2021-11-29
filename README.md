# Introduction

The idea of this live coding is to create an endpoint that takes an `html` as an input and returns a `boolean` indicating if the `html` is valid or not.

After that, you need to create a frontend application that'll display a textarea and a compilation status. Whenever the user changes `textarea`'s text, a backend call should be made to verify the validity of the typed `html`.

# Compilation rules

Here are the compilation rules :

- Any opening tag should have its closing tag in the same order;
- An empty string is considered as a valid html code;
- A string which doesn't contain any tags is considered as a valid html;

Examples :<br/>
`<html><head></head><body></body></html> => should return true`<br/>
`<html><head></head><body></html> => should return false`<br/>

# Outcome

Here's a video illustrating the expected outcome of the test
![alt text](https://i.ibb.co/GQzpvt6/ezgif-2-b6b1d81ce26d.gif)

# What needs to be done

- After cloning the repository, we would like you to complete all the endpoint that you can find in `routes/compiler.js`
