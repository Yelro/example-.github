diff --git a/src/index.ts b/src/index.ts
index 1fd5ddd..97163f9 100644
--- a/src/index.ts
+++ b/src/index.ts
@@ -28,3 +28,8 @@ export const stringLength = (str: string) => {
 };
 
 export const reverseString = (str: string) => str.split('').reverse().join('');
+
+// yo hice este cambio
+export const Orley = (a: number, b: number) => {
+  return a / b;
+};
