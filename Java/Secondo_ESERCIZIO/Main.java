package Java.Secondo_ESERCIZIO;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        MyThread1 thread = new MyThread1();
        thread.start();
        thread.join();
        System.out.println("Fine");
    }
}
