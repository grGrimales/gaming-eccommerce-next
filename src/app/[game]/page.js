import { Game } from "@/api";
import { BasicLayout } from "@/layouts";
import { HeaderWallpaper, Info, Media, Panel } from "../components/Game";
import { Separator } from "../components/Shared/Separator/Separator";
import { notFound } from "next/navigation";




export async function generateMetadata(params){
   try {
    const gameCtrl = new Game();
    const responseGame = await gameCtrl.getGamesBySlug(params.params.game);
  
     return {
       title: params.params.game,
       description: responseGame.attributes.summary,
       image: responseGame.attributes.wallpaper.data.attributes.url,
     };
   } catch (error) {
    notFound();
   }

} 


async function getData(game) {
  try {
    const gameCtrl = new Game();
    const responseGame = await gameCtrl.getGamesBySlug(game.game);
    return {
      props: {
        game: responseGame,
      },
    };
  } catch (error) {
    notFound();
    
  }
}

export default async function GamePage({ params, searchParams }) {
  const data = await getData(params);
  return (
    <>
      <BasicLayout>
        <HeaderWallpaper
          image={data.props.game.attributes.wallpaper.data.attributes.url}
        />

        <Panel gameId={data.props.game.id} game={data.props.game.attributes} />

        <Separator height={50} />

        <Info game={data.props.game.attributes} />

        <Separator height={30} />

        <Media
          video={data.props.game.attributes.video}
          screenshots={data.props.game.attributes.screenshots.data}
        />

        <Separator height={30} />
      </BasicLayout>
    </>
  );
}
