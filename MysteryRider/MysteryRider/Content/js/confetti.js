var confettiColors = ["#FF1921", "#870004", "#D40007", "#008724", "#00D438", "#97ED8A"];
var confettiClear = true;

if (!Array.from) {
    Array.from = (function () {
        var toStr = Object.prototype.toString;
        var isCallable = function (fn) {
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        var toInteger = function (value) {
            var number = Number(value);
            if (isNaN(number)) { return 0; }
            if (number === 0 || !isFinite(number)) { return number; }
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function (value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        };

        // The length property of the from method is 1.
        return function from(arrayLike/*, mapFn, thisArg */) {
            // 1. Let C be the this value.
            var C = this;

            // 2. Let items be ToObject(arrayLike).
            var items = Object(arrayLike);

            // 3. ReturnIfAbrupt(items).
            if (arrayLike == null) {
                throw new TypeError("Array.from requires an array-like object - not null or undefined");
            }

            // 4. If mapfn is undefined, then let mapping be false.
            var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
            var T;
            if (typeof mapFn !== 'undefined') {
                // 5. else
                // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                if (!isCallable(mapFn)) {
                    throw new TypeError('Array.from: when provided, the second argument must be a function');
                }

                // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                if (arguments.length > 2) {
                    T = arguments[2];
                }
            }

            // 10. Let lenValue be Get(items, "length").
            // 11. Let len be ToLength(lenValue).
            var len = toLength(items.length);

            // 13. If IsConstructor(C) is true, then
            // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
            // 14. a. Else, Let A be ArrayCreate(len).
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);

            // 16. Let k be 0.
            var k = 0;
            // 17. Repeat, while k < len… (also steps a - h)
            var kValue;
            while (k < len) {
                kValue = items[k];
                if (mapFn) {
                    A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                } else {
                    A[k] = kValue;
                }
                k += 1;
            }
            // 18. Let putStatus be Put(A, "length", len, true).
            A.length = len;
            // 20. Return A.
            return A;
        };
    }());
}

function createConfetti(a, b) {
    return Array.from({
        length: b
    }).map(function (f, e) {
        var c = confettiColors[e % confettiColors.length];
        var g = document.createElement("div");
        g.classList = ["fetti"];
        g.style["background-color"] = c;
        g.style.width = "10px";
        g.style.height = "10px";
        g.style.borderTopLeftRadius = "10px";
        g.style.borderTopRightRadius = "8px";
        g.style.borderBottomLeftRadius = "6px";
        g.style.borderBottomRightRadius = "12px";
        g.style.position = "absolute";
        g.style.opacity = 1;
        a.appendChild(g);
        return g
    })
}

function randomPhysics(g, c, a, f) {
    var b = g * (Math.PI / 180);
    var e = c * (Math.PI / 180);
    return {
        x: f / 2,
        y: -40,
        wobble: Math.random() * 10,
        velocity: 5 + Math.random() * a,
        angle2D: -b + (0.5 * e - Math.random() * e),
        angle3D: -(Math.PI / 4) + Math.random() * (Math.PI / 2),
        tiltAngle: Math.random() * Math.PI
    }
}

function updateFetti(b, a, e) {
    b.physics.x += Math.cos(b.physics.angle2D) * b.physics.velocity;
    b.physics.y += Math.sin(b.physics.angle2D) * b.physics.velocity;
    b.physics.z += Math.sin(b.physics.angle3D) * b.physics.velocity;
    b.physics.wobble += 0.05;
    b.physics.velocity *= e;
    b.physics.y += 3;
    b.physics.tiltAngle += 30.1;
    var j = b.physics;
    var i = j.x;
    var h = j.y;
    var f = j.tiltAngle;
    var g = j.wobble;
    var l = i + 10 * Math.cos(g);
    var k = h + 10 * Math.sin(g);
    var c = "translate3d(" + l + "px, " + k + "px, 0) rotateZ(" + f + "deg)";
    b.element.style.transform = c;
    b.element.style.opacity = Math.min(1 - a, 1000 - h)
}

function animateConfetti(b, f, e) {
    var a = 100;
    var c = 0;

    function g() {
        f.forEach(function (h) {
            return updateFetti(h, c / a, e)
        });
        c += 1;
        if (c < a) {
            requestAnimationFrame(g);
            if (c == a / 2) {
                confettiClear = true
            }
        } else {
            f.forEach(function (h) {
                return b.removeChild(h.element)
            })
        }
    }
    requestAnimationFrame(g)
}

function confetti(m) {
    if (confettiClear) {
        confettiClear = false;
        var g = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var o = g.angle;
        var f = o === undefined ? 230 : o;
        var c = g.decay;
        var h = c === undefined ? 0.88 : c;
        var k = g.spread;
        var l = k === undefined ? 360 : k;
        var i = g.startVelocity;
        var j = i === undefined ? 25 : i;
        var b = g.elementCount;
        var e = b === undefined ? 80 : b;
        var a = createConfetti(m, e);
        var n = a.map(function (p) {
            return {
                element: p,
                physics: randomPhysics(f, l, j, m.offsetWidth)
            }
        });
        animateConfetti(m, n, h)
    }
}
jQuery(function () {
    jQuery(document).on({
        mouseover: function () {
            jQuery(this).css("animation", "none");
            confetti(jQuery(this).closest(".surprise-wrapper")[0])
        },
        touchstart: function () {
            var a = jQuery(this).attr("href");
            if (typeof a != "undefined") {
                setTimeout(function () {
                    window.location = a
                }, 1000)
            }
        }
    }, ".surprise-hover")
});