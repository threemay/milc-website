!(function () {
	'use strict'
	var e,
		t = [
			,
			function (e, t, r) {
				var n = r(294),
					o = r(935),
					c = 'app--1QM4P',
					i = function (e) {
						var t = e.text,
							r = e.project
						return n.createElement('div', null, 'This is the ', t, ', ', r, '!!!')
					},
					u = function () {
						return n.createElement(
							'div',
							{ className: c },
							n.createElement(i, { text: 'config test', project: 'MILC' })
						)
					}
				;(e = r.hmd(e)) && e.hot && e.hot.accept(),
					o.render(n.createElement(u, null), document.querySelector('#root'))
			},
		],
		r = {}
	function n(e) {
		var o = r[e]
		if (void 0 !== o) return o.exports
		var c = (r[e] = { id: e, loaded: !1, exports: {} })
		return t[e](c, c.exports, n), (c.loaded = !0), c.exports
	}
	;(n.m = t),
		(e = []),
		(n.O = function (t, r, o, c) {
			if (!r) {
				var i = 1 / 0
				for (l = 0; l < e.length; l++) {
					;(r = e[l][0]), (o = e[l][1]), (c = e[l][2])
					for (var u = !0, a = 0; a < r.length; a++)
						(!1 & c || i >= c) &&
						Object.keys(n.O).every(function (e) {
							return n.O[e](r[a])
						})
							? r.splice(a--, 1)
							: ((u = !1), c < i && (i = c))
					u && (e.splice(l--, 1), (t = o()))
				}
				return t
			}
			c = c || 0
			for (var l = e.length; l > 0 && e[l - 1][2] > c; l--) e[l] = e[l - 1]
			e[l] = [r, o, c]
		}),
		(n.hmd = function (e) {
			return (
				(e = Object.create(e)).children || (e.children = []),
				Object.defineProperty(e, 'exports', {
					enumerable: !0,
					set: function () {
						throw new Error(
							'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' +
								e.id
						)
					},
				}),
				e
			)
		}),
		(n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}),
		(function () {
			var e = { 143: 0 }
			n.O.j = function (t) {
				return 0 === e[t]
			}
			var t = function (t, r) {
					var o,
						c,
						i = r[0],
						u = r[1],
						a = r[2],
						l = 0
					for (o in u) n.o(u, o) && (n.m[o] = u[o])
					for (a && a(n), t && t(r); l < i.length; l++)
						(c = i[l]), n.o(e, c) && e[c] && e[c][0](), (e[i[l]] = 0)
					n.O()
				},
				r = (self.webpackChunkmilc_website = self.webpackChunkmilc_website || [])
			r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)))
		})()
	var o = n.O(void 0, [935], function () {
		return n(1)
	})
	o = n.O(o)
})()
