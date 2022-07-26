import React from "react";
export default class Signup extends React.Component {
   render(){
  return (
  <div className="hr-community">
  <div className="body-wrap community-page auth-page signup-page">
  <div className="show-cookie banner">
  <div className="cookie-banner-wrapper">
  <div className="cookie-container">
  <div className="cookie-message">
  We use cookies to ensure you have the best browsing experience on our website. Please read our<a target="__blank" className="cookie-link" href="/privacy#cookies"> cookie policy </a>for more information about how we use cookies.</div>
  <div className="cookie-btn-wrapper">
  <button className="button-14" role="button">
  <div className="ui-content align-icon-right">
  <span className="ui-text" aria-hidden="false">  <strong>Ok</strong>  </span>
  </div>
  </button>
  </div>
  </div>
  </div>
  <div className="theme-m new-design">
  <div className="community-content">
  <div className="auth-container container theme -m">
  <div className="auth-content-wrap">
  <div className="logo-wrap">
  <img className="logo-img" src="https://hrcdn.net/fcore/assets/brand/hr-logo-new-black-green-2f615594d2.svg" alt="HackerRank" />
  </div>
  <h2 className="auth-category-title">For Developers</h2>
  <p className="auth-category-subtitle">
  Practice coding, prepare for interviews, and get hired.</p>
  <div className="auth-box-container">
<div className="auth-box">
<div className="ui-tabs-wrap auth-content">
<div className="render-list clearfix">
<div className="tab-header" role="navigation">
<a id="tab-2-item-0" className="tab-item-link tab-item active" href="/auth/signup">Sign up</a>
<a id="tab-2-item-1" className="tab-item-link tab-item" href="/auth/login">Log in</a>
</div>
</div>
<div className="tab-list-content" id="tab-2-content-0" aria-labelledby="tab-2-item-0">
<div className="signup-form auth-form theme -m">
<form className="form" method="POST">
<div className="form-item">
<div className="custom-input theme-m size-large">
<div className="input-wrap align-icon-left has-icon">
<div className="ui-tooltip-wrapper">
<input type="text" id="input-3" className="input" placeholder="First & Last name" aria-label="First & Last name" name="name"/>
</div>
<i className="ui-icon-user input-icon"></i>
</div>
</div>
</div>
<div className="form-item">
<div className="custom-input theme-m size-large">
<div className="input-wrap align-icon-left has-icon">
<div className="ui-tooltip-wrapper">
<input type="text" id="input-4" className="input" placeholder="Email" aria-label="Email" name="email"/>
</div>
<i className="ui-icon-mail input-icon"></i>
</div>
</div>
</div>
<div className="form-item">
<div className="custom-input theme-m size-large">
<div className="input-wrap align-icon-left has-icon">
<div className="ui-tooltip-wrapper">
<input type="password" id="input-5" className="input" placeholder="Your password" aria-label="Your password" name="password" />
</div>
<i className="ui-icon-lock input-icon"></i>
</div>
</div>
</div>
<div className="form-item clearfix">
<button className="ui-btn ui-btn-large ui-btn-primary auth-button ui-btn-styled" type="button" value="request" data-analytics="SignupPassword">
<div className="ui-content align-icon-right">
<span className="ui-text" aria-hidden="false">Create An Account</span>
</div>
</button>
</div>
</form>
</div>
<div className="social-login">
<div className="social-login-label">
<span className="label-text">or connect with</span>
</div>
<ul className="social-btn-wrap">
<li className="social-btn-item">
<button className="ui-btn ui-btn-normal ui-btn-plain social-btn" data-analytics="SignupFacebook" data-automation="facebook">
<div className="ui-content align-icon-right">
<span className="ui-text" aria-hidden="false">
<img className="social-btn-icon" alt="Login with Facebook" src="https://hrcdn.net/fcore/assets/facebook-colored-af4249157d.svg" />
</span>
</div>
</button>
</li>
<li className="social-btn-item">
<button className="ui-btn ui-btn-normal ui-btn-plain social-btn" data-analytics="SignupGoogle" data-automation="google">
<div className="ui-content align-icon-right">
<span className="ui-text" aria-hidden="false">
<img className="social-btn-icon" alt="Login with Google" src="https://hrcdn.net/fcore/assets/google-colored-20b8216731.svg" />
</span>
</div>
</button>
</li>
<li className="social-btn-item">
<button className="ui-btn ui-btn-normal ui-btn-plain social-btn" data-analytics="SignupLinkedIn" data-automation="linkedin">
<div className="ui-content align-icon-right">
<span className="ui-text" aria-hidden="false">
<img className="social-btn-icon" alt="Login with LinkedIn" src="https://hrcdn.net/fcore/assets/linkedin-colored-1db195795c.svg" />
</span>
</div>
</button>
</li>
<li className="social-btn-item">
<button className="ui-btn ui-btn-normal ui-btn-plain social-btn" data-analytics="SignupGithub" data-automation="github">
<div className="ui-content align-icon-right">
<span className="ui-text" aria-hidden="false">
<img className="social-btn-icon" alt="Login with Github" src="https://hrcdn.net/fcore/assets/github-colored-1db995054b.svg" />
</span>
</div>
</button>
</li>
</ul>
</div>
</div>
</div>
<p className="signup-agreement">"By signing up you agree to our"<a target="_blank" className="text-link" href="/terms-of-service">
"Terms of Service"</a>"and"<a target="_blank" className="text-link" href="/privacy">"Privacy Policy"</a>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
  );
}
}
