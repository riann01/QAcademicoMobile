import React from 'react';
import { StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Card, Text, Button, Input, Avatar } from 'react-native-ui-kitten';

const Header = () => (
    <CardHeader
      title='Title'
      description='Description'
    />
  );

class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
            <ApplicationProvider mapping={mapping} theme={lightTheme}>
                <Card header={Header}>
                    <Avatar
                    style={styles.item}
                    size='giant'
                    source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }}
                    />
                    <Layout style={{flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold'}}>Nome do Aluno</Text>
                        <Text style={{fontWeight: 'bold'}}>20191070130000</Text>
                    </Layout>
                </Card>
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
    }
});

Dashboard.navigationOptions = {
    header: null,
    title: 'Dash'
}

export default Dashboard