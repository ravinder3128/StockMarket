import React, { Component } from 'react';
import { View } from 'react-native';
import { Table, TableWrapper, Cell } from 'react-native-table-component';
import feed from './Feed';
import styles from './Style';
import StockTable from './Component/StockTable';

export default class App extends Component {
    constructor(props) {
        super(props);
        var stocks = {};
        feed.watch(['AAPL', 'GOO', 'IBM', 'TWTR', 'AMZN', 'FB', 'BUDU', 'TSLA', 'CAKE', 'TNT']);
        feed.onChange(function(stock) {
            stocks[stock.symbol] = stock;
            this.setState({stocks: stocks, last: stock});
        }.bind(this));
        this.state = {
            stocks: stocks
        }
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.container}>
                <Table borderStyle={{borderWidth: 1, borderColor: "#d8d8d8" }}>
                    <StockTable stocks={this.state.stocks} last={this.state.last}  />
                </Table>
            </View>
        )
    }
}
