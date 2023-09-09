import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native"
import {Feather} from '@expo/vector-icons'

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : StatusBar.currentHeight + 64

export const Header = ({username})=> {
    return (
        <View style={styles.container}>
            <View style={styles.content}>   
                <Text style={styles.username}>{username}</Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.userButton}>
                    <Feather name="user" size={27} color= "#fff"></Feather>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000000',
        paddingTop: statusBarHeigth,
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44
    },
    content:{
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    username:{
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },
    userButton:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.4)',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%"
    }
})      