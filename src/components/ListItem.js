import React, { Component } from 'react';
import { 
    LayoutAnimation,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { CardSection } from './common';

class ListItem extends Component {

    componentWillUpdate() {

        LayoutAnimation.easeInEaseOut();

    }

    onPress() {

        const { library, selectLibrary } = this.props;

        selectLibrary(library.id);

    }

    render() {

        const { library } = this.props;
        const { titleStyle } = styles;

        return (
            <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {library.title}
                        </Text>;
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );

    }

    renderDescription() {

        const { expanded, library } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text>{library.description}</Text>;
                </CardSection>
            );
        }

    }

}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = ({ selectedLibraries }, { library }) => ({ 
    expanded: (selectedLibraries.indexOf(library.id) !== -1) 
});

export default connect(mapStateToProps, actions)(ListItem);