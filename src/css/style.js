import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "\"Roboto\", sans-serif",
        "background": "#F7F8FA",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "root": {
        "minHeight": 100 * vh
    },
    "component--appbar": {
        "position": "fixed",
        "width": "100%",
        "zIndex": 10
    },
    "component--content": {
        "paddingTop": 64
    }
});