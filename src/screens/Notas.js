import React from 'react';
import { StyleSheet, ImageBackground, Image, ScrollView, StatusBar } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Card, Text, Button, Input } from '@ui-kitten/components';
import { DataTable } from 'react-native-paper';

class Notas extends React.Component {
    
    render() {
        return (
            <ApplicationProvider mapping={mapping} theme={lightTheme}>
                <StatusBar
                barStyle="light-content"
                translucent={false}
                />
                <Layout >
                    <Text category='h3' style={{textAlign: 'center', marginTop: '5%', marginBottom: '5%'}}>Algoritmos</Text>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Avaliação</DataTable.Title>
                            <DataTable.Title>Valor</DataTable.Title>
                            <DataTable.Title>Peso</DataTable.Title>
                            <DataTable.Title>Nota</DataTable.Title>
                        </DataTable.Header>
                        <DataTable.Row>
                            <DataTable.Cell>Atividade</DataTable.Cell>
                            <DataTable.Cell>2</DataTable.Cell>
                            <DataTable.Cell>1</DataTable.Cell>
                            <DataTable.Cell>2</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Prova</DataTable.Cell>
                            <DataTable.Cell>5</DataTable.Cell>
                            <DataTable.Cell>1</DataTable.Cell>
                            <DataTable.Cell>5</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Prova</DataTable.Cell>
                            <DataTable.Cell>3</DataTable.Cell>
                            <DataTable.Cell>1</DataTable.Cell>
                            <DataTable.Cell>3</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>TOTAL</DataTable.Cell>
                            <DataTable.Cell>10</DataTable.Cell>
                            <DataTable.Cell>1</DataTable.Cell>
                            <DataTable.Cell>10</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </Layout>
            </ApplicationProvider>
        );
    }    
}

const styles = StyleSheet.create({

});

Notas.navigationOptions = {
    title: 'Histórico'
}

export default Notas