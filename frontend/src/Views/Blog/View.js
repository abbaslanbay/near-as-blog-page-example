import 'regenerator-runtime/runtime';
import React,{useState,useEffect} from 'react';
import {Row} from 'react-bootstrap';
import BlogItem from '../../components/Item';

const ViewBlog = ({ contract, currentUser}) => {
   const limit = 10;
   let num;

    const [getAllBlogs,setBlogs] = useState([]);
    const [page,setPage] = useState(1);

    useEffect(() => {
        if(page < 1){
            setPage(1);
            num = 0;
        }else{
            num = (page - 1)* limit
        }
            getBlogs()
     
    }, [page, contract])

    const getBlogs = () => {
        contract.getAll({ offset:num, limit: limit })
        .then((arr) => {
            console.log(arr)
            setBlogs(arr)
        });
    }
  return (
    <>
    <Row>
        {getAllBlogs.map((item,index) => {
                return( <BlogItem key={index} item={item} contract={contract} currentUser={currentUser} />)
            })
        }
    </Row>
    </>
  );
};


export default ViewBlog;