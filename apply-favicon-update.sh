#!/usr/bin/env bash
# Apply the favicon fix patch.
DIR="$(dirname "$0")"

"$DIR/scripts/apply-patch.sh" "$DIR/favicon-fix.patch"

