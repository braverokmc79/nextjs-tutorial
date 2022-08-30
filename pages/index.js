/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import ItemList from './../src/component/ItemList';
import { Header, Divider, Loader } from 'semantic-ui-react';
import ApiKey from '../ApiKey.js';


export default function Home({ list }) {


  return (
    <div>
      <Head>
        <title>Home | 강아지 분양소 | 도그파크</title>
        <meta name="description" content='도그 파크 홈입니다.' ></meta>
      </Head>

      <>
        <Header as="h3" style={{ paddingTop: 40, marginBottom: 40 }}>VIP 분양</Header>
        <Divider />
        <ItemList list={list.slice(0, 12)} />

        <Header as="h3" style={{ paddingTop: 80, marginBottom: 40 }}>베스트 분양</Header>
        <Divider />
        <ItemList list={list.slice(12, 24)} />


        <Header as="h3" style={{ paddingTop: 80, marginBottom: 40 }}>실시간 분양</Header>
        <Divider />
        <ItemList list={list.slice(24, 60)} />
      </>

    </div>
  )
}


//nodejs 환경
export async function getServerSideProps(context) {
  const API_URL = process.env.NEXT_PUBLIC_DOG_API_URL;
  const API_KEY = ApiKey;

  const res = await axios.get(API_URL, {
    headers: { 'x-api-key': API_KEY, Authorization: `token ${API_KEY}` }
  });
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name
    }
  }
}


