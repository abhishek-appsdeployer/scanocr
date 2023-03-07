import React, {useState, useRef} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
import RNTextDetector from 'rn-text-detector';

const Ocrscan = ({navigation}) => {
  const [imageUri, setImageUri] = useState(null);
  const [textBlocks, setTextBlocks] = useState([]);
  const [filtertext,setfilterText] =useState()
  const cameraRef = useRef(null);

  const handleOCR = async imageUri => {
    console.log('handleocr', imageUri);

    try {
      const options = {
        quality: 0.8,
        base64: true,
      };

      const visionResp = await RNTextDetector.detectFromUri(imageUri);
      const textValues = visionResp.map(obj => obj.text);
      const filteredTextValues = textValues.filter(text => text.toLowerCase().includes("order"));
    //   setfilterText(filteredTextValues[0])
    console.log('data', filteredTextValues);
    const orderId = filteredTextValues[0].substring(9);
    setfilterText(orderId)
      console.log('data', textValues);
      setTextBlocks(textValues);
      // navigation
      navigation.navigate("sample",{orderId})
    } catch (error) {
      console.log('errors', error);
    }
  };

  const takePicture = async () => {
    console.log('take picture');
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);

      setImageUri(data.uri);
      handleOCR(data.uri);
    }
  };

  return (
    <View style={{flex: 1}}>
      {imageUri ? (
        <View style={{flex: 1}}>
          <Image
            source={{uri: imageUri}}
            style={{flex: 1}}
            resizeMode="contain"
          />
          <Text>{filtertext}</Text>

          {
            textBlocks.map((text, index) => (
            <Text key={index} style={{color: 'red'}}>
              {text}
            </Text>
          ))}
        </View>
      ) : (
        <RNCamera
          ref={cameraRef}
          style={{flex: 1}}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
        />
      )}
      {!imageUri && (
        <TouchableOpacity onPress={takePicture}>
          <View style={{backgroundColor: 'white', padding: 10}}>
            <Text style={{fontSize: 20}}>Captures</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Ocrscan;
