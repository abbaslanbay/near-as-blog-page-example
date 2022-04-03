import 'regenerator-runtime/runtime';
import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';

const CreateBlog = ({contract, currentUser }) => {
   

      const [title, setTitle] = useState("");
      const [url, setUrl] = useState("");
      const [desc, setDesc] = useState("");
      const [loading, setLoading] = useState(false);

      const handleSubmit =async  (event) => {
        event.preventDefault();

          if(!currentUser){
              alert("Please Login");
              return false;
            }
        setLoading(true);
        if(title == "" && url == "" && desc == ""){
            alert("Please all filled are required");
            setLoading(false);
            return false;
        }


        console.log(currentUser)
        console.log({ title,url,desc,author:currentUser.accountId })
        const todo = await contract.createBlog({ title,url,desc,author:currentUser.accountId });
        setTitle("")
        setUrl("")
        setDesc("")
        setLoading(false);
        console.log(todo)
      };
     
  return (
    <>
   <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" >
            <Form.Label>Title</Form.Label>
            <Form.Control type="text"
             name="title"
             onChange={ (event) => setTitle(event.target.value) }
             value={title}
            placeholder="Title" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="url" placeholder="Image"
             name="url"
             onChange={ (event) => setUrl(event.target.value) }
             value={url}
            />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} 
             name="desc"
             onChange={ (event) => setDesc(event.target.value) }
             value={desc}
            />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
            Submit
        </Button>
    </Form>
    </>
  );
};


export default CreateBlog;