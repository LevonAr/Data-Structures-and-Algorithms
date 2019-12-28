int sqrt(int n) {
return sqrt_helper(n, 1, n);
}
int sqrt_helper(int n, int min, int max) {
  if (max < min) return -1; II no square root
