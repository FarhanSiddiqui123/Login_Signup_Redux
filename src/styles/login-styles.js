import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgb(32,53,70)',
        flexDirection:'column',
       
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        color:'white',
        textAlign:'center',
    },
    infoContainer:{
        position: "relative",
        left:0,
        right:0,
        bottom:0,
        height: 0,
        padding:20,
    },
    input:{
        height:50,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color:'white',
        textAlign:'center',
        marginBottom:20,
        paddingHorizontal:10
    },
    buttonContainer:{
        backgroundColor: 'yellow',
        paddingVertical :30,
    },
    signUpbuttonContainer:{
         position: "relative",
        backgroundColor: 'white',
        paddingVertical :30,
        
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:18,
        textAlign: 'center',

    },
    LoadingContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    },
});

export default styles;
