import React from 'react'
import { useNavigate } from 'react-router-dom';

const ModalLayout = ({ className, children }) => {
  const navigate = useNavigate();
  return (
    <div>
      <input type="checkbox" id="modalTemplate" className="modal-toggle" />
        <div className="modal modal-bottom modalWatch max-h-[190px] max-w-[208px] rounded-[2.5rem]">
            <div className="modal-box max-w-[208px] max-w-[208px] max-h-[190px] rounded-b-[2.5rem]">
                <div className={className}>{children}</div>
            </div>
        </div>
    </div>
  )
}

export default ModalLayout;