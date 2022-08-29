/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Grid, Image } from 'semantic-ui-react'
import styles from "./ItemList.module.css";
import Link from 'next/link'
import { useState } from 'react';

const ItemList = ({ list }) => {

    function temperament(item) {
        if (item !== undefined) {
            let temp = item.temperament.split(",");
            return (`${temp[0]}, ${temp[1]}, ${temp[2]}`);
        } else {
            return null;
        }
    }

    return (
        <div>
            {/* divided */}
            <Grid columns={3}  >

                <Grid.Row >
                    {list.map((item) => (
                        <Grid.Column key={item.id} alt={item.name}>


                            <Link href={`/view/${item.name}`}>
                                <a>
                                    <div className={styles.wrap}>
                                        {/* <img src={item.image_link} alt={item.name} className={styles.img_item} /> */}
                                        <img src={item.image.url} alt={item.name} className={styles.img_item} />
                                        <strong className={styles.tit_item}>{item.name}</strong>
                                        <span className={styles.txt_info}><span className={styles.bold}>품종</span> : {item.bred_for}</span>
                                        <span className={styles.txt_info}>
                                            몸무게 : {item.weight.metric}kg, 수명 : {item.life_span}
                                        </span>

                                        <strong className={styles.txt_info}>기질: {temperament(item)}</strong>
                                    </div>
                                </a>
                            </Link>
                        </Grid.Column>
                    ))}
                </Grid.Row>



            </Grid>

        </div >
    );
};

export default ItemList;