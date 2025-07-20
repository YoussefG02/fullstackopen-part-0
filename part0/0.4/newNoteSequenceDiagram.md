```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server


    user->>browser: Submits new note
    activate browser
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server->>server: the server processes the data in post request body
    server-->>browser: HTTP Status code : 302 Found
        Note right of browser: The browser reloads the notes page
    deactivate server
    deactivate browser

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate browser
    activate server
    server-->>browser: HTML Document
    deactivate server
    deactivate browser

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate browser
    activate server
    server-->>browser: CSS file
    deactivate server
    deactivate browser

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate browser
    activate server
    server-->>browser: JavaScript file
    deactivate server
    deactivate browser

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate browser
    activate server
    server-->>browser: JSON file
    deactivate server
    deactivate browser

    Note right of browser: The browser executes the callback function that renders the notes```
