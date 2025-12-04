import { useState } from 'react';
import { X, ShieldAlert, Upload } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

interface RealityCheckModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RealityCheckModal({ open, onOpenChange }: RealityCheckModalProps) {
  const [desiredRole, setDesiredRole] = useState('');
  const [currentRole, setCurrentRole] = useState('');
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ desiredRole, currentRole, fileName });
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
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
            borderRadius: '8px',
            padding: '24px',
            width: '90%',
            maxWidth: '560px',
            maxHeight: '90vh',
            overflowY: 'auto',
            zIndex: 9999
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#ea580c',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ShieldAlert style={{ width: '20px', height: '20px', color: 'white' }} />
              </div>
              <Dialog.Title style={{ fontSize: '18px', fontWeight: '500', color: '#171717', margin: 0 }}>
                Reality Check Dashboard
              </Dialog.Title>
            </div>
            <Dialog.Close style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#a3a3a3',
              padding: '4px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <X style={{ width: '20px', height: '20px' }} />
            </Dialog.Close>
          </div>

          <Dialog.Description className="sr-only">
            Upload your CV and get a brutally honest analysis of your job readiness
          </Dialog.Description>

          {/* Warning Banner */}
          <div style={{
            marginBottom: '20px',
            padding: '12px 16px',
            backgroundColor: '#fff7ed',
            border: '1px solid #fed7aa',
            borderRadius: '6px'
          }}>
            <p style={{ fontSize: '14px', color: '#171717', margin: 0 }}>
              <span style={{ fontWeight: '600' }}>Warning:</span> The analysis will be brutally honest. No sugarcoating.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Desired Role */}
            <div>
              <label htmlFor="desired-role" style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#171717',
                marginBottom: '8px'
              }}>
                What role do you want?
              </label>
              <input
                id="desired-role"
                type="text"
                value={desiredRole}
                onChange={(e) => setDesiredRole(e.target.value)}
                placeholder="e.g., Data Analyst, Product Manager"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #e5e5e5',
                  borderRadius: '6px',
                  fontSize: '14px',
                  color: '#171717',
                  outline: 'none'
                }}
              />
            </div>

            {/* Current Role */}
            <div>
              <label htmlFor="current-role" style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#171717',
                marginBottom: '8px'
              }}>
                What's your current role/experience?
              </label>
              <input
                id="current-role"
                type="text"
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value)}
                placeholder="e.g., Shop Assistant, Recent Graduate"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #e5e5e5',
                  borderRadius: '6px',
                  fontSize: '14px',
                  color: '#171717',
                  outline: 'none'
                }}
              />
            </div>

            {/* File Upload */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#171717',
                marginBottom: '8px'
              }}>
                Upload your CV/Resume
              </label>
              <div>
                <input
                  id="cv-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <label
                  htmlFor="cv-upload"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    padding: '32px',
                    border: '2px dashed #e5e5e5',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s'
                  }}
                >
                  <Upload style={{ width: '24px', height: '24px', color: '#a3a3a3', marginBottom: '8px' }} />
                  <span style={{ fontSize: '14px', color: '#737373' }}>
                    {fileName || 'Click to upload CV (PDF, DOC, DOCX)'}
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px 24px',
                backgroundColor: '#171717',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '4px'
              }}
            >
              <Upload style={{ width: '18px', height: '18px' }} />
              Run Reality Check
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
