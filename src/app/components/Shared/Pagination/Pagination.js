'use client';

import styles from './Pagination.module.scss';
import { Pagination as PaginationSU } from 'semantic-ui-react';
import { useRouter } from "next/navigation";
import { useEffect } from 'react';

export function Pagination({ currentPage, totalPages}) {
 
    const router = useRouter();


    useEffect(() => {
        if (router.isReady) {
            // Aquí puedes realizar acciones que dependen de que el router esté listo
        }
    }, [router.isReady]);
    
    const onPageChange = (_, data) => {

        if (router.isReady) {
            const newQuery = { ...router.query, page: data.activePage.toString() };
            router.replace({
                pathname: router.pathname,
                query: newQuery,
            }, undefined, { shallow: true });
        }
    };
    
    
    return (
        <>
        <div className={styles.container}>
          <PaginationSU defaultActivePage={currentPage} totalPages={totalPages} ellipsisItem={null} firstItem={null} lastItem={null} onPageChange={onPageChange} /> 
        </div>
        </>
    );
}