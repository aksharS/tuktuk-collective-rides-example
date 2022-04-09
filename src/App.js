import React from 'react';
import useCollapse from 'react-collapsed';
import './App.css';
function Collapsible() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div class="wrapper">
      <div class="one">
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Collapse' : 'Ride ID'}
                {
                    // add right allignement to the header
                    isExpanded ? <span className="right">&#x25BC;</span> : <span className="right">&#x25B6;</span>
                }
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    Now you can see the hidden content. <br/><br/>
                    Click again to hide...
                </div>
            </div>
        </div>
      </div>
      <div class="two">Two</div>
      <div class="three">Three</div>
      <div class="four">Four</div>
      <div class="five">Five</div>
      <div class="six">Six</div>
    </div> 
      );
  }
  function App() {
      return (
      <Collapsible/>
      );
  }
  export default App;