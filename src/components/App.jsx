import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import exampleData from '../example-data/exampleData';

import '../styles/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'None',
      bugs: exampleData,
      currentView: exampleData,
    };
    this.filterHandler = this.filterHandler.bind(this);
  }

// update the filter handler to sort by bug threat level
// filterHandler should update state.filter to whatever is selected from the dropdown by passing up target.value
// the render method should only render bugs whose threat level matches 

  filterHandler(filter) {
    let newView;
    if (filter === 'None') {
      newView = exampleData
    } else {
      newView = this.state.bugs.slice().filter(bug => bug.threatLevel === filter);
    }
    this.setState({ currentView: newView, filter });  
  }

  

// it works but it is one behind on the render, there is an issue somewhere

  render() {
    return (
      <table>
        <Nav
          filterHandler={this.filterHandler}
        />
        {this.state.currentView.map((bug) => (
          <BugTile
            bugName={bug.bugName}
            bugDescription={bug.bugDescription}
            reportedBy={bug.reportedBy}
            createdDate={bug.createdDate}
            assignedTo={bug.assignedTo}
            threatLevel={bug.threatLevel}
            key={bug.bugName}
          />
        ))}
      </table>
    );
  }
}

export default App;
