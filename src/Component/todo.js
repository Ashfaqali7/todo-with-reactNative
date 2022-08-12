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
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
// import delete from './assits/delete';
import React, {useState} from 'react';
const ToDO = () => {
  const [inputText, setInputText] = useState('');
  const [items, setitems] = useState([]);
  const [Indexnum, setIndexnum] = useState();
  //additem
  const additem = () => {
    if (Indexnum) {
      items[Indexnum] = inputText;
      setitems([...items]);
    } else {
      setitems([...items, inputText]);
      // setInputText();
    }
  };
  //Delete Item
  const deleteItem = id => {
    // const newlist = items.filter((e, index) => {
    //   return index !== id;
    // });
    // setitems(newlist);
    items.splice(id, 1);
    setitems([...items]);
  };
  //edit
  const editItem = (e, i) => {
    setIndexnum(i);
    setInputText(e);
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
          onChangeText={e => setInputText(e)}
          value={inputText}
          placeholder="ADD ToDo"
          style={{flex: 1}}
        />
        <TouchableOpacity style={styles.button} onPress={additem}>
          <Text style={{}}>
            <Icon name="add" size={30} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {items.map((e, index) => {
          return (
            <View key={index} style={styles.output}>
              <Text>{e}</Text>

              <View style={styles.EandB}>
                {/* edit */}
                <TouchableOpacity onPress={() => editItem(e, index)}>
                  <Text style={styles.IconText}>
                    <Icon name="edit" color="#fff" size={20} />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteItem(index)}>
                  {/* delete */}
                  <Text style={styles.IconText}>
                    <Icon name="delete" color="#fff" size={20} />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        <View style={styles.ClearView}>
          <TouchableOpacity style={styles.buttonClear} onPress={deleteAll}>
            <Text style={styles.IconText}>
              <Icon name="delete" color="#fff" size={20} />
            </Text>
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
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    backgroundColor: '#555b6e',
    width: 30,
    height: 30,
    // flexDirection: 'row',
    borderRadius: 20,
    // margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  output: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
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
    justifyContent: 'space-between',
    flexDirection: 'row',

    // color: '#',
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
  IconText: {
    // borderColor: '#fb8b24',
    backgroundColor: '#555b6e',

    marginHorizontal: 5,
    paddingVertical: 3.7,
    borderRadius: 30,
    borderWidth: 1,
    textAlign: 'center',
    width: 25,
    height: 25,
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    backgroundColor: '#555b6e',
    width: 30,
    height: 30,
  },
});
export default ToDO;
