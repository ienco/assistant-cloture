#!/usr/bin/env python3
"""Assemble dist/app.js (layout + logo + script) et dist/app.css à partir de src/.

Usage : python3 build.py
"""
import base64, json, pathlib, re

ROOT = pathlib.Path(__file__).parent
src, dist = ROOT / "src", ROOT / "dist"
dist.mkdir(exist_ok=True)

css = (src / "style.css").read_text()
css_min = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
css_min = re.sub(r"\s+", " ", css_min)
css_min = re.sub(r"\s*([{};:,>])\s*", r"\1", css_min).replace(";}", "}").strip()
(dist / "app.css").write_text(css_min + "\n")

layout = (src / "layout.html").read_text()
logo = "data:image/png;base64," + base64.b64encode((ROOT / "assets" / "logo.png").read_bytes()).decode()
app = (src / "app.js").read_text()

bundle = f"""/* Assistant de clôture – ienco expertise. Fichier généré par build.py : ne pas modifier. */
(function(){{
var mount = document.getElementById("ienco-app") || document.body.appendChild(document.createElement("div"));
window.IENCO_LOGO = {json.dumps(logo)};
mount.innerHTML = {json.dumps(layout, ensure_ascii=False)};
}})();
{app}"""
(dist / "app.js").write_text(bundle)
print(f"dist/app.js {len(bundle):,} car. · dist/app.css {len(css_min):,} car.")
