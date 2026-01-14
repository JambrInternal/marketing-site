#!/usr/bin/env bash
set -euo pipefail

root_page="index.html"
sub_pages=(how-it-works/index.html book/index.html privacy/index.html)

rg -q 'href="assets/styles\.css"' "$root_page"
rg -q 'src="assets/scripts\.js"' "$root_page"
rg -q 'src="brand/agent-maple-icon-mono-white-64x64\.png"' "$root_page"

for page in "${sub_pages[@]}"; do
  rg -q 'href="\.\./assets/styles\.css"' "$page"
  rg -q 'src="\.\./assets/scripts\.js"' "$page"
  rg -q 'src="\.\./brand/agent-maple-icon-mono-white-64x64\.png"' "$page"
done

test -f assets/styles.css
test -f assets/scripts.js
test -f brand/agent-maple-icon-mono-white-64x64.png
