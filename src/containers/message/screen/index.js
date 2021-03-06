/**
 * Created by bear on 2017/12/12.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
    FlatList,
} from 'react-native'
import * as  message from "../../../actions/message"
import MessageItem from '../../../components/MessageItem'
import SearchBox from '../../../components/SearchBox'
const data1 = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `开会啦，明天下午一点钟在天府大道会展中心一栋三楼11-1-23`,
    title: `欧洲印象居委会闲聊群${i}`,
    key: `aopfsdfm13dqwepomsd13ni${i}`
}));
@connect(
    state => {
        return {...state.message}
    },
    dispatch => bindActionCreators({...message}, dispatch)
)
class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollEnabled: true,
            swipeOutDisable: false
        }
    }

    componentDidMount() {
        const {getMsgList} = this.props
        getMsgList()
    }

    _itemOnPress = (row) => {
        const {navigation} = this.props
        // navigation.navigate('chatRoom',{name:row.item.title})
    }
    _renderItemComponent = (row) => {
        return <MessageItem row={row} onPress={this._itemOnPress}
                            swipeScrollEvent={this._swipeScrollEvent }
                            swipeOutDisable={this.state.swipeOutDisable}
        />
    }
    _swipeScrollEvent = (scrollEnabled) => {
        this.setState({scrollEnabled: scrollEnabled})
    }
    _onScroll = () => {
        // this.setState({swipeOutDisable:true })
    }
    render() {
        const {msgList} = this.props
        return (
            <FlatList
                data={msgList}
                keyExtractor={ (item, index) => item.title}
                showsVerticalScrollIndicator={true}//隐藏竖直滚动条
                // onScroll={this._onScroll}
                scrollEnabled={this.state.scrollEnabled}
                // onRefresh={() => console.log('onRefresh: nothing to refresh :P')}
                // // onViewableItemsChanged={this._onViewableItemsChanged}
                // refreshing={false}
                ListHeaderComponent={<SearchBox/>}
                renderItem={this._renderItemComponent}
            >
            </FlatList>
        )
    }
}
export  default  Message