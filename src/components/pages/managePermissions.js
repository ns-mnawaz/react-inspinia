import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';

export default class ManagePermissions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      searchFocusIndex: 0,
      searchFoundCount: null,
      treeData: [
        { title: 'Chicken', expanded: true, children: [{ title: 'Egg' }, { title: 'Breast' }, { title: 'Leg' }] },
        { title: 'Fish', expanded: true, children: [{ title: 'finger line' }] },
          {title: 'New Menu'}
      ]
    };
  }

  render() {
    const { searchString, searchFocusIndex, searchFoundCount } = this.state;

    // Case insensitive search of `node.title`
    const customSearchMethod = ({ node, searchQuery }) =>
      searchQuery &&
            node.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;

    const selectPrevMatch = () =>
      this.setState({
        searchFocusIndex:
                    searchFocusIndex !== null ?
                      (searchFoundCount + searchFocusIndex - 1) % searchFoundCount :
                      searchFoundCount - 1
      });

    const selectNextMatch = () =>
      this.setState({
        searchFocusIndex:
                    searchFocusIndex !== null ?
                      (searchFocusIndex + 1) % searchFoundCount :
                      0
      });

    return (
      <div>
        <h2>Find the needle!</h2>
        <form
          style={{ display: 'inline-block' }}
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            id="find-box"
            type="text"
            placeholder="Search..."
            style={{ fontSize: '1rem' }}
            value={searchString}
            onChange={(event) =>
              this.setState({ searchString: event.target.value })
            }
          />

          <button
            type="button"
            disabled={!searchFoundCount}
            onClick={selectPrevMatch}
          >&lt;</button>

          <button
            type="submit"
            disabled={!searchFoundCount}
            onClick={selectNextMatch}
          > &gt;</button>

          <span>
            &nbsp;
            {searchFoundCount > 0 ? searchFocusIndex + 1 : 0}
                        &nbsp;/&nbsp;
            {searchFoundCount || 0}
          </span>
        </form>

        <div style={{ height: 600 }}>
          <SortableTree
            treeData={this.state.treeData}
            onChange={(treeData) => this.setState({ treeData })}
            //
            // Custom comparison for matching during search.
            // This is optional, and defaults to a case sensitive search of
            // the title and subtitle values.
            // see `defaultSearchMethod` in https://github.com/frontend-collective/react-sortable-tree/blob/master/src/utils/default-handlers.js
            searchMethod={customSearchMethod}
            //
            // The query string used in the search. This is required for searching.
            searchQuery={searchString}
            //
            // When matches are found, this property lets you highlight a specific
            // match and scroll to it. This is optional.
            searchFocusOffset={searchFocusIndex}
            //
            // This callback returns the matches from the search,
            // including their `node`s, `treeIndex`es, and `path`s
            // Here I just use it to note how many matches were found.
            // This is optional, but without it, the only thing searches
            // do natively is outline the matching nodes.
            searchFinishCallback={(matches) =>
              this.setState({
                searchFoundCount: matches.length,
                searchFocusIndex:
                                    matches.length > 0 ? searchFocusIndex % matches.length : 0
              })
            }
            //
            // This prop only expands the nodes that are seached.
            onlyExpandSearchedNodes={false}
          />
        </div>
      </div>
    );
  }
}
