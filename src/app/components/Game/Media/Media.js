"use client";

import { Container } from "semantic-ui-react";
import { Separator } from "../../Shared/Separator/Separator";
import { Video } from "./Video";
import { Gallery } from "./Gallery";

export function Media({ video, screenshots }) {

  return (
    <Container>
      <h2>Media</h2>
      <Separator height={30} />
      <Video video={video} />
      <Separator height={30} />
      <Gallery screenshots={screenshots} />
    </Container>
  );
}
