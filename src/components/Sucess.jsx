import * as React from 'react';
import Alert from '@mui/material/Alert';

const Success = ({ success }) => {
  if(success === null ) {
      return null
  }
  return (
    <div className="popResp">
        <Alert className="popResp__container" severity="success" color="success">
            { success } 
        </Alert>
    </div>
  );
}


export default Success