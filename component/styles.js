import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding : 20
    },
       input:{
        height:40,
        backgroundColor: '#F5FCFF',
        paddingLeft:10,
        marginBottom:15,
        borderRadius:5,
        fontSize:15,
        
    
    },
    datePickerStyle: {
    height:40,
        backgroundColor: '#F5FCFF',
        paddingLeft:10,
        marginBottom:15,
        borderRadius:5,
        width: 350
  },
   textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
   buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    },
    buttonContainer:{
        backgroundColor:'#3B3B98',
        padding:15,
        borderRadius:8,
        marginTop:15,
    },
    buttonGallery:{
        backgroundColor:'#3B3B98',
        padding:10,
        marginLeft : 'auto',
        borderRadius:8,
        marginTop:15,
    },
     buttonCamera:{
        backgroundColor:'#3B3B98',
        padding:10,
        marginLeft : 'auto',
        borderRadius:8,
        marginTop:15,
    },
})