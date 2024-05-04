import { Game, Platform } from "@/api";
import { GridGames } from "../../components/Shared/GridGames/GridGames";
import { Separator } from "../../components/Shared/Separator/Separator";
import { BasicLayout } from "@/layouts";
import styles from "../Games.module.scss";
import { NoResult } from "../../components/Shared/NoResult/NoResult";
import { Pagination } from "../../components/Shared/Pagination/Pagination";
import { notFound } from "next/navigation";

export async function generateMetadata(params) {
  try {
    const platformCtrl = new Platform();
    const responsePlatform = await platformCtrl.getBySlug(
      params.params.platform
    );

    return {
      title: params.params.platform,
      description: responsePlatform.attributes.title,
    };
  } catch (error) {
    notFound();
    return {
      title: "Plataform not Found",
    };
  }
}

async function getData(platform) {
  try {
    const platformCtrl = new Platform();
    const responsePlatform = await platformCtrl.getBySlug(platform);

    const page = 1;
    const gameCtrl = new Game();
    const responseGame = await gameCtrl.getGmaesByPlatformSlug(platform, page);

    return {
      props: {
        platform: responsePlatform,
        game: responseGame.data,
        pagination: responseGame.meta.pagination,
      },
    };
  } catch (error) {
    notFound();
  }
}

export default async function PlatformPage({ params, searchParams }) {
  const data = await getData(params.platform);

  const { pagination } = data.props;

  const hasProducts = data.props.game.length > 0;

  return (
    <>
      <BasicLayout relative>
        <div className={styles.container_platform}>
          <Separator height={50} />
          <h2>{data.props.platform.attributes.title}</h2>

          {hasProducts ? (
            <>
              <GridGames games={data.props.game} />
              <Separator height={30} />
              <Pagination
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
              />
            </>
          ) : (
            <>
              <NoResult
                text={`The category ${data.props.platform.attributes.title} does not have products yet`}
              />
            </>
          )}
          <Separator height={100} />
        </div>
      </BasicLayout>
    </>
  );
}
