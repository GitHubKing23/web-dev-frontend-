 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/PATCH_ERRORS.md
index 0000000000000000000000000000000000000000..937641db01adab0e4ea152364e9db124b6756b0e 100644
--- a//dev/null
+++ b/PATCH_ERRORS.md
@@ -0,0 +1,34 @@
+# Common Patch Errors
+
+### `/dev/null: does not exist in index`
+This error occurs when applying a patch that adds a new file but the patch header is malformed or you're not running the command from the repository root. Git expects the line `--- /dev/null` for new files.
+
+To fix it:
+1. Ensure the patch contains `--- /dev/null` without extra slashes.
+2. Run the command from the repository's top level:
+   ```bash
+   (cd "$(git rev-parse --show-toplevel)" && git apply --3way patchfile)
+   ```
+3. Optionally verify the patch first:
+   ```bash
+   git apply --check patchfile
+   ```
+
+This will confirm that the patch can be applied without modifying your working tree.
+
+### Example Patch
+
+Here is a minimal patch to create a new file `src/utils/sum.js`:
+
+```diff
+diff --git a/src/utils/sum.js b/src/utils/sum.js
+new file mode 100644
+index 0000000..e335e165
+--- /dev/null
++++ b/src/utils/sum.js
+@@
+function sum(a, b) {
+  return a + b;
+}
+module.exports = sum;
+```
 
EOF
)