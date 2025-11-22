
document.addEventListener('DOMContentLoaded', () => {
    if (typeof p5 === 'undefined') {
        console.error("p5.js not loaded.");
        return;
    }

    const sketch = (p) => {
        let goalVals, curVals;
        let multLabel;
        let container;

        const rInt = (a, b) => p.floor(p.random(a, b));
        const getVals = () => [rInt(2, 4), rInt(4, 8), rInt(3, 9)];

        p.setup = () => {
            container = p.select('#p5-container');
            if (!container) return;
            const cnv = p.createCanvas(container.elt.clientWidth, container.elt.clientHeight, p.WEBGL);
            cnv.parent('p5-container');

            p.colorMode(p.HSB, 1, 1, 1);
            goalVals = getVals();
            curVals = getVals();
            multLabel = p.select("#mults");
        };

        p.draw = () => {
            if (!container) return;
            p.background('#f3f3ff');

            
            p.rotateX(-p.PI / 8);
            p.rotateY(p.frameCount / 100);
            
            let s = p.min(p.width, p.height) * 0.25;
            p.translate(0, -s / 4, 0);
            
            for (let i = 0; i < 3; i++) curVals[i] = p.lerp(curVals[i], goalVals[i], 0.02);
            if (p.frameCount % 400 === 0) goalVals = getVals();
            
            const n = 500;
            let points = [];
            for (let i = 0; i < n; i++) {
                let amt = i / (n - 1);
                let x = p.sin(amt * p.TAU * curVals[0]) * s;
                let y = p.cos(amt * p.TAU * curVals[1]) * s;
                let z = p.sin(amt * p.TAU * curVals[2]) * s;
                points.push(p.createVector(x, y, z));
            }
            
            p.stroke(0, 0, 0);
            for (let i = 0; i < points.length - 1; i++) {
                p.line(points[i].x, points[i].y, points[i].z, points[i+1].x, points[i+1].y, points[i+1].z);
            }
            
            p.noStroke();
            p.fill('#000040');
            for (const pt of points) {
                p.push();
                p.translate(pt.x, pt.y, pt.z);
                p.sphere(3);
                p.pop();
            }
        };

        p.windowResized = () => {
            if (container) {
                p.resizeCanvas(container.elt.clientWidth, container.elt.clientHeight);
            }
        };
    };

    new p5(sketch);
});
