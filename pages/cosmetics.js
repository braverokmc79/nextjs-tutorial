/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import Head from 'next/head'
import CosmeticsItemList from '../src/component/CosmeticsItemList';
import { Header, Divider, Loader } from 'semantic-ui-react';


/**
 * 정적 페이지 테스트
 * @param {*} param0 
 * @returns 
 */
export default function Cosmetics({ list }) {


    console.log(list);

    return (
        <div>
            <Head>
                <title>Home | 강아지 분양소 | 도그파크</title>
                <meta name="description" content='도그 파크 홈입니다.' ></meta>
            </Head>

            <>

                <Header as="h3" style={{ paddingTop: 40 }}>
                    베스트 상품
                </Header>
                <Divider />
                <CosmeticsItemList list={list.slice(0, 9)} />
                <Header as="h3" style={{ paddingTop: 40 }}>
                    신상품
                </Header>
                <Divider />
                <CosmeticsItemList list={list.slice(9)} />
            </>

        </div>
    )
}



export async function getStaticProps() {
    const apiUrl = process.env.apiUrl;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            list: data,
            neme: process.env.name
        }
    }

}