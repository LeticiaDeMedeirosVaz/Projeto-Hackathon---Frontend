import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function SimulacaoResultScreen({ route, navigation }) {
  const { resultados } = route.params;

  const handleConfirmar = () => {
    Alert.alert('Solicitação confirmada', 'Sua solicitação foi enviada com sucesso!');
    navigation.popToTop();
  };

  const handleCancelar = () => {
    Alert.alert('Solicitação cancelada', 'Você pode iniciar uma nova simulação.');
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Resultados da Simulação</Text>
      
      <View style={styles.resultBox}>
        <Text style={styles.resultText}>Produto: {resultados.nome}</Text>
        <Text style={styles.resultText}>Taxa Mensal: {resultados.taxaMensal}</Text>
        <Text style={styles.resultText}>Valor da Parcela: R$ {resultados.parcelaMensal}</Text>
        <Text style={styles.resultText}>Valor Total Com Juros: R$ {resultados.valorTotalComJuros}</Text>
        <Text style={styles.resultText}>Prazo: {resultados.prazoMeses} meses</Text>
      </View>

      <Text style={styles.subTitle}>Resultado da Simulação (Mês a Mês)</Text>


      {resultados?.memoriaCalculo?.map((mes, index) => (
        <View key={index} style={styles.mesBox}>
          <Text style={styles.mesText}>Mês: {mes.mes}</Text>
          <Text style={styles.mesText}>Parcela: R$ {mes.parcela.toFixed(2)}</Text>
          <Text style={styles.mesText}>Juros: R$ {mes.juros.toFixed(2)}</Text>
          <Text style={styles.mesText}>Amortização: R$ {mes.amortizacao.toFixed(2)}</Text>
          <Text style={styles.mesText}>Saldo Devedor: R$ {mes.saldoDevedor.toFixed(2)}</Text>
        </View>
      ))}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmar}>
          <Text style={styles.buttonText}>Confirmar Solicitação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancelar}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E5F1FC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  resultBox: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },
  mesBox: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 1,
  },
  mesText: {
    fontSize: 14,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 40,
  },
  confirmButton: {
    backgroundColor: '#0d581c',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#801905',
    padding: 22,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});