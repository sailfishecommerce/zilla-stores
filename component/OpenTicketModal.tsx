export default function OpenTicketModal() {
    return (
        <form
            className="needs-validation modal fade"
            method="post"
            id="open-ticket"
            tabIndex={-1}
            noValidate
        >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Submit new ticket</h5>
                        <button
                            className="btn-close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p className="text-muted fs-sm">
                            We normally respond tickets within 2 business days.
                        </p>
                        <div className="row gx-4 gy-3">
                            <div className="col-12">
                                <label
                                    className="form-label"
                                    htmlFor="ticket-subject"
                                >
                                    Subject
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="ticket-subject"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please fill in the subject line!
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label
                                    className="form-label"
                                    htmlFor="ticket-type"
                                >
                                    Type
                                </label>
                                <select
                                    className="form-select"
                                    id="ticket-type"
                                    required
                                >
                                    <option>Choose type</option>
                                    <option value="Website problem">
                                        Website problem
                                    </option>
                                    <option value="Partner request">
                                        Partner request
                                    </option>
                                    <option value="Complaint">Complaint</option>
                                    <option value="Info inquiry">
                                        Info inquiry
                                    </option>
                                </select>
                                <div className="invalid-feedback">
                                    Please choose ticket type!
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label
                                    className="form-label"
                                    htmlFor="ticket-priority"
                                >
                                    Priority
                                </label>
                                <select
                                    className="form-select"
                                    id="ticket-priority"
                                    required
                                >
                                    <option>How urgent is your issue?</option>
                                    <option value="Urgent">Urgent</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please choose how urgent your ticket is!
                                </div>
                            </div>
                            <div className="col-12">
                                <label
                                    className="form-label"
                                    htmlFor="ticket-description"
                                >
                                    Describe your issue
                                </label>
                                <textarea
                                    className="form-control"
                                    id="ticket-description"
                                    rows={8}
                                    required
                                ></textarea>
                                <div className="invalid-feedback">
                                    Please provide ticket description!
                                </div>
                            </div>
                            <div className="col-12">
                                <input
                                    className="form-control"
                                    type="file"
                                    id="file-input"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            className="btn btn-secondary"
                            type="button"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button className="btn btn-primary" type="submit">
                            Submit Ticket
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
