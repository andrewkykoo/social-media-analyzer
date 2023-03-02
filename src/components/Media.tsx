import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import youtube from "./apis/youtube";

interface Props {
  video: object;
}

interface VideoId {
  id?: {
    videoId?: string;
  };
}

interface VideoInfo {
  snippet?: {
    title: string;
    channelTitle: string;
    publishedAt: Date;
    tags: string[];
  };
  statistics?: {
    viewCount: number;
    likeCount: number;
    favoriteCount: number;
    commentCount: number;
  };
}

const Media: React.FC<Props> = ({ video }) => {
  const [singleVideo, setSingleVideo] = useState({});
  const { id }: VideoId = video;

  //todo: destructure response.data.items[0] - snippet & statistics

  const { snippet, statistics }: VideoInfo = singleVideo;

  // useEffect(() => {
  //   const fetchVideoDetails = async () => {
  //     const response = await youtube.get("/videos", {
  //       //*: for future features: use publishedBefore, publishedAfter params to filter most recent videos
  //       params: {
  //         id: id?.videoId,
  //         part: "snippet, statistics",
  //       },
  //     });
  //     setSingleVideo(response.data.items[0]);
  //     console.log(singleVideo);
  //   };
  //   fetchVideoDetails();
  // }, [video]);

  return (
    <div>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          Title: {snippet?.title} || Channel: {snippet?.channelTitle}
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          TAGS: #pop #swag #top10 {snippet?.tags[0]}
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Analytics: View Counts, Publish date, etc. || Publish Date:
          {snippet?.publishedAt.toString()}
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </div>
  );
};

export default Media;
