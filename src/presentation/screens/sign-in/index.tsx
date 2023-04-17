import { VStack, Image, Center, Text, Heading } from 'native-base';

import BackgroundImg from '@assets/background.png';
import LogoImg from '@assets/logo-goal.png';
import { InputComponent } from '@components/input';

export const SignInScreen: React.FC = ({}) => {
  return (
    <VStack
      flex={1}
      bg={'gray.700'}
    >
      <Image
        source={BackgroundImg}
        alt='Pessoas treinando'
        resizeMode='contain'
        position={'absolute'}
      />

      <Center my={24}>
        <Image
          source={LogoImg}
          width={170}
          height={70}
          alt='logo goal'
        />
        <Text
          color={'gray.100'}
          fontSize={'sm'}
        >
          Treine sem limites
        </Text>
      </Center>

      <Center p={10}>
        <Heading
          color={'gray.100'}
          fontSize={'xl'}
          mb={6}
          fontFamily={'heading'}
        >
          Acesse sua conta
        </Heading>

        <InputComponent
          placeholder='Digite seu email'
          autoCapitalize='none'
          keyboardType='email-address'
        />

        <InputComponent
          placeholder='Digite sua senha'
          secureTextEntry
        />
      </Center>
    </VStack>
  );
};
