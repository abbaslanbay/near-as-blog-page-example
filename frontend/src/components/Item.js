import 'regenerator-runtime/runtime';
import React,{useState} from 'react';
import {Card,Col,Nav,Button} from 'react-bootstrap';
const BlogItem = ({ contract,item ,currentUser}) => {
  const [loading, setLoading] = useState(false);
 
  const remove = (item) => {
    setLoading(true)
    if(item.author != currentUser.accountId){
      alert("You are not authorized for deleting this item");
      setLoading(false)
      return;
    }
    


    contract.del({id:item.id});
    setLoading(false)

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
            disabled={loading}
            >Remove</Button>
            :null}
          </Card.Footer>
          
        </Card>
    </Col>

    </>
  );
};


export default BlogItem;