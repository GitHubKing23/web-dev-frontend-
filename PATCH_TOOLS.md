# Git Patch Utilities

This project includes two small helper scripts for applying a favicon fix and exporting commit information.

## apply-favicon-update.sh

This script checks for a file named `favicon-fix.patch` and applies it to `public/index.html` using `git apply`. If the patch is applied successfully, the updated file is committed and the resulting commit hash is printed. The commit is also exported to a patch file named `<commit-hash>.patch`.

Run it from the repository root:

```bash
./apply-favicon-update.sh
```

## git-info.sh

`git-info.sh` prints the current `HEAD` commit hash and saves that commit to a patch file with the same hash. This is useful for capturing the latest commit in patch form.

```bash
./git-info.sh
```
