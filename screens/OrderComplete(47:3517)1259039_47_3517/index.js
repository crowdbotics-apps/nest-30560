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
      <View style={styles.View_47_3518}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386d/98eb/6082b0f973f4269f11940c659a52cc95"
          }}
          style={styles.ImageBackground_47_3519}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0c4/185a/5d42a2c9e7d8bc8430b40eaf0b3f40ab"
          }}
          style={styles.ImageBackground_47_3523}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb6f/143c/75e5973e3d3ee7b58afd8724efc48556"
          }}
          style={styles.ImageBackground_47_3527}
        />
        <View style={styles.View_47_3540}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3416/ca26/c6009b3a2daaa2ab08339ee7b84e8cf7"
            }}
            style={styles.ImageBackground_47_3541}
          />
          <View style={styles.View_47_3542}>
            <Text style={styles.Text_47_3542}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_47_3543}>
        <View style={styles.View_47_3544}>
          <Text style={styles.Text_47_3544}>Congratulations!!!</Text>
        </View>
        <View style={styles.View_47_3545}>
          <Text style={styles.Text_47_3545}>
            Your order have been taken and is being attended to
          </Text>
        </View>
        <View style={styles.View_47_3546}>
          <View style={styles.View_47_3547} />
          <View style={styles.View_47_3548}>
            <View style={styles.View_47_3549} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1e8/d28a/6af1418f67bb424b3f8e52414a128d34"
              }}
              style={styles.ImageBackground_47_3550}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_47_3552}>
        <View style={styles.View_47_3553}>
          <Text style={styles.Text_47_3553}>Track order</Text>
        </View>
      </View>
      <View style={styles.View_47_3554}>
        <View style={styles.View_47_3555}>
          <Text style={styles.Text_47_3555}>Continue shopping</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_47_3518: {
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
  ImageBackground_47_3519: {
    width: wp("6.487476094563801%"),
    height: hp("1.5482694073452976%"),
    top: hp("2.367942059626345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.59999593098958%")
  },
  ImageBackground_47_3523: {
    width: wp("4.072633361816407%"),
    height: hp("1.4980287499766531%"),
    top: hp("2.3675783084389943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18498942057292%")
  },
  ImageBackground_47_3527: {
    width: wp("4.533332824707031%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.4134787054009776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110432942708%")
  },
  View_47_3540: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_47_3541: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3542: {
    width: wp("14.399998982747395%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3542: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_47_3543: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("44.80874316939891%"),
    minHeight: hp("44.80874316939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("21.85792349726776%")
  },
  View_47_3544: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%"),
    top: hp("30.054644808743173%"),
    justifyContent: "center"
  },
  Text_47_3544: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_47_3545: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.612021857923494%"),
    justifyContent: "center"
  },
  Text_47_3545: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_47_3546: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000003%"),
    top: hp("0%")
  },
  View_47_3547: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(224, 255, 229, 1)",
    borderColor: "rgba(76, 217, 100, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200
  },
  View_47_3548: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333328%"),
    top: hp("4.371584699453553%")
  },
  View_47_3549: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(76, 217, 100, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_47_3550: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("3.9617486338797825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333341%")
  },
  View_47_3552: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("74.31693989071039%"),
    backgroundColor: "rgba(255, 164, 81, 1)",
    overflow: "hidden"
  },
  View_47_3553: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-end"
  },
  Text_47_3553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3554: {
    width: wp("48.266666666666666%"),
    minWidth: wp("48.266666666666666%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.866666666666667%"),
    top: hp("88.52459016393442%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_47_3555: {
    width: wp("31.2%"),
    minWidth: wp("31.2%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-end"
  },
  Text_47_3555: {
    color: "rgba(255, 164, 81, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16,
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
