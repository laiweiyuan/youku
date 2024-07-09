public class Matrix {
    public static int matrixChain(int[] p, int[][] m, int[][] s) {
        int n = p.length - 1;
        for (int i = 1; i <= n; i++)
            m[i][i] = 0;
        for (int r = 2; r <= n; r++) {
            for (int i = 1; i <= n - r + 1; i++) {
                int j = i + r - 1;
                m[i][j] = m[i + 1][j] + p[i - 1] * p[i] * p[j];
                s[i][j] = i;
                for (int k = i + 1; k < j; k++) {
                    int t = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
                    if (t < m[i][j]) {
                        m[i][j] = t;
                        s[i][j] = k;
                    }
                }
            }
        }
        return m[1][n];
    }
    
    public static void traceback(int i, int j, int[][] s) {
        if (i == j) {
            System.out.print("A" + i);
            return;
        } else {
            System.out.print("(");
            traceback(i, s[i][j], s);
            traceback(s[i][j] + 1, j, s);
            System.out.print(")");
        }

    }

    public static void main(String[] args) {
        int[] p = new int[]{5, 2, 3, 4, 6, 7, 8};
        int[][] m = new int[p.length][p.length];
        int[][] s = new int[p.length][p.length];
        System.out.println("P={5,2,3,4,6,7,8}");
        System.out.println("min:" + matrixChain(p, m, s));
        traceback(1, p.length - 1, s);
    }

}
