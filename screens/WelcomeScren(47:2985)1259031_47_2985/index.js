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
      <View style={styles.View_47_2986} />
      <View style={styles.View_47_2987}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386d/98eb/6082b0f973f4269f11940c659a52cc95"
          }}
          style={styles.ImageBackground_47_2988}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0c4/185a/5d42a2c9e7d8bc8430b40eaf0b3f40ab"
          }}
          style={styles.ImageBackground_47_2992}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb6f/143c/75e5973e3d3ee7b58afd8724efc48556"
          }}
          style={styles.ImageBackground_47_2996}
        />
        <View style={styles.View_47_3009}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3416/ca26/c6009b3a2daaa2ab08339ee7b84e8cf7"
            }}
            style={styles.ImageBackground_47_3010}
          />
          <View style={styles.View_47_3011}>
            <Text style={styles.Text_47_3011}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_47_3012}>
        <View style={styles.View_47_3013}>
          <View style={styles.View_47_3014}>
            <Text style={styles.Text_47_3014}>
              Get The Freshest Fruit Salad Combo
            </Text>
          </View>
          <View style={styles.View_47_3015}>
            <Text style={styles.Text_47_3015}>
              We deliver the best and freshest fruit salad in town. Order for a
              combo today!!!
            </Text>
          </View>
        </View>
        <View style={styles.View_47_3016}>
          <View style={styles.View_47_3017} />
          <View style={styles.View_47_3018}>
            <Text style={styles.Text_47_3018}>Let’s Continue</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3756/4c63/c60357714311379ca3cfcd98bb79d890"
        }}
        style={styles.ImageBackground_47_3019}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d716/f2da/652857f08c96e3ab2e0a968fcebe130b"
        }}
        style={styles.ImageBackground_47_3020}
      />
      <View source={{ uri: "null" }} style={styles.View_47_3021} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10ab/5bc5/356d66bb1ed56ac5e577747883937140"
        }}
        style={styles.ImageBackground_47_3022}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_47_2986: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("64.07103825136612%"),
    minHeight: hp("64.07103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 164, 81, 1)"
  },
  View_47_2987: {
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
  ImageBackground_47_2988: {
    width: wp("6.487476094563801%"),
    height: hp("1.5482694073452976%"),
    top: hp("2.3679389328253073%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.59999186197916%")
  },
  ImageBackground_47_2992: {
    width: wp("4.072633361816407%"),
    height: hp("1.4980287499766531%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.1849853515625%")
  },
  ImageBackground_47_2996: {
    width: wp("4.533332824707031%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413481832202015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_47_3009: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_47_3010: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3011: {
    width: wp("14.399998982747395%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3011: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_47_3012: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("71.72131147540983%")
  },
  View_47_3013: {
    width: wp("75.2%"),
    minWidth: wp("75.2%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_47_3014: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3014: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_47_3015: {
    width: wp("75.2%"),
    minWidth: wp("75.2%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.054644808743163%"),
    justifyContent: "flex-end"
  },
  Text_47_3015: {
    color: "rgba(93, 87, 126, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3016: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.535519125683066%")
  },
  View_47_3017: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 164, 81, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_47_3018: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.46666666666667%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-end"
  },
  Text_47_3018: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  ImageBackground_47_3019: {
    width: wp("80.26666666666667%"),
    minWidth: wp("80.26666666666667%"),
    height: hp("35.51912568306011%"),
    minHeight: hp("35.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("21.174863387978142%"),
    resizeMode: "cover"
  },
  ImageBackground_47_3020: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("5.125910336854028%"),
    minHeight: hp("5.125910336854028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    top: hp("17.89617486338798%"),
    resizeMode: "cover"
  },
  View_47_3021: {
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
  ImageBackground_47_3022: {
    width: wp("80.26666666666667%"),
    minWidth: wp("80.26666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("57.786885245901644%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
