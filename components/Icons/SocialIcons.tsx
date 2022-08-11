import React from 'react'

export default function SocialIcons() {
  return (
    <>
      <label className="form-label d-inline-block align-middle my-2 me-3">
        Share:
      </label>
      <a className="btn-share btn-twitter me-2 my-2" href="#">
        <i className="ci-twitter"></i>
        Twitter
      </a>
      <a className="btn-share btn-instagram me-2 my-2" href="#">
        <i className="ci-instagram"></i>
        Instagram
      </a>
      <a className="btn-share btn-facebook my-2" href="#">
        <i className="ci-facebook"></i>
        Facebook
      </a>
    </>
  );
}
