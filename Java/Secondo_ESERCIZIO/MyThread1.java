package Java.Secondo_ESERCIZIO;

import java.util.Scanner;

public class MyThread1 extends Thread {

    public void run() {
        Scanner sc = new Scanner(System.in);
        int n1 = sc.nextInt();
        System.out.println(fibonacci(n1));
    }

    private static final long[] memo = new long[100];
    private static boolean inizializzato = false;

    public static long fibonacci(int n) {
        if (!inizializzato) {
            memo[0] = 0;
            memo[1] = 1;
            inizializzato = true;
        }
        if (n < 2) return memo[n];
        if (memo[n] != 0) return memo[n];   // già calcolato

        memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return memo[n];
    }
}
