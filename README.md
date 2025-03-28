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


