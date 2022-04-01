import React from 'react';
import Header from './layouts/Header.jsx';
import Layout from './layouts/Layout.jsx';
import Footer from './layouts/Footer.jsx';
import Main from './layouts/Main.jsx';
class App extends React.Component {
    render() {
        return (
            <Layout>
                <Header/>
                HI
                <Main> HI </Main>
                <Footer/>
            </Layout>
        );
    }
}

export default App;