import React from 'react';
import { StyleSheet, ImageBackground, Image, ScrollView, StatusBar } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Card, Text, Button, Input } from '@ui-kitten/components';
import { Agenda, LocaleConfig } from 'react-native-calendars';

class Calendario extends React.Component {
    
    render() {
        LocaleConfig.locales['br'] = {
            monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
            monthNamesShort: ['Jan.','Fev.','Mar.','Abril','Mai.','Jun.','Jul.','Ago','Set.','Out.','Nov.','Dec.'],
            dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
            dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
            today: 'Aujourd\'hui'
        };
        LocaleConfig.defaultLocale = 'br';
        return (
            <ApplicationProvider mapping={mapping} theme={lightTheme}>
                <StatusBar
                barStyle="light-content"
                translucent={false}
                />
                <Layout >
                    <Agenda items={{
                        '2019-05-22': [{text: 'Primeira prova de Algoritmos'}],
                        '2019-12-1': [{text: 'Entrega do trabalho de Lógica'}],
                        '2012-12-13': [{text: 'EFechamento de Notas'}],
                        '2019-05-25': [{text: 'Segunda prova de Algoritmos'}]
                    }}
                    minDate={'2019-01-01'}
                    maxDate={'2019-12-31'}
                    pastScrollRange={12}
                    futureScrollRange={12}/>
                </Layout>
            </ApplicationProvider>
        );
    }    
}

const styles = StyleSheet.create({

});

Calendario.navigationOptions = {
    title: 'Calendário'
}

export default Calendario