import React, { useState } from 'react';
import Dialog from './dialog';

const DialogExample: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible(!visible);

  return (
    <div>
      <button onClick={onClick}>hi</button>
      <Dialog visible={visible} title='标题' >
        弹出
      </Dialog>
    </div>
  );
};

export default DialogExample; 