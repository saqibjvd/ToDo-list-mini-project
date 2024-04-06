const ModalProps = {
  modalOpen: false, 
  setModalOpen: function(open) { // a function that takes a boolean argument
    return open; // return either boolean or void
  },
  children: null // prop is used to render any child components or elements within the modal.
};


export default function Modal({modalOpen, setModalOpen, children}) {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <form method="dialog">
          <button onClick={()=> setModalOpen(false)}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
          >x</button>
        </form>
        {children}
      </div>
    </div>
  )
}
