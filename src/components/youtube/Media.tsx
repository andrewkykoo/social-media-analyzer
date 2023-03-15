import {
  Box,
  Heading,
  HStack,
  Link,
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
import { InfoOutlineIcon, NotAllowedIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import youtube from "../apis/youtube";
import { formatCount } from "../../utils/kFormatter";
import { ageCalculator } from "../../utils/ageCalculator";
import { showNchars } from "../../utils/showNchars";

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
    description: string;
    publishedAt: Date;
    tags: string[];
  };
  statistics?: {
    viewCount: string;
    likeCount: string;
    commentCount: string;
  };
}

const Media: React.FC<Props> = ({ video }) => {
  const [singleVideo, setSingleVideo] = useState({});
  const { id }: VideoId = video;
  const { snippet, statistics }: VideoInfo = singleVideo;

  useEffect(() => {
    const fetchVideoDetails = async () => {
      const response = await youtube.get("/videos", {
        params: {
          id: id?.videoId,
          part: "snippet, statistics",
        },
      });
      setSingleVideo(response.data.items[0]);
      console.log("single video info: ", singleVideo);
    };
    fetchVideoDetails();
  }, [video]);

  return (
    <Box bg="gray.600" maxW="500px" borderRadius="md" color="white">
      {/* Title */}
      <Box m={5}>
        <Wrap>
          <WrapItem>
            <Heading size="lg">{snippet?.title}</Heading>
          </WrapItem>
        </Wrap>

        <Text fontSize="2xl">{snippet?.channelTitle}</Text>
        <Link
          href={`https://www.youtube.com/watch?v=${id?.videoId}`}
          isExternal
        >
          Click to view
        </Link>
        <Text>
          Published on {snippet?.publishedAt.toString().substring(0, 10)}
        </Text>
      </Box>

      {/* Description */}
      <Box m={5}>
        <Heading size="sm">Description:</Heading>
        <Text>
          {showNchars(snippet?.description)}
          <Link
            href={`https://www.youtube.com/watch?v=${id?.videoId}`}
            isExternal
          >
            ...
          </Link>
        </Text>
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
                <StatNumber>{formatCount(statistics?.viewCount)}</StatNumber>
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
                    label="The number of users who have indicated that they liked the video"
                  >
                    <InfoOutlineIcon />
                  </Tooltip>
                </HStack>
                <StatNumber>
                  {statistics?.likeCount === "0" ? (
                    <NotAllowedIcon />
                  ) : (
                    formatCount(statistics?.likeCount)
                  )}
                </StatNumber>
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
                    label="The number of comments for the video"
                  >
                    <InfoOutlineIcon />
                  </Tooltip>
                </HStack>
                <StatNumber>
                  {statistics?.commentCount === "0" ? (
                    <NotAllowedIcon />
                  ) : (
                    formatCount(statistics?.commentCount)
                  )}
                </StatNumber>
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
                    label="Time passed since the published date"
                  >
                    <InfoOutlineIcon />
                  </Tooltip>
                </HStack>
                <StatNumber>{ageCalculator(snippet?.publishedAt)}</StatNumber>
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
        <HStack>
          <Heading fontSize="xl">Tags/Keywords</Heading>
          <Tooltip
            placement="top"
            label="Some contents may not have tags/keywords."
          >
            <InfoOutlineIcon />
          </Tooltip>
        </HStack>
        {snippet?.tags ? (
          <Wrap spacing={2} mt={2}>
            {snippet?.tags.map((tag, index) => (
              <WrapItem key={index}>
                <Tag>#{tag}</Tag>
              </WrapItem>
            ))}
          </Wrap>
        ) : (
          <Box mt={2}>
            <NotAllowedIcon />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Media;
