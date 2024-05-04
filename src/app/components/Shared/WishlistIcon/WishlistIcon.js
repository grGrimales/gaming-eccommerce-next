

'use client';
import { Icon } from 'semantic-ui-react';
import styles from './WishlistIcon.module.scss';
import { Wishlist } from '@/api/wishlist';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks';


const wishlistCtrl = new Wishlist();
export function WishlistIcon ({gameId, className, removeCallback}){
const {user} = useAuth();

    const [isInWishlist, setIsInWishlist] = useState(null);
useEffect(() => {
(async () => {
    try {
        const response = await wishlistCtrl.check(user.id, gameId);
        setIsInWishlist(response);
    } catch (error) {
        console.log(error)
        setIsInWishlist(false);
    }
})()}
, [gameId]);

const addWishList =  async  () => {
    const response = await wishlistCtrl.add(user.id, gameId);
    setIsInWishlist(response);
}

const removeWishList = async () => {
    try {
        await wishlistCtrl.remove(isInWishlist.id);
        setIsInWishlist(false);

        if(removeCallback) removeCallback();
    } catch (error) {
        console.log(error)
    }
}

    if(isInWishlist === null) return null;
    return (
       <Icon name={isInWishlist ? "heart" : "heart outline"} onClick={ isInWishlist ? removeWishList : addWishList} className={`${styles.wishlistIcon} ${className ?  className : ''}`} />
    )
}