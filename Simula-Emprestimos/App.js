import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListagemDeProdutos from './src/views/ListagemdeProdutos';
import SimulacaoInputScreen from './src/views/SimulacaoInputScreen';
import SimulacaoResultScreen from './src/views/SimulacaoResultScreen';
import CadastroProduto from './src/views/CadastroProduto'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Listagem"
          component={ListagemDeProdutos}
          options={{ title: "Simula Empréstimos" }}
        />
        <Stack.Screen
          name="Simulacao"
          component={SimulacaoInputScreen}
          options={{ title: "Empréstimo Solicitação" }}
        />
        <Stack.Screen
          name="Resultados"
          component={SimulacaoResultScreen}
          options={{ title: "Resultado da Simulação" }}
        />
        <Stack.Screen
          name="CadastroProduto"
          component={CadastroProduto}
          options={{ title: "Novo Empréstimo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
