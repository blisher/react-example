## Exercise 1 - react recursion
Write a React component, that receives array of React Component classes (e.g. "One", "Two", "Three") as prop, then **recursively** renders HTML with those components:
```html
<One>
  <Two>
    <Three>
    </Three>
  </Two>
</One>
```

Let the produced html be as followed:

```html
<div class='box'>
  One
  <div class='box'>
    Two
    <div class='box'>
      Three
    </div>
  </div>
</div>
```

Files that should be edited:
- components/Recursion.js
- components/RecursiveComponent.js

Do not edit any other files.

## Exercise 2 - react form
Using React, create a simple one page form that takes its structure from the JSON config below. The application does not need to persist the data anywhere other than local state for this exercise. Form config is available in `/app/lib/formConfig.js` file.
After reading the above config, the application should display a form with 2 questions, "Tell us about yourself" and "Where do you live". The first question should have 4 text input fields displayed underneath, the second should have 2 text input fields and 1 dropdown. All fields should use the name and label from the config (and in the case of dropdowns, the "options" field).
It should be possible to add/remove/edit form fields only by updating the config. To keep it simple let's assume there're only two types of input fields: text input and dropdown.
After clicking "Log to the browser console" button, browser console should print something similar to this:

```
firstName: "John",
lastName: "Doe",
email: "john@mail.com",
phoneNumber: "555-123-1111",
postCode: "90210",
streetAddress: "123 Evergreen Drive"
country: "USA",
```

Files that should be edited:
- components/UserForm.js
- any new files created in purpose of the exercise

Do not edit any other files.
