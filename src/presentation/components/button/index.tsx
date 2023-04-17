import { Button, VStack, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
};

export const ButtonComponent: React.FC<Props> = ({
  title,
  variant,
  ...rest
}) => {
  return (
    <Button
      {...rest}
      w={'full'}
      h={14}
      bg={variant === 'outline' ? 'transparent' : 'green.700'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor={variant === 'outline' ? 'white' : null}
      rounded={'sm'}
      _pressed={{
        bg: variant === 'outline' ? 'gray.500' : 'green.500',
      }}
    >
      <Text
        color={variant === 'outline' ? 'green.500' : 'white'}
        fontFamily={'heading'}
        fontSize={'sm'}
      >
        {title}
      </Text>
    </Button>
  );
};
