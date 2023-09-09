import { View, Text, StyleSheet } from "react-native"

export const Balance = ({balance, expensives})=> {
    return (
        <View style={styles.container}>
            <View style={styles.item}>       
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.moneyContent}>
                    <Text style={styles.currencySimbol}>R$</Text>
                    <Text style={styles.balance}>{balance}</Text>
                </View>
            </View>
            <View style={styles.item}>       
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.moneyContent}>
                    <Text style={styles.currencySimbol}>R$</Text>
                    <Text style={styles.expensives}>{expensives}</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#888888",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -25,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom :22
    },
    itemTitle: {
        fontSize: 20,
        color: "#dadada"
    },
    moneyContent: {
        flexDirection: "row",
        alignItems: "center"
    },
    currencySimbol: {
        color: "#dadada",
        marginRight: 4
    },
    balance: {
        fontSize: 22,
        color: "#2ecc71",
        fontWeight: "bold"
    },
    expensives: {
        fontSize: 22,
        color: "#e74c3c",
        fontWeight: "bold"

    }
})