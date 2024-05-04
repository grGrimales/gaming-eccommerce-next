"use client";
import { useEffect, useState } from "react";
import styles from "./Menu.module.scss";
import Link from "next/link";
import {  Icon, Image, Input } from "semantic-ui-react";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks";

export function MenuPage({ isOpenSearch, menuPlatform }) {
  const [showSearch, setShowSearch] = useState(isOpenSearch);
  const [searchText, setSearchText] = useState("");

  const router = useRouter();
  const openCloseSearch = () => setShowSearch(!showSearch);

  const { menuItems } = useAuth();

  useEffect(() => {
    searchText && setSearchText(router.query.s);
    document.getElementById("search-games").focus();
  }, [router.query]);

  const onSearch = (text) => {
    router.replace(`/search?s=${text}`);
  };

  return (
    <div className={styles.platforms}>
      {menuItems?.map((platform, index) => (
        <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
          <Image
            src={platform.attributes.icon.data.attributes.url}
            alt={platform.attributes.title}
          />
          {platform.attributes.title}
        </Link>
      ))}

      <button className={styles.search} onClick={openCloseSearch}>
        <Icon name="search" />
      </button>

      <div
        className={classNames(styles.inputContainer, {
          [styles.active]: showSearch,
        })}
      >
        <Input
          id="search-games"
          placeholder="Buscador"
          className={styles.input}
          focus={true}
          onChange={(_, data) => onSearch(data.value)}
        />
        <Icon
          name="close"
          className={styles.closeInput}
          onClick={openCloseSearch}
        />
      </div>
    </div>
  );
}
