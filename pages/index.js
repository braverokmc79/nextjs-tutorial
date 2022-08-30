import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import ItemList from './../src/component/ItemList';
import { Header, Divider, Loader } from 'semantic-ui-react';
import ApiKey from '../ApiKey.js';


export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  //thedogapi.com api 사용
  //https://docs.thedogapi.com/api-reference/breeds/breeds-list
  const API_URL = "https://api.thedogapi.com/v1/breeds";
  const API_KEY = ApiKey;

  function getData() {
    axios.get(API_URL, {
      headers: { 'x-api-key': API_KEY }
    }).then(res => {
      setList(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      <Head>
        <title>Home | 강아지 분양소 | 도그파크</title>
        <meta name="description" content='도그 파크 홈입니다.' ></meta>
      </Head>

      {isLoading &&
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>Loading</Loader>
        </div>
      }

      {!isLoading &&
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
      }


    </div>
  )
}
