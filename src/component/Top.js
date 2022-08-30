/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';
import Link from 'next/link'

const Top = () => {
    return (
        <div>
            <div style={{ display: "flex", paddingTop: 20 }}>

                <div style={{ flex: "100px 0 0", cursor: "pointer" }}>
                    <Link href={'/'}>
                        <img src="/images/dogpark.png" alt='logo' style={{ display: "block", height: 90 }} />
                    </Link>
                </div>

                <Header as="h1">
                    <Link href={'/'}>
                        <a>동물이 행복한 세상 도그파크</a>
                    </Link>
                </Header>

            </div>

            <Gnb />
        </div >
    );
};

export default Top;