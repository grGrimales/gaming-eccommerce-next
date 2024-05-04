
'use client';
import { Address as AddressCtrl} from "@/api";
import { useAuth } from "@/hooks";
import { map } from "lodash";
import { useEffect, useState } from "react";
import styles from "./ListAddresses.module.scss";
import { Address } from "./Address";

const addressCtrl = new AddressCtrl();

export function ListAddresses({reload, onReload}) {
  const { user } = useAuth();
  const [addresses, setAddresses] = useState(null);


  
  useEffect(() => {
    (async () => {

      try {
        const response = await addressCtrl.getAll(user.id);
       if(response){
        setAddresses(response.data);
       }
      } catch (error) {
        console.log(error)
      }
    
    })();
  }, [reload]);

  if(!addresses) return null;
  return (
    <div className={styles.addresses}>
    {
        map(addresses, (address) => (
           <Address key={address.id} addressId={address.id} address={address.attributes} onReload={onReload} />
        ))
    }
    </div>
  );
}
