

'use client';
import { useAuth } from "@/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Tab } from "semantic-ui-react";
import { Orders } from "../Orders";
import { Separator } from "../../Shared/Separator/Separator";
import { Wishlist } from "../Wishlist";
import { AddAdress } from "../Address/AddAddress";
import { ListAddresses } from "../Address";
import { ChangeEmailForm, ChangeNameForm, ChangePasswordForm } from "../Settings";
import styles from "./TabPage.module.scss";



export const TabPage = () => {

    const {  logout } = useAuth();
    const user = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
    const router = useRouter();
  
    const [reload, setReload] = useState(false);
    if (!user) {
      router.push("/");
      return null;
    }
  
    const onReload = () => {
      setReload(!reload);
    };
   
    const panes = [
        {
          menuItem: "My orders",
          render: () => (
            <Tab.Pane attached={false}>
              <Orders />
              <Separator height={80} />
            </Tab.Pane>
          ),
        },
        {
          menuItem: "Wish list",
          render: () => (
            <Tab.Pane attached={false}>
              <Wishlist />
              <Separator height={80} />
            </Tab.Pane>
          ),
        },
        {
          menuItem: "Addresses",
          render: () => (
            <Tab.Pane attached={false}>
              <AddAdress onReload={onReload} />
              <ListAddresses reload={reload} onReload={onReload} />
              <Separator height={80} />
            </Tab.Pane>
          ),
        },
        {
          menuItem: { key: "20", icon: "settings", content: "Settings" },
          render: () => (
            <Tab.Pane attached={false}>
              <ChangeNameForm />
              <div className={styles.containerForms}>
                <ChangeEmailForm />
                <ChangePasswordForm />
              </div>
              <Separator height={80} />
            </Tab.Pane>
          ),
        },
        {
          menuItem: { key: "21", icon: "log out", content: "", onClick: logout },
          render: () => (
            <Tab.Pane attached={false}>
              <p>Logout</p>
            </Tab.Pane>
          ),
        },
      ];
  return (
    <Tab
    panes={panes}
    menu={{ secondary: true, pointing: true }}
    className={styles.tabs}
  />
  )
}
