
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import FashionLayout from "../layout/FashionLayout";

export default function AccountSingleTicket() {
    return (
        <FashionLayout title="Account single ticket">
            <>
      <div className="page-title-overlap bg-dark pt-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="ci-home"></i>Home</a></li>
                <li className="breadcrumb-item text-nowrap"><a href="#">Account</a>
                </li>
                <li className="breadcrumb-item text-nowrap active" aria-current="page">Single ticket</li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0">Signle ticket</h1>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">
          <aside className="col-lg-4 pt-4 pt-lg-0 pe-xl-5">
            <div className="bg-white rounded-3 shadow-lg pt-1 mb-5 mb-lg-0">
              <div className="d-md-flex justify-content-between align-items-center text-center text-md-start p-4">
                <div className="d-md-flex align-items-center">
                  <div className="img-thumbnail rounded-circle position-relative flex-shrink-0 mx-auto mb-2 mx-md-0 mb-md-0" style={{width: "6.375rem"}}><span className="badge bg-warning position-absolute end-0 mt-n2" data-bs-toggle="tooltip" title="Reward points">384</span><img className="rounded-circle" src="/img/shop/account/avatar.jpg" alt="Susan Gardner" /></div>
                  <div className="ps-md-3">
                    <h3 className="fs-base mb-0">Susan Gardner</h3><span className="text-accent fs-sm">s.gardner@example.com</span>
                  </div>
                </div><a className="btn btn-primary d-lg-none mb-2 mt-3 mt-md-0" href="#account-menu" data-bs-toggle="collapse" aria-expanded="false"><i className="ci-menu me-2"></i>Account menu</a>
              </div>
              <div className="d-lg-block collapse" id="account-menu">
                <div className="bg-secondary px-4 py-3">
                  <h3 className="fs-sm mb-0 text-muted">Dashboard</h3>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-orders.html"><i className="ci-bag opacity-60 me-2"></i>Orders<span className="fs-sm text-muted ms-auto">1</span></a></li>
                  <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-wishlist.html"><i className="ci-heart opacity-60 me-2"></i>Wishlist<span className="fs-sm text-muted ms-auto">3</span></a></li>
                  <li className="mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-tickets.html"><i className="ci-help opacity-60 me-2"></i>Support tickets<span className="fs-sm text-muted ms-auto">1</span></a></li>
                </ul>
                <div className="bg-secondary px-4 py-3">
                  <h3 className="fs-sm mb-0 text-muted">Account settings</h3>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-profile.html"><i className="ci-user opacity-60 me-2"></i>Profile info</a></li>
                  <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-address.html"><i className="ci-location opacity-60 me-2"></i>Addresses</a></li>
                  <li className="mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-payment.html"><i className="ci-card opacity-60 me-2"></i>Payment methods</a></li>
                  <li className="d-lg-none border-top mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-signin.html"><i className="ci-sign-out opacity-60 me-2"></i>Sign out</a></li>
                </ul>
              </div>
            </div>
          </aside>
          <section className="col-lg-8">
            <div className="d-none d-lg-flex justify-content-between align-items-center pt-lg-3 pb-4 pb-lg-5 mb-lg-4">
              <div className="d-flex w-100 text-light text-center me-3">
                <div className="fs-ms px-3">
                  <div className="fw-medium">Date Submitted</div>
                  <div className="opacity-60">09/27/2019</div>
                </div>
                <div className="fs-ms px-3">
                  <div className="fw-medium">Last Updated</div>
                  <div className="opacity-60">09/30/2019</div>
                </div>
                <div className="fs-ms px-3">
                  <div className="fw-medium">Type</div>
                  <div className="opacity-60">Website problem</div>
                </div>
                <div className="fs-ms px-3">
                  <div className="fw-medium">Priority</div><span className="badge bg-warning">High</span>
                </div>
                <div className="fs-ms px-3">
                  <div className="fw-medium">Status</div><span className="badge bg-success">Open</span>
                </div>
              </div><a className="btn btn-primary btn-sm" href="account-signin.html"><i className="ci-sign-out me-2"></i>Sign out</a>
            </div>
            <div className="d-flex d-lg-none flex-wrap bg-secondary text-center rounded-3 pt-4 px-4 pb-1 mb-4">
              <div className="fs-sm px-3 pb-3">
                <div className="fw-medium">Date Submitted</div>
                <div className="text-muted">09/27/2019</div>
              </div>
              <div className="fs-sm px-3 pb-3">
                <div className="fw-medium">Last Updated</div>
                <div className="text-muted">09/30/2019</div>
              </div>
              <div className="fs-sm px-3 pb-3">
                <div className="fw-medium">Type</div>
                <div className="text-muted">Website problem</div>
              </div>
              <div className="fs-sm px-3 pb-3">
                <div className="fw-medium">Priority</div><span className="badge bg-warning">High</span>
              </div>
              <div className="fs-sm px-3 pb-3">
                <div className="fw-medium">Status</div><span className="badge bg-success">Open</span>
              </div>
            </div>
            <div className="d-flex align-items-start pb-4 border-bottom"><img className="rounded-circle" src="/img/testimonials/03.jpg" width="50" alt="Michael Davis" />
              <div className="ps-3">
                <h6 className="fs-md mb-2">Michael Davis</h6>
                <p className="fs-md mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat cupidatat non proident, sunt in culpa qui.</p><span className="fs-ms text-muted"><i className="ci-time align-middle me-2"></i>Sep 30, 2019 at 11:05AM</span>
              </div>
            </div>
            <div className="d-flex align-items-start py-4 border-bottom"><img className="rounded-circle" src="/img/testimonials/03.jpg" width="50" alt="Michael Davis" />
              <div className="ps-3">
                <h6 className="fs-md mb-2">Michael Davis</h6>
                <p className="fs-md mb-1">Sed elementum tempus egestas sed sed. Aliquam faucibus purus in massa tempor nec feugiat. Interdum varius sit amet mattis. Magna ac placerat vestibulum lectus mauris. Magna fringilla urna porttitor rhoncus dolor purus non. Urna et pharetra pharetra massa massa ultricies mi quis.</p><span className="fs-ms text-muted"><i className="ci-time align-middle me-2"></i>Sep 28, 2019 at 10:00AM</span>
                <div className="d-flex align-items-start border-top pt-4 mt-4"><img className="rounded-circle" src="/img/testimonials/04.jpg" width="50" alt="Susan Gardner" />
                  <div className="ps-3">
                    <h6 className="fs-md mb-2">Susan Gardner</h6>
                    <p className="fs-md mb-1">Egestas sed sed risus pretium quam vulputate dignissim. A diam sollicitudin tempor id eu nisl. Ut porttitor leo a diam. Bibendum at varius vel pharetra vel turpis nunc.</p><span className="fs-ms text-muted"><i className="ci-time align-middle me-2"></i>Sep 27, 2019 at 6:30PM</span>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="h5 mt-2 pt-4 pb-2">Leave a Message</h3>
            <form className="needs-validation" noValidate>
              <div className="mb-3">
                <textarea className="form-control" rows={8} placeholder="Write your message here..." required></textarea>
                <div className="invalid-tooltip">Please write the message!</div>
              </div>
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="close-ticket" />
                  <label className="form-check-label" htmlFor="close-ticket">Submit and close the ticket</label>
                </div>
                <button className="btn btn-primary my-2" type="submit">Submit message</button>
              </div>
            </form>
          </section>
        </div>
      </div>
		</>
        </FashionLayout>
    );
}
