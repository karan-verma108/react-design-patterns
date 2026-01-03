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

## 3) Compound Components Pattern

In this pattern, components serving similar purpose are grouped together. By serving similar purpose means,
  i) there can be a component called Modal, so that modal component may have child components like ModalHeader, ModalBody, ModalFooter. 
  It's better to keep them in a single component and export just the primary component (Modal) as default from there and the rest like this (right above the default export)

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

It's useful only when you're dealing with such component that need to be grouped together, like Modal, Accordion, Tabs etc.
It's also useful to note that, with this approach (Compound Components), one can completely avoid passing plenty of different props to adjust a reusable component like Modal, to support various UIs, because with this pattern, the UI can be dynamic, not just the labels! (as we can literally pass Elements as children (prop) to the actual components (Modal.Header,  Modal.Body, Modal.Footer))