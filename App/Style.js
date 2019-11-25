import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {  flexDirection: 'row', height: 40,  backgroundColor: '#f4f4f4'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 40  },
    rowCustom : { flexDirection: 'row', height: 40, borderWidth: 1, borderColor: "#d8d8d8"},
    columnCustom : { width: 70},
    text: { textAlign: 'center' },
    lastNegative: { width: 70, backgroundColor: '#ff0000'},
    lastPositive: { width: 70, backgroundColor: '#008000'}
});
