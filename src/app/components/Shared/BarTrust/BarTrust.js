import { Container, Icon } from 'semantic-ui-react';
import styles from './BarTrust.module.scss';
import { map } from 'lodash';
import { data } from './BarTrustData';

export function BarTrust(){
    return (
        <div className={styles.BarTrust}>
            <Container className={styles.content}>
{
    map(data, (item) => (
        <div className={styles.block}>
            <Icon name={item.icon}/>
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        </div>
     
))}
            </Container>
        </div>
    )}