# This repo is about Design Patterns in React

## 1) Container-Presenter Pattern

A) Here a container component is that component that does all the data fetching work, it then passes the required data in the form of props to the 'container' component

B) The container component is just concerned with rendering the JSX, utilising the data recieved as props via its container component

## 2) Controlled vs UnControlled forms/components

When talking about forms (controlled/uncontrolled).

A) Controlled forms are those, are controlled by React's useState hook. 

B) Uncontrolled forms, not managed by React's useState hook. There are two ways to manage them
   i) using useRef, (as useRef allows use to directly manage the DOM, by selecting a node, useful because it doens't cause re-render when the value changes, unlike the useState)
   ii) going by the traditional HTML way, by utiling the FormData object that provides us all the form field values once the form has been submitted. Eg : we can get a particular field value like -> const firstName = formData.get('firstName'); where
   'firstName' is the value given to the name attribute of that form file. 

   and to recieve the form data in a submit method, 

    const formData = new FormData(event.target as HTMLFormElement);