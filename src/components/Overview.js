// renders the tasks
import React from 'react';
import uniqid from 'uniqid';

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {/* Tasks are mapped to list items */}
      {tasks.map((task) => {
        return <li>{task.text}</li>;
      })}
    </ul>
  );
};

export default Overview;
