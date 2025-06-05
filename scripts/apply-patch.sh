#!/usr/bin/env bash
# Simple helper to apply a patch file using git apply.
# Usage: ./scripts/apply-patch.sh mychange.patch

set -e

PATCH_FILE="$1"
if [[ -z "$PATCH_FILE" ]]; then
  echo "Usage: $0 <patch-file>" >&2
  exit 1
fi

if [[ ! -f "$PATCH_FILE" ]]; then
  echo "Patch file '$PATCH_FILE' not found" >&2
  exit 1
fi

git apply "$PATCH_FILE"
echo "Applied patch '$PATCH_FILE'"

