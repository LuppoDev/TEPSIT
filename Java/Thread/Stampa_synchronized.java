package Java.Thread;

public class Stampa_synchronized extends Thread {
    public StringBuffer sb;
    private static final Object lock = new Object();

    public void run() {
        synchronized (lock) {
            System.out.println(Thread.currentThread().getName());
            for (int i = 1; i <= 100; i++)
                System.out.print(sb);

            System.out.println();
            sb.setCharAt(0, (char) (sb.charAt(0) + 1));
        }
    }

    public Stampa_synchronized(StringBuffer sb) {
        this.sb = sb;
    }

    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("A");

        for (int i = 0; i < 5; i++) {
            Stampa_synchronized thread = new Stampa_synchronized(sb);
            thread.start();
        }
    }
}
