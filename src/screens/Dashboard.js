import React from 'react';
import { StyleSheet, Image, ScrollView, StatusBar} from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Icon, Text} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { TouchableHighlight, TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';

class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider mapping={mapping} theme={lightTheme}>
                    <StatusBar
                    translucent
                    backgroundColor="#00CA74"
                    barStyle="light-content"
                    />
                    <ScrollView>
                    <Layout style={{alignItems: 'center', flex: 1, height: '100%'}}>
                        <Layout style={styles.containerData}>
                            <Icon
                            name='settings-2-outline'
                            fill='#FFFFFF'
                            width={32}
                            height={32}
                            style={{left: '44%', top: '80%'}}/>
                            <Image
                            source={require('../img/modelo.jpg')}
                            style={{marginTop: '1%', marginBottom: '5%', height: 120, width: 120, borderRadius: 60, borderColor: '#FFF', borderWidth: 3}}
                            />
                        </Layout>
                        <Layout style={{alignItems:'center', marginTop: '5%', marginBottom: '5%'}}>
                            <Text style={{color: '#000000'}} category='h5'>João da Silva</Text>
                            <Text style={{color: '#000000'}} category='h5'>20191070130000</Text>
                        </Layout>
                        <Layout style={{flexDirection: 'row'}}>
                            <Layout style={styles.containerOpcaoHistorico}>
                            <TouchableNativeFeedback style={{alignItems: 'center', width: '100%'}}
                            onPress={() => this.props.navigation.navigate('Historico')}>
                               
                                <Icon name='clock' width={64} height={64} fill='#FFFFFF' style={{marginTop: '7%', marginBottom: '7%', marginHorizontal: 7}}/>
                                <Text category="h5" style={{marginBottom: '7%', color: '#FFFFFF'}}>Histórico</Text>
                            </TouchableNativeFeedback>
                            </Layout>
                            
                            <Layout style={styles.containerOpcaoNotas}>
                                <TouchableNativeFeedback style={{alignItems: 'center', width: '100%'}}
                                onPress={() => this.props.navigation.navigate('Notas')}>
                                <Icon name='award' width={64} height={64} fill='#FFFFFF' style={{marginTop: '7%', marginBottom: '7%'}}/>
                                <Text category="h5" style={{marginBottom: '7%', color: '#FFFFFF'}}>Notas</Text>
                                </TouchableNativeFeedback>
                            </Layout>   
                        </Layout>
                        <Layout style={{flexDirection: 'row'}}>
                            <Layout style={styles.containerOpcaoHistorico}>
                                <TouchableNativeFeedback style={{alignItems: 'center', width: '100%'}}
                                onPress={() => this.props.navigation.navigate('Cal')}>
                                <Icon name='calendar' width={64} height={64} fill='#FFFFFF' style={{marginTop: '7%', marginBottom: '7%'}}/>
                                <Text category="h5" style={{marginBottom: '7%', color: '#FFFFFF'}}>Calendário</Text>
                                </TouchableNativeFeedback>
                            </Layout>
                            <Layout style={styles.containerOpcaoNotas}>
                                <Icon name='checkmark-circle' width={64} height={64} fill='#FFFFFF' style={{marginTop: '7%', marginBottom: '7%'}}/>
                                <Text category="h5" style={{marginBottom: '7%', color: '#FFFFFF'}}>Perfil</Text>
                            </Layout>   
                        </Layout>
                        <Layout style={{flexDirection: 'row'}}>
                            <Layout style={styles.containerOpcaoHistorico}>
                                <Icon name='book-open' width={64} height={64} fill='#FFFFFF' style={{marginTop: '7%', marginBottom: '7%'}}/>
                                <Text category="h5" style={{marginBottom: '7%', color: '#FFFFFF'}}>Diário</Text>
                            </Layout>
                        </Layout>
                    </Layout>
                    </ScrollView>
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
        width: '100%',
        height: 100,
        flex: 1,
        marginBottom: '10%',
        backgroundColor: '#00CA74',
        elevation: 7,
    },
    containerOpcaoHistorico: {
        borderRadius: 7,
        width: 150,
        alignItems: 'center',
        marginHorizontal: '3%',
        marginBottom: '10%',
        backgroundColor:'#0AC2BE',
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    containerOpcaoNotas: {
        borderRadius: 7,
        width: '38%',
        shadowColor: '#3B8C2E',
        shadowOffset: {
            width: 0,
            height: 3,
            color:'#3B8C2E'
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        alignItems: 'center',
        marginHorizontal: '3%',
        marginBottom: '10%',
        backgroundColor:'#0078BD'
    }
});

Dashboard.navigationOptions = {
    header: null,
    title: 'Dash'
}

export default Dashboard