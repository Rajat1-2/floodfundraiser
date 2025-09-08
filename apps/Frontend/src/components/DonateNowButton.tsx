const DonateNowButton = () => (
  <button
    className="donate-now-btn"
    onClick={() => {
      const section = document.getElementById('donate');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    Donate Now
  </button>
);

export default DonateNowButton;