import React from 'react'
import { useNavigate } from 'react-router-dom';

const ModalLayout = ({ className, children }) => {
  const navigate = useNavigate();
  return (
    <div>
      <input type="checkbox" id="modalTemplate" className="modal-toggle" />
        <div className="modal modal-bottom modalWatch max-h-[190px] max-w-[208px] rounded-[2.5rem]">
            <div className="modal-box max-w-[208px] max-w-[208px] max-h-[190px] rounded-b-[2.5rem]">
                <div className='flex justify-between flow-row bg-white'>
                    <p className='absolute top-2 text-sm'>Playlist</p>
                    <label htmlFor="modalTemplate" className="btn btn-xs btn-circle absolute right-4 top-2">✕</label>
                </div>
                <section className='max-h-[170px] overflow-y-scroll mt-5'>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
                    <div className={className}>{children}</div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default ModalLayout;