#!/bin/bash
# Apply the favicon update patch and show commit info
set -e

PATCH_FILE="favicon-fix.patch"

if [ ! -f "$PATCH_FILE" ]; then
  echo "Patch file $PATCH_FILE not found" >&2
  exit 1
fi

# Check if the patch can be applied cleanly
if git apply --check "$PATCH_FILE" > /dev/null 2>&1; then
  echo "Applying patch $PATCH_FILE..."
  git apply "$PATCH_FILE"
  git add public/index.html
  git commit -m "Apply favicon update patch"
  HASH=$(git rev-parse HEAD)
  echo "Patch applied and committed as $HASH" 
  git show "$HASH" > "${HASH}.patch"
  echo "Patch saved to ${HASH}.patch"
else
  echo "Patch cannot be applied cleanly. It may already be applied."
fi
