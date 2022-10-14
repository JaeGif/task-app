// renders the tasks
import React from 'react';

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {/* Tasks are mapped to list items */}
      {tasks.map((task) => {
        return <li key={task.id}>{task.text}</li>;
      })}
    </ul>
  );
};

export default Overview;
