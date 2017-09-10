Thought Note
====
A Simple Webapp to store and view notes in plain text using Local Storage
----

How to compile:

`pug index.pug`

`scss --sourcemap=auto -t compressed css/app.scss css/app.min.css`

`cd js && tsc && webpack main.js app.min.js`
