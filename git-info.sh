#!/bin/bash
# Print current HEAD hash and save its patch to a file
set -e

HASH=$(git rev-parse HEAD)

echo "Current commit hash: $HASH"

git show "$HASH" > "${HASH}.patch"
echo "Patch saved to ${HASH}.patch"
