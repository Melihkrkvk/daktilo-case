import { Group, Kbd, TextInput, Flex, UnstyledButton, useMantineTheme } from '@mantine/core';
import { SpotlightProvider, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';
import { searchData } from '@utils/mock';

const rightSection = (
    <Flex align="center">
      <Kbd mr={5}>Ctrl</Kbd>
      <span>+</span>
      <Kbd ml={5}>K</Kbd>
    </Flex>
);

function SpotlightControl() {
    const theme = useMantineTheme();
  return (
    <UnstyledButton onClick={spotlight.open}>
    <Group position="center">
    <TextInput
      placeholder="Ara"
      icon={<IconSearch size="1rem" />}
      rightSectionWidth={90}
      rightSection={rightSection}
      styles={{ 
      rightSection: { pointerEvents: 'none', }, 
      input: {cursor: 'pointer', 
      width: 165,
      ":focus": { outline: 'none', 
      border: `${theme.colorScheme === 'dark' ? '0.0625rem solid #373A40' : '0.0625rem solid #ced4da'}`,}} 
    }}
      readOnly
    />
    </Group>
    </UnstyledButton>
  );
}

function SpotlightButtonControl() {
    const theme = useMantineTheme();
  return (
   
    <Group position="center">
    <IconSearch size={18} onClick={spotlight.open} />
    </Group>
  
  );
}


function DaktiloSearch({isButton = false}) {
  return (
    <SpotlightProvider
      actions={searchData}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Ara..."
      shortcut="ctrl + k"
      nothingFoundMessage="Bir şey bulunamadı..."
    >
      {!isButton ? <SpotlightControl /> : <SpotlightButtonControl /> }
    </SpotlightProvider>
  );
};
export default DaktiloSearch;