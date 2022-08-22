import { VStack } from 'native-base';
import { Header } from '../Components/Header';
import { Input } from '../Components/input';
import { Button } from '../Components/button';


export function Register() {
  return (
    <VStack flex={1} p={6} bg = "gray.600" >
        <Header title = "Nova solicitação"/>
        
        <Input
            placeholder='Numero do Patrimônio'
            mt = {4}
        />

        <Input
            placeholder='Descrição do problema'
            flex={1}
            mt={5}
            multiline
            textAlignVertical='top'
        />

        <Button
        title= 'cadastrar'
        mt={5}
        />
    </VStack>
  );
}