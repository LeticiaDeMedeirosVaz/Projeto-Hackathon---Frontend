import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, ScrollView, StatusBar } from 'react-native';
import api from '../services/api';



export default function CadastroProduto() {
  const [nome, setNome] = useState('');
  const [taxaAnual, setTaxaAnual] = useState('');
  const [prazoMeses, setPrazoMeses] = useState('');

  
  const handleCreateProduct = async () => {
    try {

      if (!nome || !taxaAnual || !prazoMeses) {
        Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        return;
      }


      const newProduct = {
        Nome: nome,
        TaxaAnual: parseFloat(taxaAnual), 
        PrazoMeses: parseInt(prazoMeses) 
      };

      
      const response = await api.post('/Create', newProduct);
      console.log(response);
      
      
      Alert.alert('Sucesso', 'Produto de empréstimo personalizado criado com sucesso!');

      
      setNome('');
      setTaxaAnual('');
      setPrazoMeses('');

    } catch (error) {
      console.error('Erro ao criar o produto:', error);
      Alert.alert('Erro', 'Não foi possível criar o produto. Tente novamente');
    }
  };

return (
  <ScrollView
    contentContainerStyle={styles.container}
    showsVerticalScrollIndicator={false}
  >
    <StatusBar barStyle="light-content" />


    <ImageBackground
      source={require('../assets/fundopersonalizado.jpg')}
      style={styles.hero}
      imageStyle={styles.heroImage}
    >
      <Text style={styles.heroTitle}>
        Empréstimo{'\n'}Personalizado
      </Text>
    </ImageBackground>


    <View style={styles.heroBubble}>
      <Text style={styles.heroBubbleText}>
        Agora você pode solicitar empréstimos personalizados com condições
        especiais e que atendam suas necessidades financeiras.
      </Text>
    </View>

  
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>Cadastrar Produto de Empréstimo</Text>
    </View>


    <TextInput
      style={styles.input}
      placeholder="Escolha o nome do seu Empréstimo..."
      value={nome}
      onChangeText={setNome}
    />

    <TextInput
      style={styles.input}
      placeholder="Escolha a Taxa de Juros Anual..."
      value={taxaAnual}
      onChangeText={setTaxaAnual}
      keyboardType="numeric"
    />

    <TextInput
      style={styles.input}
      placeholder="Digite o Prazo em Meses (Ex: 36)"
      value={prazoMeses}
      onChangeText={setPrazoMeses}
      keyboardType="numeric"
    />

    <TouchableOpacity style={styles.button} onPress={handleCreateProduct}>
      <Text style={styles.buttonText}>Cadastrar</Text>
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
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
    backgroundColor: COLORS.bg,
  },


  hero: {
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    padding: 16,
    marginTop: 4,
  },
  heroImage: {
    resizeMode: 'cover',
  },
  heroTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 28,
    marginBottom: 22,
  },


  heroBubble: {
    alignSelf: 'flex-start',
    maxWidth: '92%',
    backgroundColor: '#E8ECEF',
    marginTop: -18,
    marginBottom: 16,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  heroBubbleText: {
    color: COLORS.text,
    fontSize: 13.5,
    lineHeight: 18,
  },


  sectionHeader: {
    alignSelf: 'stretch',
    backgroundColor: COLORS.navy,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 14,
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
    width: '60%',
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

