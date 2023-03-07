import React ,{useState} from 'react';
import {View, Text, StyleSheet, RadioButton, TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
const Sample = () => {
    const [isSelected, setSelected] = useState(1);
    const handlePress = () => {
        setSelected(!isSelected);
      };
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
        Sample details
      </Text>
      <View style={styles.bottomborder} />

      <View style={styles.row}>
        <Text style={(styles.left)}>Invoice number</Text>
        <Text style={styles.right}>123456987</Text>
      </View>
      <View style={styles.row}>
        <Text style={(styles.left)}>Challan date</Text>
        <Text style={styles.right}>123456987</Text>
      </View>
      <View style={styles.row}>
        <Text style={(styles.left)}>Challan Time:</Text>
        <Text style={styles.right}>12345frtrre626256987</Text>
      </View>

      <View style={styles.row}>
        <Text style={(styles.left)}>Customer Name:</Text>
        <Text style={styles.right}>
          Cowtown Infotech Services private Limited
        </Text>
      </View>
      {/* button of radios */}
      <View style={styles.row}>
      <Text  style={{fontWeight:"bold"}}>Sampling Location</Text>
      <View style={{flexDirection:"row",gap:10}}>
        <TouchableOpacity onPress={()=>setSelected(1)}>
            <View style={{flexDirection:"row",gap:5}}>
                <View style={styles.radio}>
               
{
    isSelected===1?<Text style={styles.radiobg}></Text>:null
}
                </View>
                <Text>plant</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setSelected(2)}>
            <View style={{flexDirection:"row",gap:5}}>
                <View style={styles.radio}>
               
{
    isSelected===2?<Text style={styles.radiobg}></Text>:null
}
                </View>
                <Text>site</Text>
            </View>
        </TouchableOpacity>
      </View>

      
      
       
      </View>

      {/* text */}

      <View style={styles.row}>
        <View style={(styles.left, {borderBottomWidth: 1 , width: '40%'})}>
        <Text style={{fontWeight:"bold"}}>Plant slums</Text>
        </View>
        <TextInput style={{ width: '50%',borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 0,
    paddingTop: 0,
    fontSize: 15}}>

    </TextInput>
        
       {/* <Text  style={{borderBottomWidth: 1, width: '50%'}}> <TextInput ></TextInput></Text> */}
        
        
      </View>

      {/* sampling time */}
      <View style={styles.row}>
        <Text style={(styles.left)}>Sampling time</Text>
        <Text style={styles.right}>
        <Icon name="clock" size={25} color="black" />
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={(styles.left, {borderBottomWidth: 1,fontWeight:"bold"})}>
          Sampling slump
        </Text>
        <TextInput style={{ width: '50%',borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 0,
    paddingTop: 0,
    fontSize: 15}}>
        
    </TextInput>
      </View>

      

      <View style={styles.row}>
        <Text style={(styles.left)}>Casting time</Text>
        <Text style={styles.right}>
        <Icon name="clock" size={25} color="black" />
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={(styles.left, {borderBottomWidth: 1,fontWeight:"bold"})}>Casting slump</Text>
        <TextInput style={{ width: '50%',borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 0,
    paddingTop: 0,
    fontSize: 15}}>
        
    </TextInput>
      </View>

       {/* button of radios */}
       <View style={styles.row}>
      <Text style={{fontWeight:"bold"}}>Specimen Size</Text>
      <View style={{flexDirection:"row",gap:10}}>
        <TouchableOpacity onPress={()=>setSelected(1)}>
            <View style={{flexDirection:"row",gap:5}}>
                <View style={styles.radio}>
               
{
    isSelected===1?<Text style={styles.radiobg}></Text>:null
}
                </View>
                <Text>100 mm</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setSelected(2)}>
            <View style={{flexDirection:"row",gap:5}}>
                <View style={styles.radio}>
               
{
    isSelected===2?<Text style={styles.radiobg}></Text>:null
}
                </View>
                <Text>150 mm</Text>
            </View>
        </TouchableOpacity>
      </View>

      
      
       
      </View>

      <View style={styles.row}>
        <Text style={(styles.left, {borderBottomWidth: 1,fontWeight:"bold"})}>
          Water Addition
        </Text>
        <TextInput style={{ width: '50%',borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 0,
    paddingTop: 0,
    fontSize: 15}}></TextInput>
      </View>

      <View style={styles.row}>
        <Text style={(styles.left, {borderBottomWidth: 1,fontWeight:"bold"})}>
          Admixture Addition
        </Text>
        <TextInput style={{ width: '50%',borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 0,
    paddingTop: 0,
    fontSize: 15}}>
        
    </TextInput>
      </View>

       {/* button of radios */}
       <View style={styles.row}>
      <Text style={{fontWeight:"bold"}}>Sampling Location</Text>
      <View style={{flexDirection:"row",gap:10}}>
        <TouchableOpacity onPress={()=>setSelected(1)}>
            <View style={{flexDirection:"row",gap:5}}>
                <View style={styles.radio}>
               
{
    isSelected===1?<Text style={styles.radiobg}></Text>:null
}
                </View>
                <Text>dump</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setSelected(2)}>
            <View style={{flexDirection:"row",gap:5}}>
                <View style={styles.radio}>
               
{
    isSelected===2?<Text style={styles.radiobg}></Text>:null
}
                </View>
                <Text>pump</Text>
            </View>
        </TouchableOpacity>
      </View>

      
      
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    fontWeight:"bold"
  },
  bottomborder: {
    borderBottomWidth: 3,
    padding: 5,
    borderColor: 'gray',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    alignItems: 'center',
  },
  left: {
    flex: 1,
    fontWeight:"bold"
    // width:"50%"
  },
  right: {
    flex: 1,
    // width:"50%"
    // textAlign: 'left',
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radio:{
    width:22,
    height:22,
    borderRadius:11,
    borderColor:"black",
    borderWidth:2
  },
  radiobg:{
    width:12,
    height:12,
    borderRadius:6,
    backgroundColor:"green",
    
    textAlign:"center",
    alignItems:"center",
   
    margin:3

  }
 
});

export default Sample;
