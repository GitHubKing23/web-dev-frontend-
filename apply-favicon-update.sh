#!/bin/bash
cd "$(git rev-parse --show-toplevel)" || exit 1

git apply --3way <<'EOF'
diff --git a/index.html b/index.html
index c0b62b66516f74d66098b7e844727f3e9da7c8d9..f8fbd08a0e40daed9aa905b575b2a1aaf70bb2f6 100644
--- a/index.html
+++ b/index.html
@@ -1,20 +1,44 @@
 <!doctype html>
 <html lang="en">
   <head>
     <meta charset="UTF-8" />
-    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
+    <!-- ✅ Custom Favicon -->
+    <link rel="icon" type="image/x-icon" href="/favicon-v2.ico" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>WebMasteryPro</title>
     <!-- ✅ Add Google Font for Elegant Headings -->
     <link
       href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
       rel="stylesheet"
     />
   </head>
   <body>
     <div id="root"></div>
     <script type="module" src="/src/main.jsx"></script>
+
+    <!-- ✅ Favicon Debug Script -->
+    <script>
+      window.addEventListener('load', () => {
+        const favicon = document.querySelector("link[rel~='icon']");
+        if (favicon) {
+          console.log('✅ Favicon element found:', favicon.href);
+          const img = new Image();
+          img.src = favicon.href;
+          img.onload = () => {
+            console.log('🟢 Favicon image loaded successfully.');
+          };
+          img.onerror = () => {
+            console.error('🔴 Failed to load favicon image:', favicon.href);
+          };
+        } else {
+          console.warn('⚠️ Favicon link tag not found in the document.');
+        }
+      });
+    </script>
   </body>
 </html>

diff --git a/public/index.html b/public/index.html
index 857ff159555fba503a4aa2a41d77520a6418ffdc..46f98365f9915cd3ff0c6dd3001e84fa9a388c10 100644
--- a/public/index.html
+++ b/public/index.html
@@ -1,34 +1,34 @@
 <!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <title>WebMasteryPro</title>
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
-    <!-- ✅ Favicon -->
-    <link rel="icon" type="image/png" href="/favicon.png" />
+    <!-- ✅ Favicon -->
+    <link rel="icon" type="image/x-icon" href="/favicon-v2.ico" />
     <!-- ✅ Google Analytics -->
     <script async src="https://www.googletagmanager.com/gtag/js?id=G-9N72N7V7SX"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag() {
         dataLayer.push(arguments);
       }
       gtag('js', new Date());
       gtag('config', 'G-9N72N7V7SX');
     </script>
   </head>
   <body>
     <div id="root"></div>
     <!-- ✅ Favicon Debug Script -->
     <script>
       window.addEventListener('load', () => {
         const favicon = document.querySelector("link[rel~='icon']");
         if (favicon) {
           console.log("✅ Favicon element found:", favicon.href);
           const img = new Image();
           img.src = favicon.href;
           img.onload = () => console.log("🟢 Favicon loaded.");
           img.onerror = () => console.error("🔴 Favicon failed:", favicon.href);
         } else {
           console.warn("⚠️ No favicon tag found.");
         }
       });
     </script>
   </body>
 </html>
EOF
