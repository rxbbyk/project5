const directions = {
   UP: 'up',
   DOWN: 'down',
   LEFT: 'left',
   RIGHT: 'right'
}

window.addEventListener("load", function () {
   const canvas = document.querySelector("canvas");

   // Draw 4 frogs facing different directions
   drawFrog(canvas, 50, 50, directions.UP);
   drawFrog(canvas, 180, 50, directions.DOWN);   
   drawFrog(canvas, 50, 180, directions.LEFT);
   drawFrog(canvas, 180, 180, directions.RIGHT);
});

function drawFrog(canvas, x, y, direction = directions.UP) {   
   const context = canvas.getContext("2d");
   const frogImg = document.querySelector("img");


   const centerX = x + frogImg.width / 2;
   const centerY = y + frogImg.height / 2;

   context.resetTransform();

if (direction !== directions.UP) {
   context.translate(centerX, centerY);


   switch (direction) {
      case directions.DOWN:
         // TODO: Translate, rotate, and translate
         context.rotate(Math.PI);
         break;
      case directions.LEFT:
         // TODO: Translate, rotate, and translate
      context.rotate(-Math.PI / 2);            
         break;
      case directions.RIGHT:
         // TODO: Translate, rotate, and translate
         context.rotate(Math.PI / 2);
         break;
   }

   context.translate(-centerX, -centerY);
  }
  context.drawImage(frogImg, x, y);

   // Necessary so next call to drawFrog isn't rotated or translated
   context.resetTransform();
}