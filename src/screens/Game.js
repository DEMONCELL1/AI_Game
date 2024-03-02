import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming FontAwesome icons are used
import { useFocusEffect } from '@react-navigation/native';
const Game = ({ navigation }) => {
    const [coins, setCoins] = useState([]);
    // const [unpickedCoins, setUnpickedCoins] = useState([])
    const [message, setMessage] = useState('');
    const [pickedByUser, setPickedByUser] = useState(false);
    const uncpickedCoins = useRef([])
    const [userPicked, setUserPicked] = useState([]);

    // useEffect(() => {
    //     setCoins([]);
    //     setPickedByUser(false);
    //     uncpickedCoins.current = [];
    //     setUserPicked([]);
    // }, [])


    useFocusEffect(React.useCallback(() => {
        return () => {
            setCoins([]);
            setPickedByUser(false);
            uncpickedCoins.current = [];
            setUserPicked([]);
        }
    }, []))
    const handlePick = (coinKey) => {
        // if (quantity < 1 || quantity > 4 || quantity > coins) {
        //     setMessage('Invalid quantity');
        //     return;
        // }
        console.log("picked coin with id", coinKey)
        
        if(userPicked.includes(coinKey)) {
            setUserPicked(userPicked.filter(picked => picked !== coinKey))
            return;
        }
        if(userPicked.length < 4) {
            if(coins.includes(coinKey)) {
                return;
            }
            setUserPicked(prev => [...prev, coinKey]);
        }else {
            console.log("can't pick more than 4");
        }
        
        // setCoins(coins - quantity);
        // if (coins - quantity === 0) {
        //     setMessage('You lost!');
        //     return;
        // }

        // const aiPick = Math.min(4, coins - quantity);
        // setCoins(coins - aiPick);
        // if (coins - aiPick === 0) {
        //     setMessage('You won!');
        //     return;
        // }
    };

    const handleEndTurn = () => {
        setPickedByUser(true);
    }

    const renderCoins = () => {
        const rows = 5;
        const totalRows = rows * 2 - 1;
        const coinRows = []
        let coinIds = []
        for (let i = 1; i <= totalRows; i++) {
            const distance = Math.abs(rows - i);
            let starsCount = rows - distance;
            let row = [];
            if (starsCount === 2) {
                continue;
            }
            for (let j = 1; j <= starsCount; j++) {
                const id = `${i}_${j}`
                coinIds.push(id)
                // setUnpickedCoins(prev => [...prev, id])
                row.push(
                    <TouchableOpacity key={id} onPress={() => handlePick(id)}>
                        <Icon name="gg-circle" size={70} color={userPicked.includes(id)?"#fb5b5a":coins.includes(id)?"#aaa":"#465881"} />
                    </TouchableOpacity>
                );
            }
            coinRows.push(<View key={i} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>{row}</View>)
        }
        // setUnpickedCoins(coinIds)
        uncpickedCoins.current = coinIds
        return <View>{coinRows}</View>;
    };

    useEffect(() => {
        if(pickedByUser) {
            // uncpickedCoins.current = uncpickedCoins.current.filter(unpickedCoin => coins.indexOf(unpickedCoin) === -1)
            setCoins(prev => [...prev, ...userPicked])
            // console.log(uncpickedCoins)
            // console.log(uncpickedCoins.current.length)
            // const aiPick = Math.min(4, uncpickedCoins.current.length - 1);
            // setCoins(prev => [...prev, uncpickedCoins.current.slice(0, aiPick)])
            // setPickedByUser(false)
        }
    }, [pickedByUser])

    useEffect(() => {
        uncpickedCoins.current = uncpickedCoins.current.filter(unpickedCoin => coins.indexOf(unpickedCoin) === -1)
        if(pickedByUser) {
            setUserPicked([])
            // uncpickedCoins.current = uncpickedCoins.current.filter(unpickedCoin => coins.indexOf(unpickedCoin) === -1)
            let aiPick = Math.min(4, uncpickedCoins.current.length - 1);
            console.log("AI picks", aiPick)
            if (uncpickedCoins.current.length - aiPick === 5) {
                aiPick = 3
            }
            setCoins(prev => {
                console.log([...prev, ...uncpickedCoins.current.slice(0, aiPick)])
                return [...prev, ...uncpickedCoins.current.slice(0, aiPick)]
            })
            // uncpickedCoins.current = uncpickedCoins.current.slice(aiPick)
            setPickedByUser(false)
            if (uncpickedCoins.current.length === 2) {
                console.log("user loses")
                navigation.navigate("Lost")
            }
        }
        // if(uncpickedCoins.current.includes())
        // console.log(uncpickedCoins)
        
        // set
        
    }, [coins])
    

    return (
        <View style={styles.container}>
            <View>
                {renderCoins(4)}
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleEndTurn}>
                <Text style={styles.loginText}>End Turn</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    message: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    loginBtn: {
        width: '80%',
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
      },
      loginText: {
        color: 'white',
        textAlign:'center',
      },
});

export default Game;