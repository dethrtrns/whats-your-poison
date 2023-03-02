import Layout from "@/components/layout/Layout";
import { Flex, Button, Text, Code, Divider } from "@mantine/core";
import { IconScissors } from "@tabler/icons-react";

export default function TestingPage() {
  return (
    <Flex
      mih={"100vh"}
      bg='yellow'
      gap='sm'
      justify='center'
      align='center'
      direction='column'
      wrap='wrap'
    >
      <Text fz={20} fw={600} ta='center'>
        build your components here and then extract them to components folder!
        or create the component in components folder and just render the
        component here and edit in the respective jsx file in component folder.
        <hr />
        example:-
        <Code>
          import MyCard from '@/components/myCard/MyCards';
          <br />
          {"<MyCard />"}
        </Code>
        <br />
        **delete everything inside the Flex component in this file and insert
        your component there! <br />
        start working in:{" "}
        <Code fw={500} fz={18}>
          src\pages\testingPage\index.jsx
        </Code>
        <Divider
          label='tear here'
          labelPosition='center'
          size={"sm"}
          orientation='horizontal'
          variant={"dashed"}
          // color={"grey"}
        />
      </Text>
      <Text transform='uppercase' ta={"center"} c={"purple"} fw={400} fz={22}>
        reference: background color--
        <br /> yellow of this Flex component,
        <br /> red of the layout main body.
        <br />
        <Divider
          label={<IconScissors color='black' />}
          labelPosition='center'
          size={"sm"}
          orientation='horizontal'
          variant={"dashed"}
        />
      </Text>
    </Flex>
  );
}
