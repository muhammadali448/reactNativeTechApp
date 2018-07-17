import React, { Component } from 'react';
import { ListView } from 'react-native';
// List, ListItem, Text
import { Content } from 'native-base';
import { connect } from 'react-redux';
import ListItem from './listItem';
class LibraryList extends Component {

    // renderListItem() {
    //     let arr = [];
    //     this.props.libraries.map((library, key) => {
            
    //         arr.push(    <ListItem key={key}>
    //                 <Text>{library.title}</Text>
    //             </ListItem>
    //         );
    //     })
    //     return arr;
    // }


    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.dataSource = ds.cloneWithRows(this.props.libraries)
    }

    renderRow(library) {
        return <ListItem library={library}/>
    }


    render() {
        return (
            <Content>
                {/* <List>
                    {this.renderListItem()}
                </List> */}
                <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                />
            </Content>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        libraries: state.libraries
    }
}

export default connect(mapStateToProps)(LibraryList);