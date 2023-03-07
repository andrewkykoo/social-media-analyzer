import { SubmitHandler, useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  FormHelperText,
  Box,
  Center,
} from "@chakra-ui/react";
import React from "react";
import youtube from "./apis/youtube";

type Inputs = {
  keywords: string;
};

interface Props {
  setKeywords: React.Dispatch<React.SetStateAction<string | null>>;
  setVideos: React.Dispatch<React.SetStateAction<object[] | null>>;
}

const SearchBar: React.FC<Props> = ({ setKeywords, setVideos }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setKeywords(data.keywords);
    const response = await youtube.get("/search", {
      params: {
        q: data.keywords,
        order: "viewCount",
        relevanceLanguage: "en",
      },
    });
    setVideos(response.data.items);
  };

  return (
    <Center>
      <Box w="300px" m={10}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.keywords ? true : undefined}>
            <FormLabel htmlFor="keywords">Keywords</FormLabel>
            <Input
              color="white"
              id="keywords"
              placeholder="keywords"
              {...register("keywords", {
                required: "This is required",
              })}
            />
            <FormHelperText>e.g., Best restaurants in NYC</FormHelperText>
            <FormErrorMessage>
              {errors.keywords && errors.keywords.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Search
          </Button>
        </form>
      </Box>
    </Center>
  );
};

export default SearchBar;
