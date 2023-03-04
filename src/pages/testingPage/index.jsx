import ItemCard from "@/components/ItemCard/ItemCard";
import ItemCardMini from "@/components/ItemCardMini/ItemCardMini";
import { Flex } from "@mantine/core";


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
      {/* <ItemCard  /> */}
      <ItemCardMini />
    </Flex>
  );
}
