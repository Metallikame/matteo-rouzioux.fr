import React, { useEffect, useRef } from 'react';

type ServiceModalProps = {
  show: boolean;
  onClose: () => void;
  service: {
    title: string;
    icon: React.ReactNode | string;
    details: React.ReactNode;
    tarifs?: string[];
  } | null;
};

const ServiceModal = ({ show, onClose, service }: ServiceModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (show && dialogRef.current) {
      dialogRef.current.showModal?.();
    } else if (!show && dialogRef.current?.open) {
      dialogRef.current.close?.();
    }
  }, [show]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && show) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [show, onClose]);

  useEffect(() => {
    const handler = () => onClose();
    dialogRef.current?.addEventListener('cancel', handler);
    return () => dialogRef.current?.removeEventListener('cancel', handler);
  }, [onClose]);

  if (!show || !service) return null;

  return (
    <div
      className="custom-modal-backdrop"
      style={{
        position: 'fixed',
        zIndex: 1040,
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
    >
      <div
        style={{
          borderRadius: 10,
          background: '#fff',
          boxShadow: '0 2px 32px #0002',
          minWidth: 320,
          maxWidth: 500,
          width: '90vw',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
        tabIndex={0}
      >
        <form method="dialog" style={{ margin: 0 }}>
          <div
            className="modal-content p-4"
            tabIndex={-1}
            style={{ minWidth: 320 }}
          >
            <div className="modal-header d-flex align-items-center">
              <span className="me-2" style={{ fontSize: '2rem' }}>
                {service.icon}
              </span>
              <h5 className="modal-title m-0">{service.title}</h5>
              <button
                type="button"
                className="btn-close ms-auto"
                aria-label="Fermer"
                onClick={onClose}
                tabIndex={0}
              />
            </div>
            <div className="modal-body">
              <div>{service.details}</div>
              {service.tarifs && (
                <>
                  <hr />
                  <h6>Tarifs :</h6>
                  <ul>
                    {service.tarifs.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceModal;
