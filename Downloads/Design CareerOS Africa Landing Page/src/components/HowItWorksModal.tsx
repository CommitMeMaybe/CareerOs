import { X, FileText, Zap, Target, CheckCircle } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

interface HowItWorksModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenRealityCheck?: () => void;
}

export function HowItWorksModal({ open, onOpenChange, onOpenRealityCheck }: HowItWorksModalProps) {
  const handleStartRealityCheck = () => {
    onOpenChange(false);
    onOpenRealityCheck?.();
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
            maxWidth: '640px',
            maxHeight: '90vh',
            overflowY: 'auto',
            zIndex: 9999
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <Dialog.Title style={{ fontSize: '20px', fontWeight: '500', color: '#171717', margin: 0 }}>
              How CareerOS Works
            </Dialog.Title>
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

          <Dialog.Description style={{ fontSize: '14px', color: '#737373', marginBottom: '24px' }}>
            Three steps to verified employment
          </Dialog.Description>

          {/* Step 1: Get Your Reality Check */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#ea580c',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ color: 'white', fontWeight: '500', fontSize: '16px' }}>1</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <FileText style={{ width: '18px', height: '18px', color: '#ea580c' }} />
                  <h3 style={{ fontSize: '16px', fontWeight: '500', color: '#171717', margin: 0 }}>Get Your Reality Check</h3>
                </div>
                <p style={{ fontSize: '14px', color: '#737373', lineHeight: '1.6', marginBottom: '12px' }}>
                  Upload your CV and tell us what job you want. Our AI analyzes the gap between where you are and where you need to be. No lies. No false hope.
                </p>

                {/* Terminal Output */}
                <div style={{
                  padding: '12px',
                  backgroundColor: '#171717',
                  color: '#d4d4d4',
                  borderRadius: '6px',
                  fontFamily: 'monospace',
                  fontSize: '13px'
                }}>
                  <div style={{ color: '#fb923c', marginBottom: '4px' }}>&gt; Match Score: 18%</div>
                  <div style={{ color: '#f87171', marginBottom: '4px' }}>Status: Not Ready</div>
                  <div>Required: 3 verified skills</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Build Verified Skills */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#ea580c',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ color: 'white', fontWeight: '500', fontSize: '16px' }}>2</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Zap style={{ width: '18px', height: '18px', color: '#ea580c' }} />
                  <h3 style={{ fontSize: '16px', fontWeight: '500', color: '#171717', margin: 0 }}>Build Verified Skills</h3>
                </div>
                <p style={{ fontSize: '14px', color: '#737373', lineHeight: '1.6', marginBottom: '12px' }}>
                  We give you curated micro-courses (not our own expensive ones) and assessments to prove you actually learned. Employers trust our verification.
                </p>

                {/* Skills List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{
                    padding: '12px',
                    backgroundColor: '#f0fdf4',
                    border: '1px solid #bbf7d0',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <CheckCircle style={{ width: '18px', height: '18px', color: '#16a34a', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: '#171717', fontWeight: '500' }}>Excel for Data Analysis - Verified</span>
                  </div>
                  <div style={{
                    padding: '12px',
                    backgroundColor: '#f0fdf4',
                    border: '1px solid #bbf7d0',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <CheckCircle style={{ width: '18px', height: '18px', color: '#16a34a', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: '#171717', fontWeight: '500' }}>SQL Fundamentals - Verified</span>
                  </div>
                  <div style={{
                    padding: '12px',
                    backgroundColor: '#fafafa',
                    border: '1px solid #e5e5e5',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <div style={{
                      width: '18px',
                      height: '18px',
                      border: '2px solid #d4d4d4',
                      borderRadius: '50%',
                      flexShrink: 0
                    }}></div>
                    <span style={{ fontSize: '14px', color: '#737373' }}>Python Basics - In Progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Apply with Precision */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#ea580c',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ color: 'white', fontWeight: '500', fontSize: '16px' }}>3</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Target style={{ width: '18px', height: '18px', color: '#ea580c' }} />
                  <h3 style={{ fontSize: '16px', fontWeight: '500', color: '#171717', margin: 0 }}>Apply with Precision</h3>
                </div>
                <p style={{ fontSize: '14px', color: '#737373', lineHeight: '1.6', marginBottom: '12px' }}>
                  Our "Sniper AI" only applies when you have a 70%+ match. It customizes your CV for each job and generates unique cover letters. Quality over spam.
                </p>

                {/* Comparison Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div style={{
                    padding: '16px',
                    backgroundColor: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: '6px'
                  }}>
                    <div style={{ fontSize: '12px', fontWeight: '500', color: '#171717', marginBottom: '8px' }}>Other Platforms</div>
                    <div style={{ fontSize: '28px', fontWeight: '500', color: '#171717', marginBottom: '4px' }}>100</div>
                    <div style={{ fontSize: '13px', color: '#737373', marginBottom: '4px' }}>Generic applications</div>
                    <div style={{ fontSize: '13px', color: '#dc2626' }}>~2% response rate</div>
                  </div>
                  <div style={{
                    padding: '16px',
                    backgroundColor: '#f0fdf4',
                    border: '1px solid #bbf7d0',
                    borderRadius: '6px'
                  }}>
                    <div style={{ fontSize: '12px', fontWeight: '500', color: '#171717', marginBottom: '8px' }}>CareerOS</div>
                    <div style={{ fontSize: '28px', fontWeight: '500', color: '#171717', marginBottom: '4px' }}>8</div>
                    <div style={{ fontSize: '13px', color: '#737373', marginBottom: '4px' }}>Targeted applications</div>
                    <div style={{ fontSize: '13px', color: '#16a34a' }}>~40% response rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div style={{ paddingTop: '20px', borderTop: '1px solid #e5e5e5' }}>
            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
              <p style={{ fontSize: '14px', color: '#737373', margin: 0 }}>Ready to stop wasting time on applications that go nowhere?</p>
            </div>
            <button
              onClick={handleStartRealityCheck}
              style={{
                width: '100%',
                padding: '12px 24px',
                backgroundColor: '#ea580c',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Start Your Reality Check
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
