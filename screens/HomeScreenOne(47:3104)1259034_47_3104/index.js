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
      <View style={styles.View_47_3105}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386d/98eb/6082b0f973f4269f11940c659a52cc95"
          }}
          style={styles.ImageBackground_47_3106}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0c4/185a/5d42a2c9e7d8bc8430b40eaf0b3f40ab"
          }}
          style={styles.ImageBackground_47_3110}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb6f/143c/75e5973e3d3ee7b58afd8724efc48556"
          }}
          style={styles.ImageBackground_47_3114}
        />
        <View style={styles.View_47_3127}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3416/ca26/c6009b3a2daaa2ab08339ee7b84e8cf7"
            }}
            style={styles.ImageBackground_47_3128}
          />
          <View style={styles.View_47_3129}>
            <Text style={styles.Text_47_3129}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_47_3130}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecf4/0084/ece1bf31f2fe0056d1beb3aab3f16888"
          }}
          style={styles.ImageBackground_47_3131}
        />
      </View>
      <View style={styles.View_47_3134}>
        <View style={styles.View_47_3135} />
        <View style={styles.View_47_3136}>
          <Text style={styles.Text_47_3136}>Search for fruit salad combos</Text>
        </View>
        <View style={styles.View_47_3137}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbc4/ab15/90c7eb150b7aa97514b67042606fda33"
            }}
            style={styles.ImageBackground_47_3138}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4b7/cbae/409aa1941660587b2299308f96da0159"
          }}
          style={styles.ImageBackground_47_3141}
        />
      </View>
      <View style={styles.View_47_3146}>
        <View style={styles.View_47_3147}>
          <Text style={styles.Text_47_3147}>
            Hello Tony, What fruit salad combo do you want today?
          </Text>
        </View>
      </View>
      <View style={styles.View_47_3148}>
        <Text style={styles.Text_47_3148}>Recommended Combo</Text>
      </View>
      <View style={styles.View_47_3149}>
        <View style={styles.View_47_3150} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab69/3bdc/6b161df380b5890f9c54351379d3136a"
          }}
          style={styles.ImageBackground_47_3151}
        />
        <View style={styles.View_47_3152}>
          <Text style={styles.Text_47_3152}>Honey lime combo</Text>
        </View>
        <View style={styles.View_47_3153}>
          <View style={styles.View_47_3154}>
            <Text style={styles.Text_47_3154}>2,000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b77/b9d1/ca96b74f3bf852211e6c4b8410fd5402"
            }}
            style={styles.ImageBackground_47_3155}
          />
        </View>
        <View style={styles.View_47_3157}>
          <View style={styles.View_47_3158} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2082/3364/0044c94ef8c8ca024ac8f9b6979da859"
            }}
            style={styles.ImageBackground_47_3159}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d95/b3d8/ec8c6730730dd868474aab74d25818ef"
          }}
          style={styles.ImageBackground_47_3160}
        />
      </View>
      <View style={styles.View_47_3161}>
        <View style={styles.View_47_3162} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab69/3bdc/6b161df380b5890f9c54351379d3136a"
          }}
          style={styles.ImageBackground_47_3163}
        />
        <View style={styles.View_47_3164}>
          <Text style={styles.Text_47_3164}>Berry mango combo</Text>
        </View>
        <View style={styles.View_47_3165}>
          <View style={styles.View_47_3166}>
            <Text style={styles.Text_47_3166}>8,000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b77/b9d1/ca96b74f3bf852211e6c4b8410fd5402"
            }}
            style={styles.ImageBackground_47_3167}
          />
        </View>
        <View style={styles.View_47_3169}>
          <View style={styles.View_47_3170} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2082/3364/0044c94ef8c8ca024ac8f9b6979da859"
            }}
            style={styles.ImageBackground_47_3171}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42c2/9354/bcc64c9b619c9109e949f12908395bb4"
          }}
          style={styles.ImageBackground_47_3172}
        />
      </View>
      <View style={styles.View_47_3173}>
        <View style={styles.View_47_3174} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab69/3bdc/6b161df380b5890f9c54351379d3136a"
          }}
          style={styles.ImageBackground_47_3175}
        />
        <View style={styles.View_47_3176}>
          <Text style={styles.Text_47_3176}>Quinoa fruit salad</Text>
        </View>
        <View style={styles.View_47_3177}>
          <View style={styles.View_47_3178}>
            <Text style={styles.Text_47_3178}>10,000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b77/b9d1/ca96b74f3bf852211e6c4b8410fd5402"
            }}
            style={styles.ImageBackground_47_3179}
          />
        </View>
        <View style={styles.View_47_3181}>
          <View style={styles.View_47_3182} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf91/9f59/289a734b52655acc8347c086fbaa2adc"
            }}
            style={styles.ImageBackground_47_3183}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/591f/ac58/41d6ba6783394047b1ae3759763e8393"
          }}
          style={styles.ImageBackground_47_3184}
        />
      </View>
      <View style={styles.View_47_3185}>
        <View style={styles.View_47_3186} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab69/3bdc/6b161df380b5890f9c54351379d3136a"
          }}
          style={styles.ImageBackground_47_3187}
        />
        <View style={styles.View_47_3188}>
          <Text style={styles.Text_47_3188}>Tropical fruit salad</Text>
        </View>
        <View style={styles.View_47_3189}>
          <View style={styles.View_47_3190}>
            <Text style={styles.Text_47_3190}>10,000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b77/b9d1/ca96b74f3bf852211e6c4b8410fd5402"
            }}
            style={styles.ImageBackground_47_3191}
          />
        </View>
        <View style={styles.View_47_3193}>
          <View style={styles.View_47_3194} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf91/9f59/289a734b52655acc8347c086fbaa2adc"
            }}
            style={styles.ImageBackground_47_3195}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d79/03a4/6f9fcad357e66555cfebbb952f320b9f"
          }}
          style={styles.ImageBackground_47_3196}
        />
      </View>
      <View style={styles.View_47_3197}>
        <View style={styles.View_47_3198} />
        <View style={styles.View_47_3199}>
          <Text style={styles.Text_47_3199}>melon fruit salad</Text>
        </View>
        <View style={styles.View_47_3200}>
          <View style={styles.View_47_3201}>
            <Text style={styles.Text_47_3201}>10,000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b77/b9d1/ca96b74f3bf852211e6c4b8410fd5402"
            }}
            style={styles.ImageBackground_47_3202}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f7b/59c5/678288876e28221a88f2dd82ee868be7"
          }}
          style={styles.ImageBackground_47_3204}
        />
      </View>
      <View style={styles.View_47_3205}>
        <View style={styles.View_47_3206}>
          <View style={styles.View_47_3207}>
            <Text style={styles.Text_47_3207}>Popular</Text>
          </View>
          <View style={styles.View_47_3208}>
            <Text style={styles.Text_47_3208}>New combo</Text>
          </View>
          <View style={styles.View_47_3209}>
            <Text style={styles.Text_47_3209}>Top</Text>
          </View>
        </View>
        <View style={styles.View_47_3210}>
          <View style={styles.View_47_3211}>
            <Text style={styles.Text_47_3211}>Hottest</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5a8/1a93/86dd45ad098f3c4ee8bcc3d3e63219c0"
            }}
            style={styles.ImageBackground_47_3212}
          />
        </View>
      </View>
      <View style={styles.View_47_3213}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b88/f49f/a9518cf4e41901a0c61c525b981e32c6"
          }}
          style={styles.ImageBackground_47_3214}
        />
        <View style={styles.View_47_3216}>
          <Text style={styles.Text_47_3216}>My basket</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_47_3105: {
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
  ImageBackground_47_3106: {
    width: wp("6.487476094563801%"),
    height: hp("1.5482694073452976%"),
    top: hp("2.3679389328253073%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_47_3110: {
    width: wp("4.072633361816407%"),
    height: hp("1.4980287499766531%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_47_3114: {
    width: wp("4.533332824707031%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413481832202015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_47_3127: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_47_3128: {
    width: wp("14.399998982747395%"),
    height: hp("2.8688521984496402%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3129: {
    width: wp("14.399998982747395%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3129: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_47_3130: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("12.021857923497267%")
  },
  ImageBackground_47_3131: {
    width: wp("5.866666666666666%"),
    height: hp("1.5027322404371584%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3134: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("28.005464480874316%")
  },
  View_47_3135: {
    width: wp("76.8%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(243, 244, 249, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_47_3136: {
    width: wp("42.4%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%"),
    justifyContent: "center"
  },
  Text_47_3136: {
    color: "rgba(134, 134, 158, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_3137: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.7322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3999999999999995%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_47_3138: {
    width: wp("4.266720581054687%"),
    height: hp("2.18575170131329%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_3141: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666668%"),
    top: hp("2.595628415300549%")
  },
  View_47_3146: {
    width: wp("68.53333333333333%"),
    minWidth: wp("68.53333333333333%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("16.80327868852459%")
  },
  View_47_3147: {
    width: wp("68.53333333333333%"),
    minWidth: wp("68.53333333333333%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3147: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_47_3148: {
    width: wp("56.8%"),
    minWidth: wp("56.8%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("41.12021857923497%"),
    justifyContent: "center"
  },
  Text_47_3148: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.24,
    textTransform: "none"
  },
  View_47_3149: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("48.77049180327869%")
  },
  View_47_3150: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  ImageBackground_47_3151: {
    width: wp("4.266666666666667%"),
    height: hp("1.9557177694768852%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_47_3152: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("15.027322404371581%"),
    justifyContent: "flex-end"
  },
  Text_47_3152: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3153: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("19.535519125683052%")
  },
  View_47_3154: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3154: {
    color: "rgba(240, 134, 38, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_47_3155: {
    width: wp("4.266666666666667%"),
    height: hp("1.748633905838096%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3157: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666667%"),
    top: hp("19.26229508196721%")
  },
  View_47_3158: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
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
  ImageBackground_47_3159: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%")
  },
  ImageBackground_47_3160: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("3.0054644808743163%"),
    resizeMode: "cover"
  },
  View_47_3161: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.06666666666666%"),
    top: hp("48.77049180327869%")
  },
  View_47_3162: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  ImageBackground_47_3163: {
    width: wp("4.266666666666667%"),
    height: hp("1.9557177694768852%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_47_3164: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666673%"),
    top: hp("15.027322404371581%"),
    justifyContent: "flex-end"
  },
  Text_47_3164: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3165: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    top: hp("19.535519125683052%")
  },
  View_47_3166: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333336%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3166: {
    color: "rgba(240, 134, 38, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_47_3167: {
    width: wp("4.266666666666667%"),
    height: hp("1.748633905838096%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3169: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666674%"),
    top: hp("19.26229508196721%")
  },
  View_47_3170: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
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
  ImageBackground_47_3171: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999943%")
  },
  ImageBackground_47_3172: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600000000000009%"),
    top: hp("3.0054644808743163%")
  },
  View_47_3173: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("88.25136612021858%")
  },
  View_47_3174: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
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
  ImageBackground_47_3175: {
    width: wp("4.266666666666667%"),
    height: hp("1.9557177694768852%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.799999999999997%")
  },
  View_47_3176: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("12.43169398907105%"),
    justifyContent: "flex-end"
  },
  Text_47_3176: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3177: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("16.393442622950815%")
  },
  View_47_3178: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333336%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3178: {
    color: "rgba(240, 134, 38, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_47_3179: {
    width: wp("4.266666666666667%"),
    height: hp("1.748633905838096%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3181: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.799999999999997%"),
    top: hp("16.120218579234987%")
  },
  View_47_3182: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 227, 201, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_47_3183: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("0.8196721311475272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%")
  },
  ImageBackground_47_3184: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333331%"),
    top: hp("2.5956284153005384%")
  },
  View_47_3185: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("88.25136612021858%")
  },
  View_47_3186: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
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
  ImageBackground_47_3187: {
    width: wp("4.266666666666667%"),
    height: hp("1.9557177694768852%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.799999999999997%")
  },
  View_47_3188: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("12.43169398907105%"),
    justifyContent: "flex-end"
  },
  Text_47_3188: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3189: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("16.393442622950815%")
  },
  View_47_3190: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333336%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3190: {
    color: "rgba(240, 134, 38, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_47_3191: {
    width: wp("4.266666666666667%"),
    height: hp("1.748633905838096%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_3193: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.799999999999997%"),
    top: hp("16.120218579234987%")
  },
  View_47_3194: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 227, 201, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_47_3195: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("0.8196721311475272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%")
  },
  ImageBackground_47_3196: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("6.853516375432249%"),
    minHeight: hp("6.853516375432249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.86666666666666%"),
    top: hp("4.37158469945355%")
  },
  View_47_3197: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%"),
    top: hp("88.25136612021858%")
  },
  View_47_3198: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
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
  View_47_3199: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("12.43169398907105%"),
    justifyContent: "flex-end"
  },
  Text_47_3199: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3200: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("16.393442622950815%")
  },
  View_47_3201: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3201: {
    color: "rgba(240, 134, 38, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_47_3202: {
    width: wp("4.266666666666667%"),
    height: hp("1.748633905838096%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_3204: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3999999999999915%"),
    top: hp("5.327868852459019%")
  },
  View_47_3205: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("80.32786885245902%")
  },
  View_47_3206: {
    width: wp("55.46666666666666%"),
    minWidth: wp("55.46666666666666%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.46666666666667%"),
    top: hp("0.6830601092896131%")
  },
  View_47_3207: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3207: {
    color: "rgba(147, 141, 181, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3208: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3208: {
    color: "rgba(147, 141, 181, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3209: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.6%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3209: {
    color: "rgba(147, 141, 181, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_47_3210: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_47_3211: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_47_3211: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.24,
    textTransform: "none"
  },
  ImageBackground_47_3212: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333323%"),
    top: hp("4.644808743169406%")
  },
  View_47_3213: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.66666666666667%"),
    top: hp("9.562841530054644%")
  },
  ImageBackground_47_3214: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%")
  },
  View_47_3216: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "center"
  },
  Text_47_3216: {
    color: "rgba(39, 33, 77, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
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
