import { VStack } from 'native-base';
import { useRoute } from '@react-navigation/native';

import { Header } from '../Components/Header';

type RouteParams = {
  orderId: string
}


export function Details() {
  const route = useRoute()
  const {} = route.params;
  return (
    <VStack flex={1} bg='gray.700'>
        <Header title='Solicitação' />
    </VStack>
  );
}