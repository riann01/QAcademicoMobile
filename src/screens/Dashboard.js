import React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Card, Text, Button, Input, Avatar } from 'react-native-ui-kitten';

class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ApplicationProvider mapping={mapping} theme={lightTheme}>
                    <Layout style={{alignItems: 'center', flex: 1}}>
                        <Layout style={styles.containerData}>
                            <Image
                            source={require('../img/avatar-icon-images-4.jpg')}
                            style={{marginTop: '5%', marginBottom: '5%', height: '150%'}}
                            resizeMode="contain"
                            />
                            <Text style={{fontWeight: 'bold'}}>Nome do Aluno</Text>
                            <Text style={{fontWeight: 'bold'}}>20191070130000</Text>
                        </Layout>
                        <Layout style={{flexDirection: 'row'}}>
                            <Layout style={styles.containerOpcao}></Layout>   
                            <Layout style={styles.containerOpcao}></Layout>   
                        </Layout>
                    </Layout>
                </ApplicationProvider>
            </React.Fragment>
        );
    }    
}

const styles = StyleSheet.create({
    containerInfo: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    containerData: {
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        borderTopColor: '#3B8C2E',
        borderTopWidth: 7,
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
        marginTop: '10%',
        width: '80%',
        height: '15%'
    },
    containerOpcao: {
        borderTopColor: '#3B8C2E',
        borderTopWidth: 7,
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
        width: '40%',
        height: '40%',
    }
});

Dashboard.navigationOptions = {
    header: null,
    title: 'Dash'
}

export default Dashboard