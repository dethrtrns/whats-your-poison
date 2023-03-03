import { Card, Image, Text, Badge, Button, Group, Divider } from '@mantine/core';
import { IconCurrencyRupee } from '@tabler/icons-react';

export default function ItemCard() {
  return (
    <Card w={250} mt={10} shadow="lg"  padding="sm" radius="md" withBorder >
      <Card.Section  withBorder sx={{
        // position:'relative',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      }} component="a" href="/">
        <img
          src="https://carlsbergsingapore.com.sg/media/41980/tuborg_4g_50cl_can_strong_rgb_lowres-1.png"
          height={280}
          
          alt="tuborg beer"
        />
      <Badge pos={'absolute'} top={1} left={2} color={'indigo'} variant={'gradient'} >8%abv</Badge>
      </Card.Section>

      <Group w={'100%'} display={'flex'} sx={{
        flexDirection: 'column', 
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 4
      }}  mt="xs" >
        <Group w={'100%'} display={'flex'} position={'apart'} >
        <Text fz={20} weight={700}>Tuborg Strong</Text>
          <Badge variant={'light'} >Beer</Badge>
        </Group>
        <Group sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}>
        <IconCurrencyRupee size={22} color={'green'} />
        <Text c={'teal'} ff={'cursive'} fw={700} fz={17} ta={'center'} ml={'-lg'} >120*</Text>
        </Group>
      </Group>

    </Card>
  );
}