import React, { ReactElement } from 'react';
export interface MyViewProps {
  name: string;
}

const travel = ({ name, ...props }: MyViewProps): ReactElement => (
  <div>Hello {name}</div>
);

export default travel;
