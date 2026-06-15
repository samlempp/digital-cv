(function() {
  var container = document.querySelector('.hero-shapes');
  if (!container) return;

  var desktopQuery = window.matchMedia('(min-width: 1024px)');
  var shapes = [];
  var animId = null;
  var lastTime = 0;

  function getShapeRadius(el) {
    var w = el.offsetWidth;
    var h = el.offsetHeight;
    return Math.max(w, h) / 2;
  }

  function initShapes() {
    shapes = [];
    var els = container.querySelectorAll('.hero-shape');
    var w = container.offsetWidth;
    var h = container.offsetHeight;
    var speed = 60; // pixels per second base

    els.forEach(function(el, i) {
      var r = getShapeRadius(el);
      var x, y;
      var attempts = 0;

      do {
        x = r + Math.random() * (w - 2 * r);
        y = r + Math.random() * (h - 2 * r);
        attempts++;
      } while (attempts < 50 && shapes.some(function(s) {
        var dx = s.x - x;
        var dy = s.y - y;
        return Math.sqrt(dx * dx + dy * dy) < (s.radius + r + 10);
      }));

      var angle = Math.random() * Math.PI * 2;
      var spd = speed * (0.7 + Math.random() * 0.6);

      shapes.push({
        el: el,
        x: x,
        y: y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        radius: r
      });

      el.style.left = (x - el.offsetWidth / 2) + 'px';
      el.style.top = (y - el.offsetHeight / 2) + 'px';
    });
  }

  function collideShapes(a, b) {
    var dx = b.x - a.x;
    var dy = b.y - a.y;
    var dist = Math.sqrt(dx * dx + dy * dy);
    var minDist = a.radius + b.radius;
    if (dist >= minDist || dist === 0) return;

    var nx = dx / dist;
    var ny = dy / dist;

    var overlap = minDist - dist;
    var totalMass = (a.radius + b.radius);
    var aRatio = b.radius / totalMass;
    var bRatio = a.radius / totalMass;

    a.x -= nx * overlap * aRatio;
    a.y -= ny * overlap * aRatio;
    b.x += nx * overlap * bRatio;
    b.y += ny * overlap * bRatio;

    var dvx = a.vx - b.vx;
    var dvy = a.vy - b.vy;
    var dvn = dvx * nx + dvy * ny;
    if (dvn <= 0) return;

    var impulse = 1.8 * dvn;
    a.vx -= impulse * nx * aRatio;
    a.vy -= impulse * ny * aRatio;
    b.vx += impulse * nx * bRatio;
    b.vy += impulse * ny * bRatio;
  }

  function clampToWall(shape, w, h) {
    var r = shape.radius;
    if (shape.x < r) { shape.x = r; shape.vx = Math.abs(shape.vx); }
    if (shape.x > w - r) { shape.x = w - r; shape.vx = -Math.abs(shape.vx); }
    if (shape.y < r) { shape.y = r; shape.vy = Math.abs(shape.vy); }
    if (shape.y > h - r) { shape.y = h - r; shape.vy = -Math.abs(shape.vy); }
  }

  function tick(time) {
    if (!lastTime) lastTime = time;
    var dt = Math.min((time - lastTime) / 1000, 0.05);
    lastTime = time;

    var w = container.offsetWidth;
    var h = container.offsetHeight;

    for (var i = 0; i < shapes.length; i++) {
      var s = shapes[i];
      s.radius = getShapeRadius(s.el);
      s.x += s.vx * dt;
      s.y += s.vy * dt;
    }

    for (var i = 0; i < shapes.length; i++) {
      for (var j = i + 1; j < shapes.length; j++) {
        collideShapes(shapes[i], shapes[j]);
      }
    }

    for (var i = 0; i < shapes.length; i++) {
      clampToWall(shapes[i], w, h);
    }

    for (var i = 0; i < shapes.length; i++) {
      var s = shapes[i];
      s.el.style.left = (s.x - s.el.offsetWidth / 2) + 'px';
      s.el.style.top = (s.y - s.el.offsetHeight / 2) + 'px';
    }

    animId = requestAnimationFrame(tick);
  }

  function start() {
    stop();
    initShapes();
    lastTime = 0;
    animId = requestAnimationFrame(tick);
  }

  function stop() {
    if (animId) {
      cancelAnimationFrame(animId);
      animId = null;
    }
  }

  function handleMediaChange() {
    if (desktopQuery.matches) {
      start();
    } else {
      stop();
      for (var i = 0; i < shapes.length; i++) {
        shapes[i].el.style.left = '';
        shapes[i].el.style.top = '';
      }
    }
  }

  desktopQuery.addEventListener('change', handleMediaChange);

  if (desktopQuery.matches) start();
})();
