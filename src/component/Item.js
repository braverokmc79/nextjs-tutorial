/* eslint-disable @next/next/no-img-element */
import { Button } from 'semantic-ui-react';
import styles from './Item.module.css';

/*

bred_for: "Small rodent hunting, lapdog"
breed_group: "Toy"
height: {imperial: '9 - 11.5', metric: '23 - 29'}
id: 1
life_span: "10 - 12 years"
name: "Affenpinscher"
origin: "Germany, France"
reference_image_id: "BJa4kxc4X"
temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving"
weight: {imperial: '6 - 13', metric: '3 - 6'}

*/
const Item = ({ item }) => {


    return (
        <>{item !== undefined &&
            <>
                <div className={styles.wrap}>
                    <div className={styles.img_item}>
                        <img src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`} alt={item.name} />
                    </div>


                    <div className={styles.info_item}>
                        <strong className={styles.tit_item}>{item.name}</strong>
                    </div>
                    <div className={styles.info_item}>
                        <Button color="orange">분양 받기</Button>
                    </div>

                </div>


                <div className={styles.wrap2}>


                    {item.bred_for && <div className={styles.txt_info}><span>품종:</span>{item.bred_for}</div>}
                    {item.breed_group && <div className={styles.txt_info}><span>품종 그룹:</span>{item.breed_group}</div>}
                    <div className={styles.txt_info}><span>몸무게:</span> {item.weight.metric}kg</div>
                    <div className={styles.txt_info}><span>신장:</span> {item.height.metric}cm</div>
                    <div className={styles.txt_info}><span>수명 :</span> {item.life_span}</div>
                    {item.origin && <div className={styles.txt_info}><span>혈통 :</span> {item.origin}</div>}
                    <div className={styles.txt_info}><span>기질: </span>{item.temperament}</div>

                </div>



            </>
        }

        </>
    );

};

export default Item;