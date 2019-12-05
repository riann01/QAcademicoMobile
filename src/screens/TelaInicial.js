import React from 'react';
import { StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Card, Text, Button, Input } from '@ui-kitten/components';

class TelaInicial extends React.Component {
    
    render() {
        onChangeText = (value) => {
            state.value = value ;
        }
        return (
            state = {
                value: '',
            },
            <ApplicationProvider mapping={mapping} theme={lightTheme}>
                <ImageBackground
                source={require('../img/background-if-inclinado-completo.png')}
                blurRadius={2}
                style={styles.imageBackground}>
                    <Layout style={styles.container} level='1'>
                        <Image source={require('../img/logo-qacademico.png')}
                        style={{
                            width: '80%',
                            height: '20%',
                            marginTop: '10%',
                            marginBottom: '10%'
                        }}
                        resizeMode="contain"/>
                        <Input style={styles.input} placeholder='Matrícula' keyboardType='numeric'/>
                        <Input style={styles.input} placeholder='Senha' onChangeText={text => onChangeText(text)} value={state.value} secureTextEntry={true}/>
                        <Button status='success' onPress={() => this.props.navigation.navigate('Dash')}>Entrar</Button>
                    </Layout>
                </ImageBackground>
            </ApplicationProvider>
        );
    }    
}

const styles = StyleSheet.create({
    textoTitulo: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: '5%',
        marginBottom: '5%'
    },
    imageBackground: {
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%',
    },
    container: {
        width: '80%',
        height: '55%',
        top: '22%',
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        marginBottom: '5%' 
    }
});

TelaInicial.navigationOptions = {
    header: null,
    title: 'Home'
  }

export default TelaInicial