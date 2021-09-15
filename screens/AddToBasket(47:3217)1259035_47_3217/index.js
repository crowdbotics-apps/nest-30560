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
      <View style={styles.View_47_3218}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386d/98eb/6082b0f973f4269f11940c659a52cc95"
          }}
          style={styles.ImageBackground_47_3219}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0c4/185a/5d42a2c9e7d8bc8430b40eaf0b3f40ab"
          }}
          style={styles.ImageBackground_47_3223}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb6f/143c/75e5973e3d3ee7b58afd8724efc48556"
          }}
          style={styles.ImageBackground_47_3227}
        />
        <View style={styles.View_47_3240}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3416/ca26/c6009b3a2daaa2ab08339ee7b84e8cf7"
            }}
            style={styles.ImageBackground_47_3241}
          />
          <View style={styles.View_47_3242}>
            <Text style={styles.Text_47_3242}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_47_3243} />
      <View style={styles.View_47_3244}>
        <View style={styles.View_47_3245} />
        <View style={styles.View_47_3246}>
          <Text style={styles.Text_47_3246}>Add to basket</Text>
        </View>
      </View>
      <View style={styles.View_47_3247}>
        <View style={styles.View_47_3248} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4665/3ff0/ee3b99d92ea77d47edf55f5e24f37be5"
          }}
          style={styles.ImageBackground_47_3249}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f707/a208/d533eb1f7fa6fd184ee46f1927b48ed5"
        }}
        style={styles.ImageBackground_47_3250}
      />
      <View style={styles.View_47_3251}>
        <Text style={styles.Text_47_3251}>Quinoa Fruit Salad</Text>
      </View>
      <View style={styles.View_47_3252}>
        <Text style={styles.Text_47_3252}>One Pack Contains:</Text>
      </View>
      <View style={styles.View_47_3253}>
        <Text style={styles.Text_47_3253}>
          Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.
        </Text>
      </View>
      <View style={styles.View_47_3254}>
        <View style={styles.View_47_3255}>
          <Text style={styles.Text_47_3255}>2,000</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6649/5c90/6e946b284c5895e4f30c5f876996b98c"
          }}
          style={styles.ImageBackground_47_3256}
        />
      </View>
      <View style={styles.View_73_362}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6649/5c90/6e946b284c5895e4f30c5f876996b98c"
          }}
          style={styles.ImageBackground_73_364}
        />
      </View>
      <View style={styles.View_47_3258}>
        <View style={styles.View_47_3259} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef09/a3fc/95baf1c506e746e373a72fadfb801055"
          }}
          style={styles.ImageBackground_47_3260}
        />
      </View>
      <View style={styles.View_47_3261}>
        <View style={styles.View_47_3262} />
        <View style={styles.View_47_3263}>
          <View style={styles.View_47_3264}>
            <Text style={styles.Text_47_3264}>Go back</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86d0/46b1/b24c499e62c7f7830b86024320d26b05"
            }}
            style={styles.ImageBackground_47_3265}
          />
        </View>
      </View>
      <View style={styles.View_47_3266}>
        <View style={styles.View_47_3267} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c70/70d8/cbc999790371dbb9f6407a4873dd67b5"
          }}
          style={styles.ImageBackground_47_3268}
        />
      </View>
      <View style={styles.View_47_3269}>
        <Text style={styles.Text_47_3269}>1 </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b889/7546/6e5ed9beb03c98a5a0be95aeb5f21d85"
        }}
        style={styles.ImageBackground_47_3270}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b889/7546/6e5ed9beb03c98a5a0be95aeb5f21d85"
        }}
        style={styles.ImageBackground_47_3271}
      />
      <View style={styles.View_47_3272}>
        <Text style={styles.Text_47_3272}>
          If you are looking for a new fruit salad to eat today, quinoa is the
          perfect brunch for you. make
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eefe/e0af/86c632c37a47e20028de02d328378e7b"
        }}
        style={styles.ImageBackground_47_3273}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 164, 81, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_47_3218: {
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
  ImageBackground_47_3219: {
    width: wp("6.487476094563801%"),
    height: hp("1.5482694073452976%"),
    top: hp("2.3679389328253073%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_47_3223: {
    width: wp("4.072633361816407%"),
    height: hp("1.4980287499766531%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_47_3227: {
    width: wp("4.533332824707031%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413481832202015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_47_3240: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_47_3241: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3242: {
    width: wp("14.399998982747395%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3242: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_47_3243: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("68.0327868852459%"),
    minHeight: hp("68.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42.89617486338798%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_47_3244: {
    width: wp("58.4%"),
    minWidth: wp("58.4%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%"),
    top: hp("101.09289617486338%")
  },
  View_47_3245: {
    width: wp("58.4%"),
    minWidth: wp("58.4%"),
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
  View_47_3246: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666676%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-end"
  },
  Text_47_3246: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3247: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("101.63934426229508%")
  },
  View_47_3248: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 247, 240, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_47_3249: {
    width: wp("6.4%"),
    height: hp("2.933576719357016%"),
    top: hp("1.9125683060109253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%")
  },
  ImageBackground_47_3250: {
    width: wp("46.93333333333333%"),
    minWidth: wp("46.93333333333333%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93333333333333%"),
    top: hp("14.48087431693989%")
  },
  View_47_3251: {
    width: wp("61.6%"),
    minWidth: wp("61.6%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("48.36065573770492%"),
    justifyContent: "center"
  },
  Text_47_3251: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_47_3252: {
    width: wp("41.06666666666667%"),
    minWidth: wp("41.06666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("70.3551912568306%"),
    justifyContent: "center"
  },
  Text_47_3252: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_47_3253: {
    width: wp("86.93333333333332%"),
    minWidth: wp("86.93333333333332%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("77.45901639344262%"),
    justifyContent: "center"
  },
  Text_47_3253: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3254: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333334%"),
    top: hp("57.103825136612016%")
  },
  View_47_3255: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666657%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3255: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.24,
    textTransform: "none"
  },
  ImageBackground_47_3256: {
    width: wp("5.333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_73_362: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333334%"),
    top: hp("58.46994535519126%")
  },
  ImageBackground_73_364: {
    width: wp("5.333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3258: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666667%"),
    top: hp("57.240437158469945%")
  },
  View_47_3259: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 242, 231, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_47_3260: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("1.092896174863391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333293%")
  },
  View_47_3261: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("8.743169398907105%")
  },
  View_47_3262: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_47_3263: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0.8196721311475397%")
  },
  View_47_3264: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333325%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_47_3264: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_47_3265: {
    width: wp("2.666666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3266: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("57.240437158469945%")
  },
  View_47_3267: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(237, 235, 235, 1)",
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_47_3268: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("2.367938932825311%")
  },
  View_47_3269: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    top: hp("57.103825136612016%"),
    justifyContent: "flex-end"
  },
  Text_47_3269: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.24,
    textTransform: "none"
  },
  ImageBackground_47_3270: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65.98360655737704%")
  },
  ImageBackground_47_3271: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("86.74863387978142%")
  },
  View_47_3272: {
    width: wp("75.73333333333333%"),
    minWidth: wp("75.73333333333333%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("90.02732240437157%"),
    justifyContent: "center"
  },
  Text_47_3272: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_47_3273: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("75%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
