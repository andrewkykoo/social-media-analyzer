import {
  Box,
  Heading,
  HStack,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tag,
  Text,
  Tooltip,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

interface Props {
  video: object;
}

interface VideoId {
  id?: {
    videoId?: string;
  };
}

interface VideoInfo {
  id?: string;
  snippet?: {
    title: string;
    channelTitle: string;
    publishedAt: Date;
    tags: string[];
  };
  statistics?: {
    viewCount: number;
    likeCount: number;
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
    <Box bg="gray.600" maxW="500px" borderRadius="md" color="white">
      {/* Title */}
      <Box m={5}>
        <Wrap>
          <WrapItem>
            <Heading size="lg">
              Best restaurants in NYC Best restaurants in NYC
            </Heading>
          </WrapItem>
        </Wrap>

        <Text fontSize="2xl">Eater</Text>
        <Text>Link to the video</Text>
        <Text>Published on 2/5/2021</Text>
      </Box>

      {/* Stats */}
      <Box m={5} borderColor="gray.500" borderWidth="2px">
        <StatGroup m={5}>
          <Wrap spacing="25px">
            <WrapItem>
              <Stat>
                <HStack>
                  <StatLabel>Views</StatLabel>
                  <Tooltip
                    placement="top"
                    label="The number of times the video has been viewed"
                  >
                    <InfoOutlineIcon />
                  </Tooltip>
                </HStack>
                <StatNumber>345,670</StatNumber>
                {/* <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText> */}
              </Stat>
            </WrapItem>

            <WrapItem>
              <Stat>
                <HStack>
                  <StatLabel>Likes</StatLabel>
                  <Tooltip
                    placement="top"
                    label="The number of users who have indicated that they liked the video."
                  >
                    <InfoOutlineIcon />
                  </Tooltip>
                </HStack>
                <StatNumber>45</StatNumber>
                {/* <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText> */}
              </Stat>
            </WrapItem>

            <WrapItem>
              <Stat>
                <HStack>
                  <StatLabel>Comments</StatLabel>
                  <Tooltip
                    placement="top"
                    label="The number of comments for the video."
                  >
                    <InfoOutlineIcon />
                  </Tooltip>
                </HStack>
                <StatNumber>45</StatNumber>
                {/* <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText> */}
              </Stat>
            </WrapItem>

            <WrapItem>
              <Stat>
                <HStack>
                  <StatLabel>Age</StatLabel>
                  <Tooltip
                    placement="top"
                    label="The number of months since the published date."
                  >
                    <InfoOutlineIcon />
                  </Tooltip>
                </HStack>
                <StatNumber>2.5</StatNumber>
                {/* <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText> */}
              </Stat>
            </WrapItem>
          </Wrap>
        </StatGroup>
      </Box>

      {/* Tags/Keywords */}
      <Box m={5}>
        <Heading fontSize="xl">Tags/Keywords</Heading>
        <Wrap spacing={2} mt={2}>
          <WrapItem>
            <Tag>#nikephantomgxelitefg</Tag>
          </WrapItem>
          <WrapItem>
            <Tag>#nike</Tag>
          </WrapItem>
          <WrapItem>
            <Tag>#nikepha</Tag>
          </WrapItem>
          <WrapItem>
            <Tag>#1</Tag>
          </WrapItem>
          <WrapItem>
            <Tag>#nikephantomgxelitefg</Tag>
          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  );
};

export default Media;
