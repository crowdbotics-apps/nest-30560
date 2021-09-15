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
      <View style={styles.View_47_3275} />
      <View style={styles.View_47_3276}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386d/98eb/6082b0f973f4269f11940c659a52cc95"
          }}
          style={styles.ImageBackground_47_3277}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0c4/185a/5d42a2c9e7d8bc8430b40eaf0b3f40ab"
          }}
          style={styles.ImageBackground_47_3281}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb6f/143c/75e5973e3d3ee7b58afd8724efc48556"
          }}
          style={styles.ImageBackground_47_3285}
        />
        <View style={styles.View_47_3298}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3416/ca26/c6009b3a2daaa2ab08339ee7b84e8cf7"
            }}
            style={styles.ImageBackground_47_3299}
          />
          <View style={styles.View_47_3300}>
            <Text style={styles.Text_47_3300}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_47_3301}>
        <View style={styles.View_47_3302} />
        <View style={styles.View_47_3303}>
          <View style={styles.View_47_3304}>
            <Text style={styles.Text_47_3304}>Go back</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86d0/46b1/b24c499e62c7f7830b86024320d26b05"
            }}
            style={styles.ImageBackground_47_3305}
          />
        </View>
      </View>
      <View style={styles.View_47_3306}>
        <Text style={styles.Text_47_3306}>My Basket</Text>
      </View>
      <View style={styles.View_47_3307}>
        <View style={styles.View_47_3308} />
        <View style={styles.View_47_3309}>
          <Text style={styles.Text_47_3309}>Checkout</Text>
        </View>
      </View>
      <View style={styles.View_47_3310}>
        <View style={styles.View_47_3311}>
          <View style={styles.View_47_3312}>
            <Text style={styles.Text_47_3312}>60,000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6649/5c90/6e946b284c5895e4f30c5f876996b98c"
            }}
            style={styles.ImageBackground_47_3313}
          />
        </View>
        <View style={styles.View_47_3315}>
          <Text style={styles.Text_47_3315}>Total</Text>
        </View>
      </View>
      <View style={styles.View_47_3316}>
        <View style={styles.View_47_3317} />
        <View style={styles.View_47_3318}>
          <View style={styles.View_47_3319}>
            <Text style={styles.Text_47_3319}>Quinoa fruit salad</Text>
          </View>
          <View style={styles.View_47_3320}>
            <Text style={styles.Text_47_3320}>2packs</Text>
          </View>
        </View>
        <View style={styles.View_47_3321}>
          <View style={styles.View_47_3322}>
            <Text style={styles.Text_47_3322}>20,000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72c8/8e7d/6f7f9a9a10abc011daab5989d111c257"
            }}
            style={styles.ImageBackground_47_3323}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f110/bfb8/591e846867cbb4cf8f741a78411d0476"
          }}
          style={styles.ImageBackground_47_3325}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2f6/5ea5/061f37efaa19f3a87871806afc41e2c8"
          }}
          style={styles.ImageBackground_47_3326}
        />
      </View>
      <View style={styles.View_47_3327}>
        <View style={styles.View_47_3328} />
        <View style={styles.View_47_3329}>
          <View style={styles.View_47_3330}>
            <Text style={styles.Text_47_3330}>Tropical fruit salad</Text>
          </View>
          <View style={styles.View_47_3331}>
            <Text style={styles.Text_47_3331}>2packs</Text>
          </View>
        </View>
        <View style={styles.View_47_3332}>
          <View style={styles.View_47_3333}>
            <Text style={styles.Text_47_3333}>20,000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72c8/8e7d/6f7f9a9a10abc011daab5989d111c257"
            }}
            style={styles.ImageBackground_47_3334}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c41/2332/40e383f4c304439ed5ac38995955b630"
          }}
          style={styles.ImageBackground_47_3336}
        />
      </View>
      <View style={styles.View_47_3337}>
        <View style={styles.View_47_3338} />
        <View style={styles.View_47_3339}>
          <View style={styles.View_47_3340}>
            <Text style={styles.Text_47_3340}>Melon fruit salad</Text>
          </View>
          <View style={styles.View_47_3341}>
            <Text style={styles.Text_47_3341}>2packs</Text>
          </View>
        </View>
        <View style={styles.View_47_3342}>
          <View style={styles.View_47_3343}>
            <Text style={styles.Text_47_3343}>20,000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72c8/8e7d/6f7f9a9a10abc011daab5989d111c257"
            }}
            style={styles.ImageBackground_47_3344}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f110/bfb8/591e846867cbb4cf8f741a78411d0476"
          }}
          style={styles.ImageBackground_47_3346}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b64/6f0a/f99cafa84907cbb7f1b3ab5a050956ef"
          }}
          style={styles.ImageBackground_47_3347}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 164, 81, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_47_3275: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("92.4863387978142%"),
    minHeight: hp("92.4863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.672131147540984%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_47_3276: {
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
  ImageBackground_47_3277: {
    width: wp("6.487476094563801%"),
    height: hp("1.5482694073452976%"),
    top: hp("2.367942059626345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_47_3281: {
    width: wp("4.072633361816407%"),
    height: hp("1.4980287499766531%"),
    top: hp("2.3675783084389943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_47_3285: {
    width: wp("4.533332824707031%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.4134787054009776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_47_3298: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_47_3299: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3300: {
    width: wp("14.399998982747395%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3300: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_47_3301: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("9.836065573770492%")
  },
  View_47_3302: {
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
  View_47_3303: {
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
  View_47_3304: {
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
  Text_47_3304: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_47_3305: {
    width: wp("2.666666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3306: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.8%"),
    top: hp("9.836065573770492%"),
    justifyContent: "center"
  },
  Text_47_3306: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.24,
    textTransform: "none"
  },
  View_47_3307: {
    width: wp("53.06666666666666%"),
    minWidth: wp("53.06666666666666%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.53333333333333%"),
    top: hp("96.85792349726776%")
  },
  View_47_3308: {
    width: wp("53.06666666666666%"),
    minWidth: wp("53.06666666666666%"),
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
  View_47_3309: {
    width: wp("24.958294677734376%"),
    minWidth: wp("24.958294677734376%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.054182942708337%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-end"
  },
  Text_47_3309: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3310: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("96.85792349726776%")
  },
  View_47_3311: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  View_47_3312: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3312: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.24,
    textTransform: "none"
  },
  ImageBackground_47_3313: {
    width: wp("5.333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3315: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3316: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.136612021857925%")
  },
  View_47_3317: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 250, 235, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_47_3318: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.000000000000004%"),
    top: hp("1.2295081967213122%")
  },
  View_47_3319: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3319: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3320: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.688524590163933%"),
    justifyContent: "flex-end"
  },
  Text_47_3320: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_47_3321: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("2.8688524590163915%")
  },
  View_47_3322: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333329%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3322: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  ImageBackground_47_3323: {
    width: wp("4.266666666666667%"),
    height: hp("1.748633905838096%"),
    top: hp("0.6830601092896167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_3325: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.928961748633878%")
  },
  ImageBackground_47_3326: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("1.639344262295083%")
  },
  View_47_3327: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("55.73770491803278%")
  },
  View_47_3328: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 240, 240, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_47_3329: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.6%"),
    top: hp("1.2295081967213193%")
  },
  View_47_3330: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3330: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3331: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639294%"),
    justifyContent: "flex-end"
  },
  Text_47_3331: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_47_3332: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("2.868852459016402%")
  },
  View_47_3333: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333329%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3333: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  ImageBackground_47_3334: {
    width: wp("4.266666666666667%"),
    height: hp("1.748633905838096%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_3336: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("3.4267581877161244%"),
    minHeight: hp("3.4267581877161244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("2.5956284153005527%")
  },
  View_47_3337: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.43715846994536%")
  },
  View_47_3338: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 239, 246, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_47_3339: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.000000000000004%"),
    top: hp("1.2295081967213122%")
  },
  View_47_3340: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3340: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3341: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639294%"),
    justifyContent: "flex-end"
  },
  Text_47_3341: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_47_3342: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("2.868852459016388%")
  },
  View_47_3343: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333329%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3343: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  ImageBackground_47_3344: {
    width: wp("4.266666666666667%"),
    height: hp("1.748633905838096%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_3346: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.928961748633874%")
  },
  ImageBackground_47_3347: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("3.4054010943636865%"),
    minHeight: hp("3.4054010943636865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("2.7322404371584668%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
