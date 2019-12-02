import React from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Card, Text, Button, Input } from 'react-native-ui-kitten';

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
                source={require('../img/background-inclinado-verde.png')}
                blurRadius={3}
                style={styles.imageBackground}>
                    <Layout style={styles.container} level='1'>
                        <Text style={styles.textoTitulo} category='h4'>Q-Acadêmico para IFG</Text>
                        <Image source={require('../img/logo-ifg.png')}
                        style={{
                            width: '80%',
                            height: '20%',
                            marginTop: 0,
                        }}
                        resizeMode="contain"/>
                        <Input style={styles.input} placeholder='Matrícula' keyboardType='numeric'/>
                        <Input style={styles.input} placeholder='Senha' onChangeText={text => onChangeText(text)} value={state.value} secureTextEntry={true}/>
                        <Button status='success'>Entrar</Button>
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
        height: '60%',
        top: '20%',

        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        marginBottom: '5%' 
    }
});

export default TelaInicial