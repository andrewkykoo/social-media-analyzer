import {
  Box,
  Container,
  Heading,
  Highlight,
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
  VStack,
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
    <Box>
      {/* Title */}
      <Box m={5}>
        <Heading size="xl">Nike Phantom GX Elite Review</Heading>
        <Text fontSize="2xl">unisportstore</Text>
        <Text>Link to the video</Text>
        <Text>Published on 2/5/2021</Text>
      </Box>

      {/* Stats */}
      <Box m={5}>
        <Heading fontSize="2xl">Statistics</Heading>
        <StatGroup mt={1}>
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
            <StatHelpText>
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>

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
            <StatHelpText>
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>

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
            <StatHelpText>
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </Box>

      {/* Tags/Keywords */}
      <Box m={5}>
        <Heading fontSize="2xl">Tags/Keywords</Heading>
        <HStack spacing={4} mt={2}>
          <Tag>#nike</Tag>
          <Tag>#nikesoccer</Tag>
          <Tag>#phantomgx</Tag>
        </HStack>
      </Box>
    </Box>
  );
};

export default Media;
