import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import api from '../services/api';
import emprestimoPersonalizadoIcon from '../assets/emprestimopersonalizado.jpg';
import pagarParcelaIcon from '../assets/pagarparcela.jpg';
import meusEmprestimosIcon from '../assets/meusemprestimos.jpg';



const ListagemDeProdutos = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchProducts();
    });
    
    const fetchProducts = async () => {
      try {
        const response = await api.get('/list');
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar a lista de produtos:', error);
        Alert.alert('Erro', 'Não foi possível carregar os produtos.');
      }
    };
    fetchProducts();
    return unsubscribe;
  }, []);



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Text style={styles.greetingText}>Olá, Cliente!</Text>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Lucas Silva</Text>
          </View>
        </View>
        <View style={styles.profileIconContainer}>
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }}
            style={styles.profileIcon}
          />
        </View>
      </View>


      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={[styles.actionButton, styles.buttonBlue]}
          onPress={() => navigation.navigate('CadastroProduto')}>
          <Image
            source={emprestimoPersonalizadoIcon}
            style={styles.actionButtonIcon}
          />
          <Text style={styles.actionButtonText}>Empréstimo Personalizado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.buttonLightBlue]}>
          <Image
            source={pagarParcelaIcon}
            style={styles.actionButtonIcon}
          />
          <Text style={styles.actionButtonText}>Pagar Parcela</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.buttonGreen]}>
          <Image
            source={meusEmprestimosIcon}
            style={styles.actionButtonIcon}
          />
          <Text style={styles.actionButtonText}>Meus Empréstimos</Text>
        </TouchableOpacity>
      </View>


      <Text style={styles.listTitle}>Empréstimos Disponíveis</Text>


      <FlatList
        data={products}
        keyExtractor={(item) => String(item.ProdutoID)}
        renderItem={({ item }) => {
          return (
            <View style={styles.productCard}>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.Nome}</Text>
                <Text style={styles.productDetails}>Taxa Anual: {`${item.TaxaAnual}%`}</Text>
                <Text style={styles.productDetails}>Prazo Máximo: {`${item.PrazoMeses} meses`}</Text>
              </View>
              <TouchableOpacity
                style={styles.simulateButton}
                onPress={() => navigation.navigate('Simulacao', { produto: item })}
              >
                <Text style={styles.buttonText}>Simular</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#0166B3',
    paddingHorizontal: 20,
    paddingVertical: 25,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'column',
  },
  greetingText: {
    fontSize: 16,
    color: '#fff',
  },
  nameContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 5,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  profileIconContainer: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 2,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  actionButton: {
    width: '30%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBlue: {
    backgroundColor: '#2D8AD8',
  },
  buttonLightBlue: {
    backgroundColor: '#6CBAFA',
  },
  buttonGreen: {
    backgroundColor: '#82D6C7',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    marginLeft: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productDetails: {
    fontSize: 14,
    color: '#555',
  },
  simulateButton: {
    backgroundColor: '#54BBAB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ListagemDeProdutos;