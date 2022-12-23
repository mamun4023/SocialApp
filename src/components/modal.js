import React from "react"
import {
    View, 
    Modal, 
    TouchableWithoutFeedback, 
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import {theme} from '@/theme'

export function ModalDown({open, setOpen, height, children}){
    return(
            <Modal
                visible = {open}
                transparent = {true}
                animationType = "slide"
            >
                <TouchableWithoutFeedback onPress={()=> setOpen(false)}>
                    <View style = {styles.container}> 
                        <View style = {[styles.body, {
                             height : height,
                        }]}> 
                            {children}
                        </View>
                    </View>
              </TouchableWithoutFeedback>
            </Modal>
    )
}


ModalDown.prototype = {
    open : PropTypes.string.isRequired,
    setOpen : PropTypes.func.isRequired,
    height : PropTypes.string
}

const styles = StyleSheet.create({
   container : {
    flex : 1,
    backgroundColor: theme.light.colors.primaryBg,
   },
   body: {
    width : '100%',
    backgroundColor : theme.light.colors.white,
    position : 'absolute',
    bottom : 0,
    padding : 10
   } 
})