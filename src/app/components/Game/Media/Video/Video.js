'use client';

import React from 'react';
import styles from './Video.module.scss';
import ReactPlayer from 'react-player';

export function Video({ video }) {


    return(
    <ReactPlayer className={styles.video} url={video}  width="100%" height={634} />
    )
}