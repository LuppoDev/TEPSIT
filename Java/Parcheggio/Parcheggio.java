package Java.Parcheggio;

public class Parcheggio {
    private boolean libero = true;
    private String occupante;

    public synchronized boolean parcheggia() throws InterruptedException {
        while (!libero) {
            wait();
        }
        occupante = Thread.currentThread().getName();
        libero = false;
        System.out.println("Parcheggio occupato da: " + occupante);
        return true;
    }

    public synchronized void esci() {
        libero = true;
        System.out.println("Parcheggio libero da: " + occupante);
        occupante = null;
        notifyAll();
    }
}