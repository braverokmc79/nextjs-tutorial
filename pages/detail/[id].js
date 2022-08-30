import Axios from "axios";
import Head from "next/head";
import Item from "../../src/component/CosmeticsItem";

const Post = ({ item, name }) => {
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
    return {
        paths: [
            { params: { id: "740" } },
            { params: { id: "730" } },
            { params: { id: "729" } },
        ],
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