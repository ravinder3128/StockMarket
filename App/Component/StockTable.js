import React, {Component} from "react";
import { View } from 'react-native';
import { TableWrapper, Cell } from 'react-native-table-component';
import styles from "../Style";
import StockRow from './../Component/StockRow';

export default class StockTable extends Component {
    render () {
        var items = [];
        for (var symbol in this.props.stocks) {
            var stock = this.props.stocks[symbol];
            items.push(<StockRow key={stock.symbol} stock={stock} last={this.props.last} index={123}/>);
        }
        return (
            <View>
                <TableWrapper key={0} style={styles.head}>
                    <Cell key={1} style={styles.columnCustom} textStyle={styles.text} data="Symbol" />
                    <Cell key={2} style={styles.columnCustom} textStyle={styles.text} data="Open" />
                    <Cell key={3} style={styles.columnCustom} textStyle={styles.text} data="Current" />
                    <Cell key={4} style={styles.columnCustom} textStyle={styles.text} data="High" />
                    <Cell key={5} style={styles.columnCustom} textStyle={styles.text} data="Low" />
                </TableWrapper>
                {items}
            </View>
        );
    }
}