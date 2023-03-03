import ItemCard from "@/components/ItemCard/ItemCard";
import Layout from "@/components/layout/Layout";
import { Flex, Button, Text, Code, Divider } from "@mantine/core";
import { IconScissors } from "@tabler/icons-react";


export default function TestingPage() {
  return (
    <Flex
      mih={"100vh"}
      bg='white'
      gap='sm'
      justify='center'
      align='center'
      direction='column'
      wrap='wrap'
    >
      <ItemCard /> 
    </Flex>
  );
}
