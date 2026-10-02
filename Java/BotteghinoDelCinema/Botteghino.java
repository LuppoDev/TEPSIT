package Java.BotteghinoDelCinema;

public class Botteghino {
    private int nBiglietti;

    public Botteghino(int nBiglietti) {
        this.nBiglietti = nBiglietti;
    }

    public synchronized void acquistaBiglietto() throws InterruptedException {
        while (nBiglietti == 0) {
            System.out.println(Thread.currentThread().getName() + " in attesa...");
            wait();
        }
        nBiglietti--;
        System.out.print("Biglietto venduto a: " + Thread.currentThread().getName());
        System.out.println("Biglietti rimasti: " + nBiglietti);
        notifyAll();
    }

    public synchronized void rifornisciBiglietti() throws InterruptedException {
        while (nBiglietti != 0) {
            wait();
        }
//        int biglietti = 1 + (int) (Math.random() * 5);;
        int biglietti = 3;
        nBiglietti += biglietti;
        System.out.println("Biglietti riforniti! Quantità: " + biglietti);
        notifyAll();
    }
}
