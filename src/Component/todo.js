import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
// import delete from './assits/delete';
import React, {useState} from 'react';
const ToDO = () => {
  const [inputData, setInputData] = useState('');
  const [items, setitems] = useState([]);
  const [editData, seteditData] = useState(null);
  //additem
  const additem = () => {
    if (!inputData) {
    } else {
      setitems([...items, inputData]);
      setInputData();
    }
  };
  //Delete Item
  const deleteItem = id => {
    const newlist = items.filter((e, index) => {
      return index !== id;
    });
    setitems(newlist);
  };
  //edit
  const editItem = id => {
    const updatelist = items.find((e, index) => {
      return index === id;
    });
    setInputData(updatelist);
    seteditData(id);
  };

  //Delete All
  const deleteAll = () => {
    setitems([]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{
            margin: 20,
            width: 110,
            height: 80,
          }}
          source={require('./assits/todo.png')}
        />
      </View>
      <View style={styles.inputpButton}>
        <TextInput
          onChangeText={e => setInputData(e)}
          value={inputData}
          placeholder="ADD ToDo"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={additem}>
        <Text
          style={{
            width: 100,
            height: 40,

            fontSize: 30,

            color: '#fff',
            // marginBottom: 30,
            textAlign: 'center',
          }}>
          +
        </Text>
      </TouchableOpacity>

      <ScrollView>
        {items.map((e, index) => {
          return (
            <View key={index} style={styles.output}>
              <Text>{e}</Text>

              <View style={styles.EandB}>
                <TouchableOpacity onPress={() => editItem(index)}>
                  {/* edit */}
                  <Image
                    style={styles.ImageD}
                    source={require('./assits/edit.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteItem(index)}>
                  {/* delete */}
                  <Image
                    style={styles.ImageD}
                    source={require('./assits/delete.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        <View style={styles.ClearView}>
          <TouchableOpacity style={styles.buttonClear} onPress={deleteAll}>
            <Image
              style={styles.ImageD1}
              source={require('./assits/delete.png')}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: '#faf9f9',
    padding: 5,
  },
  container: {
    backgroundColor: '#ffd6ba',
    alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  header: {
    // backgroundColor: ' #8ca0f2',
    // width: '100%',
  },
  inp: {
    fontSize: 10,

    color: '#023e8a',
    flex: 5,
  },
  inputpButton: {
    borderWidth: 1,
    borderColor: '#fff',
    width: '90%',
    borderRadius: 30,
    margin: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#555b6e',
    width: 100,
    height: 40,
    // flexDirection: 'row',
    borderRadius: 30,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  output: {
    borderWidth: 1,
    borderColor: '#faf9f9',
    width: 300,
    height: 40,
    borderRadius: 30,
    margin: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    // textAlign: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#faf9f9',
  },
  EandB: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    // width: 100,
    // height: 10,
  },
  ImageD: {
    width: 20,
    height: 20,
    margin: 5,
  },
  ImageD1: {
    width: 40,
    height: 40,
    margin: 5,
  },
  buttonClear: {
    width: 100,
    height: 50,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AddandDel: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    width: '100%',
    height: 300,
  },
  ClearView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ToDO;
