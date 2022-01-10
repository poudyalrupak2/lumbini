import React, { Component } from 'react';
import GallerySwiper from 'react-native-gallery-swiper';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    StatusBar,
    Thumbnail,
    TouchableOpacity,
    Button,
    RefreshControl,
    ScrollView,
} from 'react-native';
import Axios from 'axios';
export default class Gallery1Screen extends React.Component {
    state = {
        data: [],
        refreshing: false,
    };
    fetchData = async () => {
        const { params } = this.props.route;
        console.log(this.props.route);

        const { data: responseJson } = await Axios.get(
            'http://202.45.146.174/lumbini/api/gallery/' + params.Id,
        );

        console.log(responseJson);
        this.setState({ data: responseJson });
    };
    componentDidMount() {
        this.props.navigation.setOptions({ title: this.props.route.params.Title });

        this.fetchData();
    }
    _onRefresh() {
        this.setState({ refreshing: true });
        this.fetchData().then(() => {
            this.setState({ refreshing: false });
        });
    }
    render() {
        // console.log(JSON.stringify(this.props, null, 2));
        const { navigate } = this.props.navigation;

        return (
            <GallerySwiper
            
                images={
                    this.state.data.length &&
                    this.state.data.map((data, i) => {
                        return {
                            source: {
                                uri: 'http://202.45.146.174/lumbini' + data.ImagePath,
                                 dimensions: { width: 1080, height: 1920 }
                            }
                        }
                    })
                  }
            />
            
        );
    }
}