import React, {Component} from "react";
import { AnimatedBackgroundColorView } from 'react-native-animated-background-color-view';
import { View } from 'react-native';
import { TableWrapper, Cell } from 'react-native-table-component';
import styles from "../Style";

export default class StockRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            fadeOutColor: "#ffffff"
        };
    }
    componentWillReceiveProps(nextProps){
        if (this.props.stock === this.props.last) {
            let Color = this.props.stock.change < 0 ? "#ff0000" : "#008000";
            this.setState({fadeOutColor: Color });
        }
        setTimeout( () => {
            this.setfadeOutColor();
        },1000);
    }
    setfadeOutColor() {
        this.setState({fadeOutColor: "#ffffff"});
    }
    render () {
        var fadeOutColor = this.state.fadeOutColor;
        return (
            <View>
                <TableWrapper key={this.props.index} style={styles.rowCustom}>
                    <Cell key={1} style={styles.columnCustom} textStyle={styles.text} data={this.props.stock.symbol} />
                    <Cell key={2} style={styles.columnCustom} textStyle={styles.text} data={this.props.stock.open} />
                    <AnimatedBackgroundColorView style={styles.columnCustom} textStyle={styles.text} color={fadeOutColor} initialColor='#ffffff' >
                        <Cell key={3} textStyle={styles.text} data={this.props.stock.last} />
                    </AnimatedBackgroundColorView>
                    <Cell key={4} style={styles.columnCustom} textStyle={styles.text} data={this.props.stock.high} />
                    <Cell key={5} style={styles.columnCustom} textStyle={styles.text} data={this.props.stock.low} />
                </TableWrapper>
            </View>
        );
    }
}