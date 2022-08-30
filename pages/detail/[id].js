import Axios from "axios";
import Head from "next/head";
import Item from "../../src/component/CosmeticsItem";
import { useRouter } from 'next/router';
import { Loader } from "semantic-ui-react";

const Post = ({ item, name }) => {

    const router = useRouter();

    //console.log("isFallback : ", router.isFallback)
    //로딩시 fallback 은 처음 true 였다가  false  변경 처리된다.
    //isFallback :  true
    //isFallback: false

    if (router.isFallback) {
        return (
            <div style={{ padding: "100px 0" }}>
                <Loader active inline="centered">
                    Loading
                </Loader>
            </div>
        )
    }


    return (
        <>
            {item && (
                <>
                    <Head>
                        <title>{item.name}</title>
                        <meta name="description" content={item.description}></meta>
                    </Head>
                    {name} 환경 입니다.
                    <Item item={item} />
                </>
            )}
        </>
    );
};

export default Post;

export async function getStaticPaths() {
    //740, 730, 729 3개의 아이디만 정적인 html 파일로 컴파일 되어 보여 줌
    //fallback false 740, 730, 729 아닌 아이디는 404 페이지를 보여 줌
    const apiUrl = process.env.apiUrl;
    const res = await Axios.get(apiUrl);
    const data = res.data;
    return {
        //  paths: [
        //     { params: { id: "740" } },
        //     { params: { id: "730" } },
        //     { params: { id: "729" } },
        // ],
        paths: data.slice(0, 9).map((item) => ({
            params: { id: item.id.toString() }
        })),
        fallback: true,
    };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await Axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            item: data,
            name: process.env.name,
        },
    };
}