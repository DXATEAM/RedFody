(() => {
	class Whatsapp {
		constructor({
			title = "¿Necesitas ayuda?",
			subtitle = "Chatea con nosotros por Whatsapp",
			agents = [],
		}) {
			(this.t = title),
			(this.s = subtitle),
			(this.a = agents)
				this.render();
		}
		agent({ cta: c, name: n, hours: h, phone: p }) {
			return `<a href="#" data-phone="${p}" class="wa-w_a_a js-owaa" title="${n} ${p}">
      <span class="wa-w_a_a_i"></span>
      <span class="wa-w_a_a_c">
        <span class="a_t">${n}</span>
        <span class="a_s">${h}</span>
        <span class="a_c">${c}<span class="a_c_i"></span></span>
      </span>
    </a>`;
		}
		header() {
			return `<header class="wa-w_h">
        <span class="wa-w_h_t">${this.t}</span>
        <span class="wa-w_h_s">
          <span class="wa-w_h_i"></span>
          ${this.s}
        </span>
      </header>`;
		}
		render() {
			if (!this.a.length) return;
			let a = "";
			for (const s of this.a) a += this.agent(s);
			$("body").append(
				`<div class="wa-w">
          ${this.header()}
          <section class="wa-w_a">${a}</section>
          <button class="wa-w_b" title="${this.t}"></button>
        </div>`
			),
			$(document)
				.on({ click: () => $(".wa-w").toggleClass("open") }, ".wa-w_b")
				.on({
					click: (e) => {
						e.preventDefault(), this.openAgent(e.currentTarget.dataset);
					},
				}, ".js-owaa");
		}
		openAgent({ phone }) {
				window.open(
					`https://wa.me/${phone.replace(/ /g, "").replace("+", "")}`,
					"_blank"
				);
		}
	}
  window.onload = () => {
    new Whatsapp({
      agents:[{
        name:"Servicio al cliente",
        phone:"+57 320 2851704",
        hours:"Disponible 8am - 7pm",
        cta:"Haz clic para iniciar chat"
      }]
    })
  }
})();