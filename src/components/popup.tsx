import React from 'react';

interface PopupProps {
    onClose: () => void;
    onConfirm: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose, onConfirm }) => {
    return (
        <div className="modal fade show" role="dialog" style={styles.overlay}>
            <div className="modal-dialog" style={styles.dialog}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Validação de idade</h5>
                    </div>
                    <div className="modal-body">
                        <p>Deve ter mais de 18 anos para aceder a este site.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn button-click" onClick={onConfirm}>
                            Confirmar
                        </button>
                        <button type="button" className="btn button-click-close" onClick={onClose}>
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        display: 'flex',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dialog: {
        margin: '15% auto',
        maxWidth: '500px',
    },
};

export default Popup;
