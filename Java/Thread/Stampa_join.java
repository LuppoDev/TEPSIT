package Java.Thread;

public class Stampa_join extends Thread {
    public StringBuffer sb;

    public void run() {
        System.out.println(Thread.currentThread().getName());
        for (int i = 1; i <= 100; i++)
            System.out.print(sb);

        System.out.println();
        sb.setCharAt(0, (char) (sb.charAt(0) + 1));
    }

    public Stampa_join(StringBuffer sb) {
        this.sb = sb;
    }

    public static void main(String[] args) throws InterruptedException {
        StringBuffer sb = new StringBuffer("A");

        for (int i = 0; i < 5; i++) {
            Stampa_join thread = new Stampa_join(sb);
            thread.start();
            thread.join();
        }
    }
}
