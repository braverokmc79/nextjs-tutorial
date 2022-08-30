import { useRouter } from 'next/router'
import Axios from 'axios';
import { useEffect, useState } from 'react';
import API_KEY from './../../ApiKey';
import Item from './../../src/component/Item';
import { Loader } from 'semantic-ui-react';
import Head from 'next/head';

const Post = ({ item, name }) => {
    // const router = useRouter()
    // const { id } = router.query;
    // const [item, setItem] = useState({});
    // const [isLoading, setIsLoading] = useState(true);

    // // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    // //thedogapi.com api 사용
    // //https://docs.thedogapi.com/api-reference/breeds/breeds-list
    // const API_URL = `https://api.thedogapi.com/v1/breeds/search`;


    // function getData() {
    //     //console.log("id : ", id);
    //     Axios.get(API_URL, {
    //         headers: {
    //             'x-api-key': API_KEY,
    //             Authorization: `token ${API_KEY}`
    //         },
    //         params: {
    //             name: id
    //         }
    //     }).then(res => {
    //         setItem(res.data);
    //         setIsLoading(false);
    //     });
    // }

    // useEffect(() => {
    //     if (id && id !== undefined) {
    //         getData();
    //     }
    // }, [id]);

    return (
        <>

            {/* {isLoading && <div style={{ padding: "300px 0" }}>
                <Loader inline="centered" active>Loading</Loader>
            </div>
            }
            {!isLoading && <Item item={item[0]} />} */}
            {item &&
                <>
                    <Head>
                        <title>{item[0].name}</title>
                        <meta name="description" content={item[0].bred_for}></meta>
                    </Head>
                    {name} 환경 입니다.
                    <Item item={item[0]} />
                </>
            }
        </>
    )
}

export default Post;

//nodejs 환경
export async function getServerSideProps(context) {
    const id = context.params.id
    const API_URL = `https://api.thedogapi.com/v1/breeds/search?name=${id}`;
    const res = await Axios.get(API_URL, {
        headers: { 'x-api-key': API_KEY, Authorization: `token ${API_KEY}` }
    });
    const data = res.data;

    return {
        props: {
            item: data,
            name: process.env.name
        }
    }
}