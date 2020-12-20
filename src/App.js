import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions/actions'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {

return (
    <div>
    <div className="boxes">
        <Header />
        <AddedFeatures/>
    </div>

    <div className = "box">
        <AdditionalFeatures/>
        <Total  />
    </div>
    </div>
)
};
export default App;
