import { Grid, GridItem } from "@chakra-ui/react";

interface Props {
  video: object;
}

interface Video {
  snippet?: {
    title?: string;
    channelTitle?: string;
  };
}

const Media: React.FC<Props> = ({ video }) => {
  const { snippet }: Video = video;
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
          TAGS: #pop #swag #top10
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Analytics: View Counts, Publish date, etc.
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </div>
  );
};

export default Media;
