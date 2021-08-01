const TOTAL = 12;

export class Particle {
     constructor(pos, color, ctx) {
        this.color = color;

        const randMax = 20;
        this.points = [{
            x: pos.x,
            y: pos.y
        }]

        for (let i = 0; i < TOTAL; i++) {
            const prev = this.points[i - 1];
            this.points.push(this.setTandom(prev, randMax));
        }
        
        this.draw(ctx);
     }

     draw(ctx) {
         ctx.beginPath();
         ctx.lineWidth = 0.3;
         ctx.strokeStyle = this.color;
         ctx.moveTo(this.points[0].x, this.points[0].y);

         for (let i = 1; i < points.length; i++) {
             const prev = this.points[i - 1];
             const cur = this.points[i];
             const cx = (prev.x + cur.x) / 2;
             const cy = (prev.y + cur.y) / 2;
             ctx.quedraticCurveTo(prev.x, prev.y, cx, cy)
         }

         ctx.stroke();
     }
 
     setTendom(pos, gap) {
         return {
             x: pos.x + Math.random() * (gap + gap) - gap,
             y: pos.y + Math.random() * (gap + gap) - gap
         };
     }
}