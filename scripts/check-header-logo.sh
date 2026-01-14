#!/usr/bin/env bash
set -euo pipefail

header_component="components/Header.jsx"

rg -q 'withBasePath\\("/brand/agent-maple-icon-mono-white-64x64\\.png"\\)' "$header_component"
rg -q 'withBasePath\\("/brand/agent-maple-icon-mono-white-128x128\\.png"\\)' "$header_component"
rg -q 'withBasePath\\("/brand/agent-maple-icon-mono-white-256x256\\.png"\\)' "$header_component"

test -f public/brand/agent-maple-icon-mono-white-64x64.png
test -f public/brand/agent-maple-icon-mono-white-128x128.png
test -f public/brand/agent-maple-icon-mono-white-256x256.png
