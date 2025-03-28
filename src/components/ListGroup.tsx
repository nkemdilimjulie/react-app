 
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
