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
      <View style={styles.View_47_3557} />
      <View style={styles.View_47_3558}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386d/98eb/6082b0f973f4269f11940c659a52cc95"
          }}
          style={styles.ImageBackground_47_3559}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0c4/185a/5d42a2c9e7d8bc8430b40eaf0b3f40ab"
          }}
          style={styles.ImageBackground_47_3563}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb6f/143c/75e5973e3d3ee7b58afd8724efc48556"
          }}
          style={styles.ImageBackground_47_3567}
        />
        <View style={styles.View_47_3580}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3416/ca26/c6009b3a2daaa2ab08339ee7b84e8cf7"
            }}
            style={styles.ImageBackground_47_3581}
          />
          <View style={styles.View_47_3582}>
            <Text style={styles.Text_47_3582}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_47_3583}>
        <View style={styles.View_47_3584} />
        <View style={styles.View_47_3585}>
          <View style={styles.View_47_3586}>
            <Text style={styles.Text_47_3586}>Go back</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86d0/46b1/b24c499e62c7f7830b86024320d26b05"
            }}
            style={styles.ImageBackground_47_3587}
          />
        </View>
      </View>
      <View style={styles.View_47_3588}>
        <Text style={styles.Text_47_3588}>My Basket</Text>
      </View>
      <View style={styles.View_47_3589}>
        <View style={styles.View_47_3590} />
        <View style={styles.View_47_3591}>
          <Text style={styles.Text_47_3591}>Checkout</Text>
        </View>
      </View>
      <View style={styles.View_47_3592}>
        <View style={styles.View_47_3593}>
          <View style={styles.View_47_3594}>
            <Text style={styles.Text_47_3594}>60,000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6649/5c90/6e946b284c5895e4f30c5f876996b98c"
            }}
            style={styles.ImageBackground_47_3595}
          />
        </View>
        <View style={styles.View_47_3597}>
          <Text style={styles.Text_47_3597}>Total</Text>
        </View>
      </View>
      <View style={styles.View_47_3598}>
        <View style={styles.View_47_3599} />
        <View style={styles.View_47_3600}>
          <View style={styles.View_47_3601}>
            <Text style={styles.Text_47_3601}>Quinoa fruit salad</Text>
          </View>
          <View style={styles.View_47_3602}>
            <Text style={styles.Text_47_3602}>2packs</Text>
          </View>
        </View>
        <View style={styles.View_47_3603}>
          <View style={styles.View_47_3604}>
            <Text style={styles.Text_47_3604}>20,000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72c8/8e7d/6f7f9a9a10abc011daab5989d111c257"
            }}
            style={styles.ImageBackground_47_3605}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f110/bfb8/591e846867cbb4cf8f741a78411d0476"
          }}
          style={styles.ImageBackground_47_3607}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2f6/5ea5/061f37efaa19f3a87871806afc41e2c8"
          }}
          style={styles.ImageBackground_47_3608}
        />
      </View>
      <View style={styles.View_47_3609}>
        <View style={styles.View_47_3610} />
        <View style={styles.View_47_3611}>
          <View style={styles.View_47_3612}>
            <Text style={styles.Text_47_3612}>Tropical fruit salad</Text>
          </View>
          <View style={styles.View_47_3613}>
            <Text style={styles.Text_47_3613}>2packs</Text>
          </View>
        </View>
        <View style={styles.View_47_3614}>
          <View style={styles.View_47_3615}>
            <Text style={styles.Text_47_3615}>20,000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72c8/8e7d/6f7f9a9a10abc011daab5989d111c257"
            }}
            style={styles.ImageBackground_47_3616}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c41/2332/40e383f4c304439ed5ac38995955b630"
          }}
          style={styles.ImageBackground_47_3618}
        />
      </View>
      <View style={styles.View_47_3619}>
        <View style={styles.View_47_3620} />
        <View style={styles.View_47_3621}>
          <View style={styles.View_47_3622}>
            <Text style={styles.Text_47_3622}>Melon fruit salad</Text>
          </View>
          <View style={styles.View_47_3623}>
            <Text style={styles.Text_47_3623}>2packs</Text>
          </View>
        </View>
        <View style={styles.View_47_3624}>
          <View style={styles.View_47_3625}>
            <Text style={styles.Text_47_3625}>20,000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72c8/8e7d/6f7f9a9a10abc011daab5989d111c257"
            }}
            style={styles.ImageBackground_47_3626}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f110/bfb8/591e846867cbb4cf8f741a78411d0476"
          }}
          style={styles.ImageBackground_47_3628}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b64/6f0a/f99cafa84907cbb7f1b3ab5a050956ef"
          }}
          style={styles.ImageBackground_47_3629}
        />
      </View>
      <View style={styles.View_47_3630} />
      <View style={styles.View_47_3631}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c371/64e6/f1eb28da56037ca6f7d92079181786b4"
          }}
          style={styles.ImageBackground_47_3632}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0fa/cdde/863c3988f283af57a5b99c146ed4af0a"
          }}
          style={styles.ImageBackground_47_3633}
        />
      </View>
      <View style={styles.View_47_3635} />
      <View style={styles.View_47_3636} />
      <View style={styles.View_47_3637}>
        <View style={styles.View_47_3638}>
          <Text style={styles.Text_47_3638}>Complete Order</Text>
        </View>
      </View>
      <View style={styles.View_47_3639}>
        <View style={styles.View_47_3640}>
          <Text style={styles.Text_47_3640}>Card Holders Name</Text>
        </View>
        <View style={styles.View_47_3641} />
        <View style={styles.View_47_3642}>
          <Text style={styles.Text_47_3642}>Adolphus Chris</Text>
        </View>
      </View>
      <View style={styles.View_47_3643}>
        <View style={styles.View_47_3644}>
          <Text style={styles.Text_47_3644}>Card Number</Text>
        </View>
        <View style={styles.View_47_3645} />
        <View style={styles.View_47_3646}>
          <Text style={styles.Text_47_3646}>1234 5678 9012 1314</Text>
        </View>
      </View>
      <View style={styles.View_47_3647}>
        <View style={styles.View_47_3648}>
          <Text style={styles.Text_47_3648}>Date</Text>
        </View>
        <View style={styles.View_47_3649}>
          <Text style={styles.Text_47_3649}>CCV</Text>
        </View>
        <View style={styles.View_47_3650} />
        <View style={styles.View_47_3651} />
        <View style={styles.View_47_3652}>
          <Text style={styles.Text_47_3652}>10/30</Text>
        </View>
        <View style={styles.View_47_3653}>
          <Text style={styles.Text_47_3653}>123</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 164, 81, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_47_3557: {
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
  View_47_3558: {
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
  ImageBackground_47_3559: {
    width: wp("6.487476094563801%"),
    height: hp("1.5482694073452976%"),
    top: hp("2.367942059626345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_47_3563: {
    width: wp("4.072633361816407%"),
    height: hp("1.4980287499766531%"),
    top: hp("2.3675783084389943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_47_3567: {
    width: wp("4.533332824707031%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.4134787054009776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_47_3580: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_47_3581: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3582: {
    width: wp("14.399998982747395%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3582: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_47_3583: {
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
  View_47_3584: {
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
  View_47_3585: {
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
  View_47_3586: {
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
  Text_47_3586: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_47_3587: {
    width: wp("2.666666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3588: {
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
  Text_47_3588: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.24,
    textTransform: "none"
  },
  View_47_3589: {
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
  View_47_3590: {
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
  View_47_3591: {
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
  Text_47_3591: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3592: {
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
  View_47_3593: {
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
  View_47_3594: {
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
  Text_47_3594: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.24,
    textTransform: "none"
  },
  ImageBackground_47_3595: {
    width: wp("5.333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3597: {
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
  Text_47_3597: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3598: {
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
  View_47_3599: {
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
  View_47_3600: {
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
  View_47_3601: {
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
  Text_47_3601: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3602: {
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
  Text_47_3602: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_47_3603: {
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
  View_47_3604: {
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
  Text_47_3604: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  ImageBackground_47_3605: {
    width: wp("4.266666666666667%"),
    height: hp("1.748633905838096%"),
    top: hp("0.6830601092896167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_3607: {
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
  ImageBackground_47_3608: {
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
  View_47_3609: {
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
  View_47_3610: {
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
  View_47_3611: {
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
  View_47_3612: {
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
  Text_47_3612: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3613: {
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
  Text_47_3613: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_47_3614: {
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
  View_47_3615: {
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
  Text_47_3615: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  ImageBackground_47_3616: {
    width: wp("4.266666666666667%"),
    height: hp("1.748633905838096%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_3618: {
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
  View_47_3619: {
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
  View_47_3620: {
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
  View_47_3621: {
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
  View_47_3622: {
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
  Text_47_3622: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3623: {
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
  Text_47_3623: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_47_3624: {
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
  View_47_3625: {
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
  Text_47_3625: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  ImageBackground_47_3626: {
    width: wp("4.266666666666667%"),
    height: hp("1.748633905838096%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_3628: {
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
  ImageBackground_47_3629: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("3.4054010943636865%"),
    minHeight: hp("3.4054010943636865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("2.7322404371584668%")
  },
  View_47_3630: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.4000000059604645
  },
  View_47_3631: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("32.37704918032787%")
  },
  ImageBackground_47_3632: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_47_3633: {
    width: wp("7.679999796549479%"),
    height: hp("3.9344261252814956%"),
    top: hp("1.3114762436496719%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5599934895833343%")
  },
  View_47_3635: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("69.80874316939891%"),
    minHeight: hp("69.80874316939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.12021857923497%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_47_3636: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("97.81420765027322%"),
    backgroundColor: "rgba(255, 164, 81, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_47_3637: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("101.09289617486338%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_47_3638: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-end"
  },
  Text_47_3638: {
    color: "rgba(255, 164, 81, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3639: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("46.58469945355191%")
  },
  View_47_3640: {
    width: wp("41.06666666666667%"),
    minWidth: wp("41.06666666666667%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3640: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_47_3641: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(243, 241, 241, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_47_3642: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.923497267759565%"),
    justifyContent: "flex-end"
  },
  Text_47_3642: {
    color: "rgba(194, 189, 189, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_47_3643: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("63.661202185792355%")
  },
  View_47_3644: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3644: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_47_3645: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606554%"),
    backgroundColor: "rgba(243, 241, 241, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_47_3646: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.923497267759565%"),
    justifyContent: "flex-end"
  },
  Text_47_3646: {
    color: "rgba(194, 189, 189, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_47_3647: {
    width: wp("85.06666666666666%"),
    minWidth: wp("85.06666666666666%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("80.73770491803278%")
  },
  View_47_3648: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3648: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_47_3649: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.333333333333336%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3649: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_47_3650: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(243, 241, 241, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_47_3651: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.333333333333336%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(243, 241, 241, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_47_3652: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000002%"),
    top: hp("7.923497267759572%"),
    justifyContent: "flex-end"
  },
  Text_47_3652: {
    color: "rgba(194, 189, 189, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_47_3653: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.733333333333334%"),
    top: hp("7.923497267759572%"),
    justifyContent: "flex-end"
  },
  Text_47_3653: {
    color: "rgba(194, 189, 189, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
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
