import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base';

import BackgroundImg from '@assets/background.png';
import LogoImg from '@assets/logo-goal.png';
import { ButtonComponent } from '@components/button';
import { InputComponent } from '@components/input';

export const SignInScreen: React.FC = ({}) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack
        flex={1}
        bg={'gray.700'}
        px={10}
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

        <Center>
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

          <ButtonComponent title='Acessar' />
        </Center>

        <Center mt={24}>
          <Text
            color={'gray.100'}
            fontSize={'sm'}
            fontFamily={'body'}
            mb={3}
          >
            Ainda não tem acesso?
          </Text>
          <ButtonComponent
            title='Criar conta'
            variant={'outline'}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
};
