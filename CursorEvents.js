AFRAME.registerComponent('cursor-events', {
  init: function () {
    this.el.addEventListener('mouseenter', this.handleMouseEnterEvents.bind(this));
    this.el.addEventListener('mouseleave', this.handleMouseLeaveEvents.bind(this));
    this.el.addEventListener('click', this.handleMouseClickEvents.bind(this));
  },
  handleMouseEnterEvents: function () {
      this.el.setAttribute('scale', '1.2 1.2 1.2');
  },
  handleMouseLeaveEvents: function () {
    this.el.setAttribute('scale', '1 1 1');
  },
  handleMouseClickEvents: function () {
    const imageSrc = this.el.getAttribute('pic2').src;
    showView(imageSrc);
  },
});
