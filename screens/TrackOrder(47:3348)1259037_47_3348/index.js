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
      <View style={styles.View_47_3349} />
      <View style={styles.View_47_3350}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386d/98eb/6082b0f973f4269f11940c659a52cc95"
          }}
          style={styles.ImageBackground_47_3351}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0c4/185a/5d42a2c9e7d8bc8430b40eaf0b3f40ab"
          }}
          style={styles.ImageBackground_47_3355}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb6f/143c/75e5973e3d3ee7b58afd8724efc48556"
          }}
          style={styles.ImageBackground_47_3359}
        />
        <View style={styles.View_47_3372}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3416/ca26/c6009b3a2daaa2ab08339ee7b84e8cf7"
            }}
            style={styles.ImageBackground_47_3373}
          />
          <View style={styles.View_47_3374}>
            <Text style={styles.Text_47_3374}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_47_3375}>
        <View style={styles.View_47_3376} />
        <View style={styles.View_47_3377}>
          <View style={styles.View_47_3378}>
            <Text style={styles.Text_47_3378}>Go back</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86d0/46b1/b24c499e62c7f7830b86024320d26b05"
            }}
            style={styles.ImageBackground_47_3379}
          />
        </View>
      </View>
      <View style={styles.View_47_3380}>
        <Text style={styles.Text_47_3380}>Delivery Status</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab21/28aa/e383ea4b7bb244ba81aabf4f5701c31e"
        }}
        style={styles.ImageBackground_47_3381}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab21/28aa/e383ea4b7bb244ba81aabf4f5701c31e"
        }}
        style={styles.ImageBackground_47_3382}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab21/28aa/e383ea4b7bb244ba81aabf4f5701c31e"
        }}
        style={styles.ImageBackground_47_3383}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e29c/f586/a311a6e29861ebd1a639fe6c54085315"
        }}
        style={styles.ImageBackground_47_3384}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afc7/e8f7/3d976caa59f626974c0f39bd3f7ea86c"
        }}
        style={styles.ImageBackground_47_3385}
      />
      <View style={styles.View_47_3386}>
        <View style={styles.View_47_3387} />
        <View style={styles.View_47_3388}>
          <View style={styles.View_47_3389}>
            <Text style={styles.Text_47_3389}>Order Is Being Delivered</Text>
          </View>
          <View style={styles.View_47_3390}>
            <Text style={styles.Text_47_3390}>
              Your delivery agent is coming
            </Text>
          </View>
        </View>
        <View style={styles.View_47_3391}>
          <View style={styles.View_47_3392} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97c6/8607/bf37701d5be67519cd7b29003001c940"
            }}
            style={styles.ImageBackground_47_3393}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/660b/1701/7589e4943883d5118b3758fdb7f44605"
          }}
          style={styles.ImageBackground_47_3397}
        />
      </View>
      <View style={styles.View_47_3398}>
        <View style={styles.View_47_3399} />
        <View style={styles.View_47_3400}>
          <Text style={styles.Text_47_3400}>Order Taken</Text>
        </View>
        <View style={styles.View_47_3401}>
          <View style={styles.View_47_3402} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d149/a4c6/e16f3a0b3c52c2928d32920a7b57799d"
            }}
            style={styles.ImageBackground_47_3403}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df96/6572/3b27f4ec81af67b80f25c0ab8f5c69cc"
          }}
          style={styles.ImageBackground_47_3405}
        />
      </View>
      <View style={styles.View_47_3406}>
        <View style={styles.View_47_3407} />
        <View style={styles.View_47_3408}>
          <Text style={styles.Text_47_3408}>Order Is Being Prepared</Text>
        </View>
        <View style={styles.View_47_3409}>
          <View style={styles.View_47_3410} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d149/a4c6/e16f3a0b3c52c2928d32920a7b57799d"
            }}
            style={styles.ImageBackground_47_3411}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/910c/506c/0b116d1c6517c4cf62ec4a23fa720953"
          }}
          style={styles.ImageBackground_47_3413}
        />
      </View>
      <View style={styles.View_47_3414}>
        <View style={styles.View_47_3415} />
        <View style={styles.View_47_3416}>
          <Text style={styles.Text_47_3416}>Order Received</Text>
        </View>
        <View style={styles.View_47_3417}>
          <View style={styles.View_47_3418} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2999/0afa/9880259aaf9d439fa7b7b7a25595b7a9"
            }}
            style={styles.ImageBackground_47_3419}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a40d/fab1/1ac1d7971bccf762a02b144e893fd27f"
          }}
          style={styles.ImageBackground_47_3421}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 164, 81, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_47_3349: {
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
  View_47_3350: {
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
  ImageBackground_47_3351: {
    width: wp("6.487476094563801%"),
    height: hp("1.5482694073452976%"),
    top: hp("2.367942059626345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_47_3355: {
    width: wp("4.072633361816407%"),
    height: hp("1.4980287499766531%"),
    top: hp("2.3675783084389943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_47_3359: {
    width: wp("4.533332824707031%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.4134787054009776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_47_3372: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_47_3373: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3374: {
    width: wp("14.399998982747395%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3374: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_47_3375: {
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
  View_47_3376: {
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
  View_47_3377: {
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
  View_47_3378: {
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
  Text_47_3378: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_47_3379: {
    width: wp("2.666666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3380: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.466666666666665%"),
    top: hp("9.836065573770492%"),
    justifyContent: "center"
  },
  Text_47_3380: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.24,
    textTransform: "none"
  },
  ImageBackground_47_3381: {
    width: wp("4.6625482355011625e-7%"),
    minWidth: wp("4.6625482355011625e-7%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("34.42622950819672%")
  },
  ImageBackground_47_3382: {
    width: wp("4.6625482355011625e-7%"),
    minWidth: wp("4.6625482355011625e-7%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("49.72677595628415%")
  },
  ImageBackground_47_3383: {
    width: wp("4.6625482355011625e-7%"),
    minWidth: wp("4.6625482355011625e-7%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("86.0655737704918%")
  },
  ImageBackground_47_3384: {
    width: wp("2.214710396704807e-7%"),
    minWidth: wp("2.214710396704807e-7%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("65.02732240437157%")
  },
  ImageBackground_47_3385: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("68.0327868852459%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_47_3386: {
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
  View_47_3387: {
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
  View_47_3388: {
    width: wp("41.06666666666667%"),
    minWidth: wp("41.06666666666667%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.6%"),
    top: hp("1.2295081967213193%")
  },
  View_47_3389: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3389: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3390: {
    width: wp("41.06666666666667%"),
    minWidth: wp("41.06666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639294%"),
    justifyContent: "flex-end"
  },
  Text_47_3390: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_47_3391: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("1.639344262295083%")
  },
  View_47_3392: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 164, 81, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_47_3393: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.092896174863391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%")
  },
  ImageBackground_47_3397: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333333%"),
    top: hp("0.5464480874316919%"),
    resizeMode: "cover"
  },
  View_47_3398: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("25.136612021857925%")
  },
  View_47_3399: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 250, 235, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_47_3400: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.6%"),
    top: hp("2.8688524590163915%"),
    justifyContent: "flex-end"
  },
  Text_47_3400: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3401: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.8%"),
    top: hp("2.7322404371584668%")
  },
  View_47_3402: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
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
  ImageBackground_47_3403: {
    width: wp("2.687999979654948%"),
    height: hp("1.3770491699051988%"),
    top: hp("0.9508226738601451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8560058593749886%")
  },
  ImageBackground_47_3405: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("5.909119277703957%"),
    minHeight: hp("5.909119277703957%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("1.366120218579237%"),
    resizeMode: "cover"
  },
  View_47_3406: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("40.43715846994536%")
  },
  View_47_3407: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 239, 246, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_47_3408: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.6%"),
    top: hp("2.868852459016388%"),
    justifyContent: "flex-end"
  },
  Text_47_3408: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3409: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.8%"),
    top: hp("2.7322404371584668%")
  },
  View_47_3410: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
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
  ImageBackground_47_3411: {
    width: wp("2.687999979654948%"),
    height: hp("1.3770491699051988%"),
    top: hp("0.9508226738601451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8560058593749886%")
  },
  ImageBackground_47_3413: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333333%"),
    top: hp("0.5464480874316919%"),
    resizeMode: "cover"
  },
  View_47_3414: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("92.07650273224044%")
  },
  View_47_3415: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 254, 248, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_47_3416: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.6%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-end"
  },
  Text_47_3416: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3417: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("1.639344262295083%")
  },
  View_47_3418: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
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
  ImageBackground_47_3419: {
    width: wp("4.479999796549479%"),
    height: hp("2.2950818629864136%"),
    top: hp("1.5846877801613601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0933186848958325%")
  },
  ImageBackground_47_3421: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("3.8251366120218506%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
