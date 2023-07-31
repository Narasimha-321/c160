AFRAME.registerComponent('tour', {
    init: function () {
      const placeContainer = document.querySelector('#placeContainer');
  
      function createPlace(position, imageSrc, title) {
        const place = document.createElement('a-entity');
        place.setAttribute('position', position);
        place.setAttribute('tour-place', { src: imageSrc });
        place.setAttribute('cursor-events', {});
        place.setAttribute('tour-title', { title: title });
  
        return place;
      }
  
      function createThumbnail(position, imageSrc) {
        const thumbnail = document.createElement('a-entity');
        thumbnail.setAttribute('geometry', 'primitive: plane; width: 1.5; height: 1');
        thumbnail.setAttribute('material', `src: ${imageSrc}`);
        thumbnail.setAttribute('position', position);
  
        return thumbnail;
      }
  
      function createTitle(position, titleText) {
        const title = document.createElement('a-entity');
        title.setAttribute('text', `value: ${titleText}; align: center; width: 4.5; color: white;`);
        title.setAttribute('position', position);
  
        return title;
      }
  
      function showView(imageSrc) {
        const sky = document.querySelector('a-sky');
        sky.setAttribute('src', imageSrc);
      }
  
      function hideEl(el) {
        el.setAttribute('visible', false);
      }
  
      // Create places and thumbnails
      const place1 = createPlace('-2 1 -5', 'image1.jpg', 'Place 1 Title');
      const thumbnail1 = createThumbnail('-2 1 -5', 'image1.jpg');
      const title1 = createTitle('-2 0.5 -5', 'Place 1 Title');
  
      const place2 = createPlace('3 1 -3', 'image2.jpg', 'Place 2 Title');
      const thumbnail2 = createThumbnail('3 1 -3', 'image2.jpg');
      const title2 = createTitle('3 0.5 -3', 'Place 2 Title');
  
      // Add places and thumbnails to the scene
      placeContainer.appendChild(place1);
      placeContainer.appendChild(thumbnail1);
      placeContainer.appendChild(title1);
  
      placeContainer.appendChild(place2);
      placeContainer.appendChild(thumbnail2);
      placeContainer.appendChild(title2);
    },
  });
  