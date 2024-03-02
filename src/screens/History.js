import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions,TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome'; 

// const HistoryScreen = ({ gameplayHistory }) => {
const HistoryScreen = (props) => {
    let screenHeight = Dimensions.get('window').height
    let screenWidth = Dimensions.get('window').width
 
    const gameplayHistory = [
        {
          username: 'admin',
          gameData: { score: 100, level: 1 },
          date: '2022-03-17T12:30:00.000Z',
        },
        {
          username: 'guest',
          gameData: { score: 75, level: 2 },
          date: '2022-03-18T15:45:00.000Z',
        },
        {
          username: 'admin',
          gameData: { score: 120, level: 3 },
          date: '2022-03-19T10:00:00.000Z',
        },
      ];
    return (
        <View style={styles.container}>
            <View style={{
                // backgroundColor:'red',
                height: screenHeight * 0.2,
                // flexDirection:'row-reverse',
                alignItems: 'center',

                justifyContent: 'center'
            }}>
                <View style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                }}>

                    <Icon name="history" size={33} color="#fb5b5a" />
                    <Text style={styles.title}> History</Text>
                </View>
                <View style={{
                    height: 3,
                    left: 7,
                    top: 4,
                    width: screenWidth * 0.5,
                    alignSelf: 'center',
                    backgroundColor: '#fb5b5a'
                }}
                />

            </View>
            <ScrollView style={{
                // backgroundColor:'red'
            }}>

                {gameplayHistory.length > 0 ? (
                    <FlatList
                        data={gameplayHistory}
                        renderItem={({ item }) => {
                            console.log("item:----->", item)
                            return (
                                <View style={styles.item}>
                                    <Text style={styles.username}>{item.username}</Text>
                                    <Text style={styles.details}>{`Score: ${item.gameData.score}`}</Text>
                                    <Text style={styles.details}>{`Date: ${item.date}`}</Text>
                                </View>
                            )
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
                ) : (
                    <Text style={styles.emptyMessage}>No gameplay history available</Text>
                )}
                <View
                    style={{
                        width: screenWidth * 0.91,
                        height: screenHeight * 0.2,
                        alignSelf: 'center',
                        marginTop: screenHeight * 0.07,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // backgroundColor:'orange',
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            // Goto()
                            props.navigation.goBack()
                        }}>
                        <View
                            style={styles.backbtn}>

                            <Text
                                style={styles.backbtnText}>
                                Back
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            // Goto()
                            // props.navigation.goBack()
                        }}>
                        <View
                            style={styles.logoutbtn}>

                            <Text
                                style={styles.backbtnText}>
                                Log out
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
           

        </View>
    );
};

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginHorizontal: 12,
        color: '#fb5b5a',
        // marginBottom: 20,
        textAlign: 'center',
    },
    item: {
        backgroundColor: '#465881',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
    },
    username: {
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
    },
    details: {
        color: 'white',
    },
    emptyMessage: {
        textAlign: 'center',
        fontSize: 18,
        color:'red',
        marginTop: 50,
    },
    backbtn: {
        flexDirection: 'row',
        height: "25%",
        width: '80%',
        backgroundColor: '#fb5b5a',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(217, 217, 217, 1)',
        
        borderRadius: 10,

        alignSelf: 'center',

    },
    backbtnText: {
        alignSelf: 'center',
        fontFamily: 'Inter-Regular',
        lineHeight: 24.2,
        fontWeight: '500',
        fontSize: 18,
        color: '#FFFFFF',
    },
    logoutbtn: {
        flexDirection: 'row',
        height: "25%",
        width: '80%',
        backgroundColor: '#fb5b5a',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(217, 217, 217, 1)',

        borderRadius: 10,

        alignSelf: 'center',
    }
});

// const mapStateToProps = (state) => ({
//   gameplayHistory: state.history.gameplayHistory,
// });

// export default connect(mapStateToProps)(HistoryScreen);
export default HistoryScreen