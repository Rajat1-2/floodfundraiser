

const DonateNowButton = () => (
  <button className="donate-now-btn" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
    Donate Now
  </button>
);

export default DonateNowButton;