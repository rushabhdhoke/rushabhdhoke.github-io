// Text Animation
// ------------------
const textAnimator = {
  init: () => {
    this.dynamicText = document.getElementById('dynamic-text');
    this.expertise = [
      "Mechatronics Engineer",
      "Robotics Engineer",
      "AI/ML Enthusiast",
      "Innovator"
    ];
    this.index = 0;
    setTimeout(textAnimator.startAnimation, 2000);
  },
  startAnimation: () => {
    textAnimator.dynamicText.textContent = textAnimator.expertise[0];
    setInterval(textAnimator.updateText, 3000);
  },
  updateText: () => {
    textAnimator.index = (textAnimator.index + 1) % textAnimator.expertise.length;
    textAnimator.dynamicText.textContent = textAnimator.expertise[textAnimator.index];
  }
};
