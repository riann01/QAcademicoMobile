import React from 'react';
import { StyleSheet, ImageBackground, Image, ScrollView, StatusBar } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Card, Text, Button, Input } from '@ui-kitten/components';
import { DataTable } from 'react-native-paper';

class Historico extends React.Component {
    
    render() {
        return (
            <ApplicationProvider mapping={mapping} theme={lightTheme}>
                <StatusBar
                barStyle="light-content"
                translucent={false}
                />
                <Layout >
                    <Text category='h6' style={{textAlign: 'center', marginTop:'5%'}}>
                        Curso Superior de Tecnologia em Análise e Desevolvimento de Sistemas
                    </Text>
                    <Text category='h6' style={{textAlign: 'center', marginTop:'5%', fontWeight: 'bold'}}>
                        1º Semestre
                    </Text>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Disciplina</DataTable.Title>
                            <DataTable.Title numeric>CH</DataTable.Title>
                            <DataTable.Title numeric>Nota</DataTable.Title>
                            <DataTable.Title numeric>Faltas     </DataTable.Title>
                            <DataTable.Title>Situação</DataTable.Title>
                        </DataTable.Header>
                        <DataTable.Row>
                            <DataTable.Cell>Algoritmos</DataTable.Cell>
                            <DataTable.Cell numeric>81</DataTable.Cell>
                            <DataTable.Cell numeric>10</DataTable.Cell>
                            <DataTable.Cell numeric>0     </DataTable.Cell>
                            <DataTable.Cell>Aprovado</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Ética</DataTable.Cell>
                            <DataTable.Cell numeric>27</DataTable.Cell>
                            <DataTable.Cell numeric>10</DataTable.Cell>
                            <DataTable.Cell numeric>0     </DataTable.Cell>
                            <DataTable.Cell>Aprovado</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Fundamentos da Comp.</DataTable.Cell>
                            <DataTable.Cell numeric>81</DataTable.Cell>
                            <DataTable.Cell numeric>10</DataTable.Cell>
                            <DataTable.Cell numeric>0     </DataTable.Cell>
                            <DataTable.Cell>Aprovado</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Probabilidade e Estatística</DataTable.Cell>
                            <DataTable.Cell numeric>27</DataTable.Cell>
                            <DataTable.Cell numeric>10</DataTable.Cell>
                            <DataTable.Cell numeric>0     </DataTable.Cell>
                            <DataTable.Cell>Aprovado</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Lógica</DataTable.Cell>
                            <DataTable.Cell numeric>54</DataTable.Cell>
                            <DataTable.Cell numeric>10</DataTable.Cell>
                            <DataTable.Cell numeric>0     </DataTable.Cell>
                            <DataTable.Cell>Aprovado</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Matemática</DataTable.Cell>
                            <DataTable.Cell numeric>54</DataTable.Cell>
                            <DataTable.Cell numeric>10</DataTable.Cell>
                            <DataTable.Cell numeric>0     </DataTable.Cell>
                            <DataTable.Cell>Aprovado</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Metodologia de Pesquisa</DataTable.Cell>
                            <DataTable.Cell numeric>27</DataTable.Cell>
                            <DataTable.Cell numeric>10</DataTable.Cell>
                            <DataTable.Cell numeric>0     </DataTable.Cell>
                            <DataTable.Cell>Aprovado</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>

                </Layout>
            </ApplicationProvider>
        );
    }    
}

const styles = StyleSheet.create({

});

Historico.navigationOptions = {
    title: 'Histórico'
}

export default Historico