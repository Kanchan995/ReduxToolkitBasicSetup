import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './api/Networkutils';
import { selectAllUsers } from './redux/store/slices/userSlice';
import { FlatList, Image, Text, View } from 'react-native';
import { RootObject } from './model/RootObject';
import { RootState } from './redux/storeindex';

export default function UserList() {
    const dispatch = useDispatch<any>();
    const data = useSelector(selectAllUsers) as RootObject[];

    useEffect(() => {
        console.log("use")
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <View>
            <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View>
                            <Image
          style={{width: '20%', height: '20%'}}
          source={{uri:item.image}}
      />
                            <Text style={{
                                color: "black",
                                fontSize: 20
                            }}>
                                {item.title}
                            </Text>
                            <Text style={{
                                color: "black",
                                fontSize: 12
                            }}>
                                {item.description},"/n"
                            </Text>
                        </View>
                    )}
                />
        </View>
    );
}


