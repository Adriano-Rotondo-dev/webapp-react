import { useState } from "react";

export default function AddReview({ handleSubmit, formData, setFormData }) {
  const [open, setOpen] = useState(false);

  const formToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="container d-flex justify-content-center">
        <button className="btn btn-secondary" onClick={formToggle}>
          {open ? "Hide Form" : "Add your own review"}
        </button>
      </div>
      {open && (
        <div className="bg-light rounded mt-3">
          <form className="card p-2" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                <span className="fw-bold">Username</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                aria-describedby="helpId"
                placeholder="Type your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="vote" className="form-label">
                <span className="fw-bold">Rating</span>
              </label>
              <input
                type="number"
                className="form-control"
                name="vote"
                id="vote"
                min="1"
                max="5"
                aria-describedby="helpId"
                placeholder="Rate the movie from 1 to 5!"
                value={formData.vote}
                onChange={(e) =>
                  setFormData({ ...formData, vote: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                <span className="fw-bold">Review</span>
              </label>
              <textarea
                className="form-control"
                name="text"
                id="text"
                placeholder="Type your review here"
                rows="3"
                value={formData.text}
                onChange={(e) =>
                  setFormData({ ...formData, text: e.target.value })
                }
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn-submit btn btn-secondary w-25"
              >
                <i className="bi bi-floppy"></i> Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
