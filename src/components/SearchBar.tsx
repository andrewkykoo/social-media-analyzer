import { SubmitHandler, useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

export type SearchFormFields = {
  keywords: string;
};

const SearchBar = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SearchFormFields>();

  const onSubmit: SubmitHandler<SearchFormFields> = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.keywords ? true : undefined}>
          <FormLabel htmlFor="name">Keywords</FormLabel>
          <Input
            id="keywords"
            placeholder="keywords"
            {...register("keywords", {
              required: "This is required",
            })}
          />
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
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
