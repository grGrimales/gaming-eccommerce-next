import { Game } from "@/api";
import { BasicLayout } from "@/layouts";
import { GridGames } from "../components/Shared/GridGames/GridGames";
import { Separator } from "../components/Shared/Separator/Separator";
import { Pagination } from "../components/Shared/Pagination/Pagination";
import { NoResult } from "../components/Shared/NoResult/NoResult";
import styles from "./Search.module.scss";


async function getData(params, searchParams) {
  const gameCtrl = new Game();
  const page = 1;
  const { s } = searchParams;

  const responseGame = await gameCtrl.searchGmes(s, page);
  return {
    props: {
      games: responseGame.data,
      pagination: responseGame.meta.pagination,
      searchText: s,
    },
  };
}

export default async function SearchPage({ params, searchParams }) {
  const data = await getData(params, searchParams);
  const { games, pagination, searchText } = data.props;
  const hasResult = games.length > 0;

  return (
    <>
      <BasicLayout relative isOpenSearch>
        <div className={styles.container}>
        <Separator  height={50}/>
          <h2>Search:  {searchText} </h2>

           {
            hasResult ? (
              <>
                <GridGames games={games} />
                <Separator height={30} />
                <Pagination
                  currentPage={pagination.page}
                  totalPages={pagination.pageCount}
                />
              </>
            ) : (
              <>
                <NoResult text={`No results found for: ${searchText}`} />
              </>
            )
          } 

<Separator  height={100}/>

        </div>
      </BasicLayout>
    </>
  );
}
