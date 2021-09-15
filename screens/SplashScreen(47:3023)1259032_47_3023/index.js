import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_47_3024} />
      <View style={styles.View_47_3025}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386d/98eb/6082b0f973f4269f11940c659a52cc95"
          }}
          style={styles.ImageBackground_47_3026}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0c4/185a/5d42a2c9e7d8bc8430b40eaf0b3f40ab"
          }}
          style={styles.ImageBackground_47_3030}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb6f/143c/75e5973e3d3ee7b58afd8724efc48556"
          }}
          style={styles.ImageBackground_47_3034}
        />
        <View style={styles.View_47_3047}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3416/ca26/c6009b3a2daaa2ab08339ee7b84e8cf7"
            }}
            style={styles.ImageBackground_47_3048}
          />
          <View style={styles.View_47_3049}>
            <Text style={styles.Text_47_3049}>9:41</Text>
          </View>
        </View>
      </View>
      <View source={{ uri: "null" }} style={styles.View_47_3050} />
      <View style={styles.View_47_3051}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2440/a203/8192985592cdc9f663cfebf4b27624d3"
          }}
          style={styles.ImageBackground_47_3052}
        />
        <View style={styles.View_47_3058}>
          <View style={styles.View_47_3059} />
          <View style={styles.View_47_3060}>
            <Text style={styles.Text_47_3060}>Fruit Hub</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_47_3024: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_47_3025: {
    width: wp("99.99999186197917%"),
    minWidth: wp("99.99999186197917%"),
    height: hp("6.010928440615128%"),
    minHeight: hp("6.010928440615128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_47_3026: {
    width: wp("6.487476094563801%"),
    height: hp("1.5482694073452976%"),
    top: hp("2.3679389328253073%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_47_3030: {
    width: wp("4.072633361816407%"),
    height: hp("1.4980287499766531%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_47_3034: {
    width: wp("4.533332824707031%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413481832202015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_47_3047: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_47_3048: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3049: {
    width: wp("14.399998982747395%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3049: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_47_3050: {
    width: wp("66.4%"),
    minWidth: wp("66.4%"),
    height: hp("0.0000029738078763310243%"),
    minHeight: hp("0.0000029738078763310243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("56.830596923828125%")
  },
  View_47_3051: {
    width: wp("49.06666666666666%"),
    minWidth: wp("49.06666666666666%"),
    height: hp("28.012176680434596%"),
    minHeight: hp("28.012176680434596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("41.39344262295082%")
  },
  ImageBackground_47_3052: {
    width: wp("30.133333333333333%"),
    minWidth: wp("30.133333333333333%"),
    height: hp("22.532833078519896%"),
    minHeight: hp("22.532833078519896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333336%"),
    top: hp("0%")
  },
  View_47_3058: {
    width: wp("49.06666666666666%"),
    minWidth: wp("49.06666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.54769580611766%")
  },
  View_47_3059: {
    width: wp("49.06666666666666%"),
    minWidth: wp("49.06666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 164, 81, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 0
  },
  View_47_3060: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3060: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.48,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
