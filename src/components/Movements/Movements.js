import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native"

export const Movements = ({item})=> {
    const [showValues, setShowValues] = useState(false)
    return (
        <TouchableOpacity style={styles.container} onPress={()=>{setShowValues(!showValues)}}>
        <Text style={styles.itemDate}>{item.data}</Text>
        <View style={styles.content}>
            <Text style={styles.itemTitle}>{item.label}</Text>
           {showValues ?  <Text style={item.type === 1 ? styles.itemIncomming : styles.itemOutcomming}>
               {item.type === 1 ? ` R$${item.value}` : `-R$${item.value}`}
            </Text> : <View style={styles.valuesHidden}></View>}
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "yellow"
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 2,
        marginBottom: 8
    },
    itemDate: {
        color: "#dadada",
        fontWeight: "bold"
    },
    itemTitle:{
        fontSize: 16,
        fontWeight: "bold"
    }, 
    itemIncomming: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#2ecc71"
    },
    itemOutcomming: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#e74c3c",
    },
    valuesHidden: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: "#dadada",
        borderRadius: 8,
    }

})