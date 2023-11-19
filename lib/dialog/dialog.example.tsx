import React, { useState } from 'react';
import Dialog from './dialog';

const DialogExample: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible(!visible);

  return (
    <div>
      <button onClick={onClick}>hi</button>
      <Dialog visible={visible} >
        弹出
      </Dialog>
    </div>
  );
};

export default DialogExample; 