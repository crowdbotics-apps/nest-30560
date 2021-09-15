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
      <View style={styles.View_47_3426} />
      <View style={styles.View_47_3427}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386d/98eb/6082b0f973f4269f11940c659a52cc95"
          }}
          style={styles.ImageBackground_47_3428}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0c4/185a/5d42a2c9e7d8bc8430b40eaf0b3f40ab"
          }}
          style={styles.ImageBackground_47_3432}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb6f/143c/75e5973e3d3ee7b58afd8724efc48556"
          }}
          style={styles.ImageBackground_47_3436}
        />
        <View style={styles.View_47_3449}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3416/ca26/c6009b3a2daaa2ab08339ee7b84e8cf7"
            }}
            style={styles.ImageBackground_47_3450}
          />
          <View style={styles.View_47_3451}>
            <Text style={styles.Text_47_3451}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_47_3452}>
        <View style={styles.View_47_3453} />
        <View style={styles.View_47_3454}>
          <View style={styles.View_47_3455}>
            <Text style={styles.Text_47_3455}>Go back</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86d0/46b1/b24c499e62c7f7830b86024320d26b05"
            }}
            style={styles.ImageBackground_47_3456}
          />
        </View>
      </View>
      <View style={styles.View_47_3457}>
        <Text style={styles.Text_47_3457}>My Basket</Text>
      </View>
      <View style={styles.View_47_3458}>
        <View style={styles.View_47_3459} />
        <View style={styles.View_47_3460}>
          <Text style={styles.Text_47_3460}>Checkout</Text>
        </View>
      </View>
      <View style={styles.View_47_3461}>
        <View style={styles.View_47_3462}>
          <View style={styles.View_47_3463}>
            <Text style={styles.Text_47_3463}>60,000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6649/5c90/6e946b284c5895e4f30c5f876996b98c"
            }}
            style={styles.ImageBackground_47_3464}
          />
        </View>
        <View style={styles.View_47_3466}>
          <Text style={styles.Text_47_3466}>Total</Text>
        </View>
      </View>
      <View style={styles.View_47_3467}>
        <View style={styles.View_47_3468} />
        <View style={styles.View_47_3469}>
          <View style={styles.View_47_3470}>
            <Text style={styles.Text_47_3470}>Quinoa fruit salad</Text>
          </View>
          <View style={styles.View_47_3471}>
            <Text style={styles.Text_47_3471}>2packs</Text>
          </View>
        </View>
        <View style={styles.View_47_3472}>
          <View style={styles.View_47_3473}>
            <Text style={styles.Text_47_3473}>20,000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72c8/8e7d/6f7f9a9a10abc011daab5989d111c257"
            }}
            style={styles.ImageBackground_47_3474}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f110/bfb8/591e846867cbb4cf8f741a78411d0476"
          }}
          style={styles.ImageBackground_47_3476}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2f6/5ea5/061f37efaa19f3a87871806afc41e2c8"
          }}
          style={styles.ImageBackground_47_3477}
        />
      </View>
      <View style={styles.View_47_3478}>
        <View style={styles.View_47_3479} />
        <View style={styles.View_47_3480}>
          <View style={styles.View_47_3481}>
            <Text style={styles.Text_47_3481}>Tropical fruit salad</Text>
          </View>
          <View style={styles.View_47_3482}>
            <Text style={styles.Text_47_3482}>2packs</Text>
          </View>
        </View>
        <View style={styles.View_47_3483}>
          <View style={styles.View_47_3484}>
            <Text style={styles.Text_47_3484}>20,000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72c8/8e7d/6f7f9a9a10abc011daab5989d111c257"
            }}
            style={styles.ImageBackground_47_3485}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c41/2332/40e383f4c304439ed5ac38995955b630"
          }}
          style={styles.ImageBackground_47_3487}
        />
      </View>
      <View style={styles.View_47_3488}>
        <View style={styles.View_47_3489} />
        <View style={styles.View_47_3490}>
          <View style={styles.View_47_3491}>
            <Text style={styles.Text_47_3491}>Melon fruit salad</Text>
          </View>
          <View style={styles.View_47_3492}>
            <Text style={styles.Text_47_3492}>2packs</Text>
          </View>
        </View>
        <View style={styles.View_47_3493}>
          <View style={styles.View_47_3494}>
            <Text style={styles.Text_47_3494}>20,000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72c8/8e7d/6f7f9a9a10abc011daab5989d111c257"
            }}
            style={styles.ImageBackground_47_3495}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f110/bfb8/591e846867cbb4cf8f741a78411d0476"
          }}
          style={styles.ImageBackground_47_3497}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b64/6f0a/f99cafa84907cbb7f1b3ab5a050956ef"
          }}
          style={styles.ImageBackground_47_3498}
        />
      </View>
      <View style={styles.View_47_3499} />
      <View style={styles.View_47_3500}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c371/64e6/f1eb28da56037ca6f7d92079181786b4"
          }}
          style={styles.ImageBackground_47_3501}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0fa/cdde/863c3988f283af57a5b99c146ed4af0a"
          }}
          style={styles.ImageBackground_47_3502}
        />
      </View>
      <View style={styles.View_47_3504} />
      <View style={styles.View_47_3505}>
        <View style={styles.View_47_3506}>
          <Text style={styles.Text_47_3506}>Pay with card</Text>
        </View>
      </View>
      <View style={styles.View_47_3507}>
        <View style={styles.View_47_3508}>
          <Text style={styles.Text_47_3508}>Pay on delivery</Text>
        </View>
      </View>
      <View style={styles.View_47_3509}>
        <View style={styles.View_47_3510}>
          <Text style={styles.Text_47_3510}>Delivery address</Text>
        </View>
        <View style={styles.View_47_3511} />
        <View style={styles.View_47_3512}>
          <Text style={styles.Text_47_3512}>
            10th avenue, Lekki, Lagos State
          </Text>
        </View>
      </View>
      <View style={styles.View_47_3513}>
        <View style={styles.View_47_3514}>
          <Text style={styles.Text_47_3514}>Number we can call</Text>
        </View>
        <View style={styles.View_47_3515} />
        <View style={styles.View_47_3516}>
          <Text style={styles.Text_47_3516}>09090605708</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 164, 81, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_47_3426: {
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
  View_47_3427: {
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
  ImageBackground_47_3428: {
    width: wp("6.487476094563801%"),
    height: hp("1.5482694073452976%"),
    top: hp("2.367942059626345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.59999186197916%")
  },
  ImageBackground_47_3432: {
    width: wp("4.072633361816407%"),
    height: hp("1.4980287499766531%"),
    top: hp("2.3675783084389943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.1849853515625%")
  },
  ImageBackground_47_3436: {
    width: wp("4.533332824707031%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.4134787054009776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_47_3449: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_47_3450: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3451: {
    width: wp("14.399998982747395%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3451: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_47_3452: {
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
  View_47_3453: {
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
  View_47_3454: {
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
  View_47_3455: {
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
  Text_47_3455: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_47_3456: {
    width: wp("2.666666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3457: {
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
  Text_47_3457: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.24,
    textTransform: "none"
  },
  View_47_3458: {
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
  View_47_3459: {
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
  View_47_3460: {
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
  Text_47_3460: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3461: {
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
  View_47_3462: {
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
  View_47_3463: {
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
  Text_47_3463: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.24,
    textTransform: "none"
  },
  ImageBackground_47_3464: {
    width: wp("5.333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3466: {
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
  Text_47_3466: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3467: {
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
  View_47_3468: {
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
  View_47_3469: {
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
  View_47_3470: {
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
  Text_47_3470: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3471: {
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
  Text_47_3471: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_47_3472: {
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
  View_47_3473: {
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
  Text_47_3473: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  ImageBackground_47_3474: {
    width: wp("4.266666666666667%"),
    height: hp("1.748633905838096%"),
    top: hp("0.6830601092896167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_3476: {
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
  ImageBackground_47_3477: {
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
  View_47_3478: {
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
  View_47_3479: {
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
  View_47_3480: {
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
  View_47_3481: {
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
  Text_47_3481: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3482: {
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
  Text_47_3482: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_47_3483: {
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
  View_47_3484: {
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
  Text_47_3484: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  ImageBackground_47_3485: {
    width: wp("4.266666666666667%"),
    height: hp("1.748633905838096%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_3487: {
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
  View_47_3488: {
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
  View_47_3489: {
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
  View_47_3490: {
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
  View_47_3491: {
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
  Text_47_3491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3492: {
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
  Text_47_3492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_47_3493: {
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
  View_47_3494: {
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
  Text_47_3494: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  ImageBackground_47_3495: {
    width: wp("4.266666666666667%"),
    height: hp("1.748633905838096%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_3497: {
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
  ImageBackground_47_3498: {
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
  View_47_3499: {
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
  View_47_3500: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.733333333333334%"),
    top: hp("46.72131147540984%")
  },
  ImageBackground_47_3501: {
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
  ImageBackground_47_3502: {
    width: wp("7.679999796549479%"),
    height: hp("3.9344261252814956%"),
    top: hp("1.3114762436496719%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5600016276041657%")
  },
  View_47_3504: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("55.46448087431693%"),
    minHeight: hp("55.46448087431693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55.46448087431693%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_47_3505: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.93333333333333%"),
    top: hp("97.26775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_47_3506: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666673%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-end"
  },
  Text_47_3506: {
    color: "rgba(255, 164, 81, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3507: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("97.26775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_47_3508: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-end"
  },
  Text_47_3508: {
    color: "rgba(255, 164, 81, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3509: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("60.92896174863388%")
  },
  View_47_3510: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3510: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_47_3511: {
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
  View_47_3512: {
    width: wp("63.733333333333334%"),
    minWidth: wp("63.733333333333334%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.923497267759558%"),
    justifyContent: "flex-end"
  },
  Text_47_3512: {
    color: "rgba(194, 189, 189, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_47_3513: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("78.00546448087432%")
  },
  View_47_3514: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3514: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_47_3515: {
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
  View_47_3516: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.923497267759558%"),
    justifyContent: "flex-end"
  },
  Text_47_3516: {
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
