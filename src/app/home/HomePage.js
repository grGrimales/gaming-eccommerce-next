

import { BasicLayout } from "@/layouts";
import { BannerLastGamePublished, LatestGames } from "../components/Home";
import { Separator } from "../components/Shared/Separator/Separator";
import { Container } from "semantic-ui-react";
import styles from "./HomePage.module.scss";
import { BannerAd, BarTrust } from "../components/Shared";
import { Loading } from "../components/Shared/Loading/Loading";
import { Suspense } from "react";

const platformsId = {
  playstation: 1,
  nintendo: 2,
  xbox: 3,
  pc: 4,
};


export default function HomePage() {

  return (
    <BasicLayout>
      <Suspense fallback= {<Loading/>}>
      <BannerLastGamePublished />
      <Separator height={100} />
      <div className={styles.container_game}>
        <LatestGames title="Latest releases" />
      </div>
      <Separator height={100} />
      <BarTrust />
      <Separator height={100} />
      <Container className={styles.elementoFadeIn}>
        <LatestGames
          title="PlayStation"
          limit={3}
          platformId={platformsId.playstation}
        />
      </Container>
      <Separator height={100} />
      <BannerAd  title='Register to get better prices' subtitle='Compare with other games and choose yours' btnTitle='Get in now' btnLink='/account' image='/images/img01.png' />

      <Separator height={100} />
      <Container>
        <LatestGames
          title="Xbox"
          limit={3}
          platformId={platformsId.xbox}
        />
      </Container>
    
    </Suspense>
      <Separator height={100} />
    </BasicLayout>
 
  );
}
