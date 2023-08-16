import React, {useRef, useState} from 'react'

export default function Dial() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [animal, setAnimal] = useState('')

  const handleOpen = () => {
    dialogRef.current?.showModal()
  }

  return (
    <>
      <button onClick={handleOpen}>
        Open Dialog
      </button>
      <dialog
        ref={dialogRef}
        onClose={() => console.log(dialogRef.current?.returnValue)}
      >
        <form method="dialog">
          <p>
            <label>
              Favorite animal:&nbsp;
              <select>
                <option></option>
                <option>Brine shrimp</option>
                <option>Red panda</option>
                <option>Spider monkey</option>
              </select>
            </label>
          </p>
          <menu>
            <button>Cancel</button>
            <button id="confirmBtn" value="default">
              Confirm
            </button>
          </menu>
        </form>
      </dialog>
      <output aria-live="polite">{animal}</output>
    </>
  )
}