import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@chakra-ui/button';
import { Box, Textarea } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';

export const MySpaceForm = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ marginTop: '16px', width: '100%' }}
      >
        <Box>
          <Box
            style={{
              marginBottom: '16px'
            }}
          >
            <Controller
              name="my-editor"
              control={control}
              render={({ field }) => (
                <Textarea {...field} placeholder="Simple text" />
              )}
            />
          </Box>
          <Box>
            <Button type="submit" width="100%">
              Отправить
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};
