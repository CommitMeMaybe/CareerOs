import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

export function TestModal() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <button
        onClick={() => {
          console.log('Button clicked, setting open to true');
          setOpen(true);
        }}
        style={{
          padding: '10px 20px',
          background: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        TEST MODAL
      </button>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 9998
            }}
          />
          <Dialog.Content
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '8px',
              zIndex: 9999,
              maxWidth: '500px',
              width: '90%'
            }}
          >
            <Dialog.Title style={{ fontSize: '24px', marginBottom: '16px' }}>
              TEST MODAL
            </Dialog.Title>
            <Dialog.Description style={{ marginBottom: '16px' }}>
              If you can see this, the modal is working!
            </Dialog.Description>
            <button
              onClick={() => setOpen(false)}
              style={{
                padding: '8px 16px',
                background: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
