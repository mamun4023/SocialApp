import React from "react"
import {
    View, 
    Modal, 
    TouchableWithoutFeedback, 
    StyleSheet
} from 'react-native';
import {theme} from '@/theme'

export function ModalDown({open, setOpen, children}){
    return(
            <Modal
                visible = {open}
                transparent = {true}
                animationType = "slide"
            >
                <TouchableWithoutFeedback onPress={()=> setOpen(false)}>
                    <View style = {styles.container}> 
                        <View style = {styles.body}> {children} </View>
                    </View>
              </TouchableWithoutFeedback>
            </Modal>
    )
}

const styles = StyleSheet.create({
   container : {
    flex : 1,
    backgroundColor: theme.light.colors.primaryBg,
   },
   body: {
    height : 200,
    width : '100%',
    backgroundColor : theme.light.colors.white,
    position : 'absolute',
    bottom : 0,
   } 
})