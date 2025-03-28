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


+ Each property of each prompt is separated on a different line:

```
function ListGroup() {
  //const items =["New York", "San Francisco", "Tokyo", "London", "Paris"]
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
          onClick={() => console.log('Clicked')}>{item}</li>
        ))}  
      </ul>
    </>
  )};


export default ListGroup;

```




