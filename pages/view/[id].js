import { useRouter } from 'next/router'
import Axios from 'axios';
import { useEffect, useState } from 'react';
import API_KEY from './../../ApiKey';
import Item from './../../src/component/Item';


const Post = () => {
    const router = useRouter()
    const { id } = router.query;
    const [item, setItem] = useState({});

    // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    //thedogapi.com api 사용
    //https://docs.thedogapi.com/api-reference/breeds/breeds-list
    const API_URL = `https://api.thedogapi.com/v1/breeds/search`;


    function getData() {
        console.log("id : ", id);
        Axios.get(API_URL, {
            headers: {
                'x-api-key': API_KEY,
                Authorization: `token ${API_KEY}`
            },
            params: {
                name: id
            }
        }).then(res => {
            console.log("res.dat  : ", res.data);
            setItem(res.data)
        });
    }

    useEffect(() => {
        if (id && id !== undefined) {
            getData();
        }

    }, [id]);


    return <Item item={item[0]} />
}


export default Post