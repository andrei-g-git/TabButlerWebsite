import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const text: string = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      opacity={0.75}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  );
};
