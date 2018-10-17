import React from 'react';

export default (props) => {
    const { lines, filterLines } = props;

    return ( 
    <div classname = "filterSubwayLines">
        <hr/>
        <h3>Brooklyn Subway Entrances</h3>
        <p>Filter Entrances by Subway Line</p>
        <select defaultValue = "*"
        type = "select"
        name = "filerlines"
        onChange = {(e) => filterLines(e)}>
            { /* We render the select's option elements by maping each of the values of subwayLines array to option elements */ }
            {
            lines.map((line, i) => {
              return (
                  <option value={line} key={i}>{line}</option>
                );
            }, this)
}
        </select>    
    </div>
    );    
};

