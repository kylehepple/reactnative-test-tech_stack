import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {
      
    render() {

        return (
          <FlatList
            data={this.props.libraries}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={library => `${library.id}`}
          />
        );

    }

    renderItem({ item }) {

        return <ListItem library={item} />;
        
    }
     
}

const mapStateToProps = ({ libraries }) => ({ libraries });

export default connect(mapStateToProps)(LibraryList);