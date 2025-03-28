React returns only one element . But you can manuover it to return multiple elements. Use the following different ways:

1. Use **div** tag

```
function ListGroup() {
  return (
    <div>
      <h1>List</h1>
      <ul className="list-group"> // React.createElement('h1')
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </div>
  );
}


export default ListGroup;

```


2. Use **Fragment**

```
import { Fragment } from "react";

function ListGroup() {
  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group"> // React.createElement('h1')
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </Fragment>
  );
}

export default ListGroup;

```
## Processes an array - a list of items

```
function ListGroup() {
  const items =["New York", "San Francisco", "Tokyo", "London", "Paris"]
  return (
    <>
      <h1>List</h1>
      <ul className="list-group"> 
        {items.map((item) => (
          <li>{item}</li>
        ))}  
      </ul>
    </>
  )};

export default ListGroup;
```

## Use of **key** element

Every **child** item must have an id for identification.
Meaning, in an **array** or **list**, each item should be assigned a key.

```
function ListGroup() {
  const items =["New York", "San Francisco", "Tokyo", "London", "Paris"]
  return (
    <>
      <h1>List</h1>
      <ul className="list-group"> 
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}  
      </ul>
    </>
  )};


export default ListGroup;
```


## Conditional Rendering
** Conditional Statements

```
 //Conditional Statements
function ListGroup() {
  //const items =["New York", "San Francisco", "Tokyo", "London", "Paris"]
  let items =["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items =[];
  if (items.length === 0)
    
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );
  return (
    <>
      <h1>List</h1>
      <ul className="list-group"> 
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}  
      </ul>
    </>
  )};


export default ListGroup;
```

## Avoid Duplications
You can position your conditional statements or if statements inside a return statement in order avoid repetitions in a code.

```
function ListGroup() {
  
  let items =["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items =[];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null}  
      <ul className="list-group"> 
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}  
      </ul>
    </>
  )};

export default ListGroup;
```

**null** means nothing will be rendered


## Minimize the Statements
Using this logic inside a return statement can later become too many and complicated for our jsx markup:

{items.length === 0 ? <p>No item found</p> : null} 

+ Store your logics inside a separate **variable** as in **var** or **constant** as in **const**


```
 
function ListGroup() {
  //const items =["New York", "San Francisco", "Tokyo", "London", "Paris"]
  let items =["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items =[];

  const message = items.length === 0 ? <p>No item found</p> : null;

  return (
    <>
      <h1>List</h1>
      {message}  
      <ul className="list-group"> 
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}  
      </ul>
    </>
  )};


export default ListGroup;
```

## Another style used to clean up our jsx markup
+ Move the logic inside a function.
But first, you have to declare the function with a **const** and a **get** statement.

```
function ListGroup() {
  //const items =["New York", "San Francisco", "Tokyo", "London", "Paris"]
  let items =["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items =[];


  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;;

  }

  return (
    <>
      <h1>List</h1>
      {getMessage()}  
      <ul className="list-group"> 
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}  
      </ul>
    </>
  )};


export default ListGroup;

```

## Benefits of using functions for our logics
+ Functions can have **parameters**. So, we may get different messages depending on different conditions.
+ We can pass different arguments like one and get a different message.
+ You can avoid using a question mark, a ternary operator, we do a logical **AND* (**&&**) and use paragraph element to specify the value to be returned, if true.


```
function ListGroup() {
  //const items =["New York", "San Francisco", "Tokyo", "London", "Paris"]
  let items =["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items =[];


  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null} 
      {items.length === 0 && <p>No item found</p>}   
      <ul className="list-group"> 
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}  
      </ul>
    </>
  )};


export default ListGroup;

```

## true && 1                = 1
## true && 'Julie'          = 'Julie'
## false && 1               = false
## false && 'Julie'         = false

You can later remove the first statement of the two repetitions above. It was used for demonstrations.


+ Each property of each prompt is separated on a different line.
+ Each property **clicked** is logged or counted on the console: onClick={() => console.log("Clicked")}

```
function ListGroup() {

  let items =["New York", "San Francisco", "Tokyo", "London", "Paris"];


  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}   
      <ul className="list-group"> 
        {items.map((item) => (
            <li 
                className="list-group-item"
                key={item} 
                onClick={() => console.log("Clicked")}
            >
                {item}
            </li>
        ))}  
      </ul>
    </>
  )};


export default ListGroup;

```
## click on each property and see the property(item) on the console
Each **element* has a property which is **called** on click. Each property of each prompt is on a separate line.
+ specify **onClick** with braces **{}** or with a bracket with no parameters and **console.log**.
+ Each property or item **clicked** is logged and shown on the console: onClick={() => console.log(item)}
Here: **item** is used to replace **"Clicked"**

```
function ListGroup() {

  let items =["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}   
      <ul className="list-group"> 
        {items.map((item) => (
          <li 
            className="list-group-item"
            key={item} 
            onClick={()=> console.log(item)}
          >
            {item}
          </li>
        ))}  
      </ul>
    </>
  )};

export default ListGroup;

```

 ## Item and Index of Item clicked is displayed(sent to console): Index in the array

 function ListGroup() {

  let items =["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}   
      <ul className="list-group"> 
        {items.map((item, index) => (
          <li 
            className="list-group-item"
            key={item} 
            onClick={()=> console.log(item, index)}
          >
            {item}
          </li>
        ))}  
      </ul>
    </>
  )};

export default ListGroup;


# Handling Events
An Event is an **action** performed when a button is triggered by a user or a system.

## onClick Arrow function can optionally have a function e.g event
+ Every object has an Event. 
+ There are SyntheticBaseEvent, nativeEvent, PointerEvent, etc.
+ SyntheticBaseEvent is one of the **built-in classes** in React and is a wrapper to nativeEvent

+ Different browsers have different implementations of event objects


```
function ListGroup() {

  let items =["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}   
      <ul className="list-group"> 
        {items.map((item, index) => (
          <li 
            className="list-group-item"
            key={item} 
            onClick={(event)=> console.log(event)}
          >
            {item}
          </li>
        ))}  
      </ul>
    </>
  )};

export default ListGroup;

```

## A Function can be used as an Event, called or performed on click
** Example is a handleClick

```
 import { MouseEvent } from "react";

function ListGroup() {

  let items =["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // Event handler handles events e.g this Click event
  const handleClick = (event: MouseEvent)=> console.log(event)

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}   
      <ul className="list-group"> 
        {items.map((item, index) => (
          <li 
            className="list-group-item"
            key={item} 
            onClick={handleClick}
          >
            {item}
          </li>
        ))}  
      </ul>
    </>
  )};

export default ListGroup;

```



