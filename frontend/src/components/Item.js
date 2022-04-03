import 'regenerator-runtime/runtime';
import React from 'react';
import {Card,Col,Nav,Button} from 'react-bootstrap';
const BlogItem = ({ contract,item ,currentUser}) => {
 
  const remove = (item) => {
    console.log(item.author,currentUser.accountId)
    if(item.author == currentUser.accountId){
      alert("You are not authorized for deleting this item");
      return;
    }
    


    contract.del({id:item.id})
  }

  return (
    <>
    <Col md={4} key={item.id} style={{marginTop:20}}>
      <Card >
          <Card.Img variant="top" src={item.url} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text  >
              {item.desc}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">@{item.author}</small>
            {currentUser ?
            <Button variant="danger" style={{float:'right'}}
            onClick={() => remove(item)}
            >Remove</Button>
            :null}
          </Card.Footer>
          
        </Card>
    </Col>

    </>
  );
};


export default BlogItem;