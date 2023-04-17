import { VStack, Input, IInputProps } from 'native-base';

export const InputComponent: React.FC<IInputProps> = ({ ...rest }) => {
  return (
    <Input
      bg={'gray.700'}
      h={14}
      px={4}
      color={'white'}
      borderWidth={0}
      fontSize={'md'}
      fontFamily={'body'}
      _focus={{
        bg: 'gray.700',
        borderWidth: 1,
        borderColor: 'green.500',
      }}
      mb={4}
      {...rest}
    />
  );
};
