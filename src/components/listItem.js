import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import CardSection from './cardSection';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {

    componentWillUpdate(nextProps) {
        LayoutAnimation.spring();
    }

    renderDescription() {
        // if (this.props.library.id === this.props.selectedId) {
        //    return ( <Text>{this.props.library.description}</Text>);
        // }
        if (this.props.expanded) {
            return (<CardSection><Text>{this.props.library.description}</Text></CardSection>);
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(this.props.library.id)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {this.props.library.title}
                        </Text>
                    </CardSection>
                        {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id
    // return {
    //     selectedId: state.selectedLibraryId
    // }
    return {
        expanded: expanded
    }
}

export default connect(mapStateToProps, actions)(ListItem);