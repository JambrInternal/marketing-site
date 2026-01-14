#!/usr/bin/env bash
set -euo pipefail

header_component="components/Header.jsx"

rg -q 'src="/brand/agent-maple-icon-mono-white-64x64\\.png"' "$header_component"
rg -q 'srcSet="/brand/agent-maple-icon-mono-white-64x64\\.png 1x, /brand/agent-maple-icon-mono-white-128x128\\.png 2x, /brand/agent-maple-icon-mono-white-256x256\\.png 4x"' "$header_component"

test -f public/brand/agent-maple-icon-mono-white-64x64.png
test -f public/brand/agent-maple-icon-mono-white-128x128.png
test -f public/brand/agent-maple-icon-mono-white-256x256.png
