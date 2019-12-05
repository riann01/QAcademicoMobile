import React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Icon, Text} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider mapping={mapping} theme={lightTheme}>
                    <ScrollView>
                    <Layout style={{alignItems: 'center', flex: 1}}>
                        <Layout style={styles.containerData}>
                            {/*<Image
                            source={require('../img/avatar-icon-images-4.jpg')}
                            style={{marginTop: '5%', marginBottom: '5%', height: '70%'}}
                            resizeMode="contain"
                            />*/}
                            <Text style={{fontWeight: 'bold'}}>Nome do Aluno</Text>
                            <Text style={{fontWeight: 'bold'}}>20191070130000</Text>
                        </Layout>
                        <Layout style={{flexDirection: 'row'}}>
                            <Layout style={styles.containerOpcao}>
                                <Icon name='calendar' width={32} height={32}/>
                                <Text category="h4">Histórico</Text>
                            </Layout>   
                            <Layout style={styles.containerOpcao}></Layout>   
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
        shadowColor: '#000000',
        borderTopColor: '#3B8C2E',
        borderTopWidth: 7,
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
        marginTop: '10%',
        width: '86%',
        height: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,
        flex: 1,
        marginBottom: '10%'

    },
    containerOpcao: {
        borderTopColor: '#3B8C2E',
        borderTopWidth: 7,
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
        width: '40%',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,
        alignItems: 'center',
        marginHorizontal: '3%',
    }
});

Dashboard.navigationOptions = {
    header: null,
    title: 'Dash'
}

export default Dashboard