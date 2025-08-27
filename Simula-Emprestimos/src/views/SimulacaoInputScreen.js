import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, ScrollView, StatusBar } from 'react-native';
import { simularEmprestimo } from '../utils/SimularEmprestimo';

export default function SimulacaoInputScreen({ route, navigation }) {
  const [valorEmprestimo, setValorEmprestimo] = useState('');
  const [prazoMeses, setPrazoMeses] = useState('');
  const { produto } = route.params;

  const handleSimular = () => {
    if (!valorEmprestimo || !prazoMeses) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const resultados = simularEmprestimo(produto, parseFloat(valorEmprestimo), parseInt(prazoMeses));
    navigation.navigate('Resultados', { resultados: resultados });
  };

return (
  <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
    <StatusBar barStyle="light-content" />


    <ImageBackground
      source={require('../assets/fundopersonalizadosimula.jpg')}
      style={styles.hero}
      imageStyle={styles.heroImage}
    >
      <Text style={styles.heroTitle}>Simulação do{'\n'}Empréstimo</Text>
    </ImageBackground>


    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>Informe abaixo os dados para Simulação:</Text>
    </View>


    <TextInput
      style={styles.input}
      placeholder="Qual o valor do empréstimo?"
      value={valorEmprestimo}
      onChangeText={setValorEmprestimo}
      keyboardType="numeric"
    />

    <TextInput
      style={styles.input}
      placeholder="Digite o prazo em meses (Ex.6)"
      value={prazoMeses}
      onChangeText={setPrazoMeses}
      keyboardType="numeric"
    />

    <TouchableOpacity style={styles.button} onPress={handleSimular}>
      <Text style={styles.buttonText}>Simular</Text>
    </TouchableOpacity>

    <View style={{ height: 24 }} />
  </ScrollView>
);

}

const COLORS = {
  bg: '#EEF3F2',
  navy: '#0E395B',
  border: '#D0D5DD',
  text: '#1F2937',
  muted: '#6B7280',
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.bg,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
  },


  hero: {
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    padding: 16,
  },
  heroImage: { resizeMode: 'cover' },
  heroTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 28,
    maxWidth: '70%',
    marginBottom: 26,

  },


  sectionHeader: {
    alignSelf: 'stretch',
    backgroundColor: COLORS.navy,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginTop: 16,
    marginBottom: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(16,24,40,0.10)',
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  sectionHeaderText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
  },

  caption: {
    color: COLORS.muted,
    marginBottom: 8,
    textAlign: 'center',
  },


  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    color: COLORS.text,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },


  button: {
    width: '50%',
    alignSelf: 'center',
    backgroundColor: COLORS.navy,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: 'rgba(16,24,40,0.12)',
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
