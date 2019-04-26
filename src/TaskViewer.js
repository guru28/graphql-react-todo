import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Table } from 'reactstrap';

export const GET_TASKS= gql`
  {
    tasks {
      id
      title
      completedStatus
    }
  }
`;

export default () => (
  <Query query={GET_TASKS}>
    {({ loading, data }) => !loading && (
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.completedStatus === true ? "completed" : "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
  </Query>
);