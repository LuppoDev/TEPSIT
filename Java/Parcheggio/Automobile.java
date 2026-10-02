package Java.Parcheggio;

public class Automobile extends Thread {
    private final Parcheggio parcheggio;

    public Automobile(String nome, Parcheggio parcheggio) {
        super(nome);
        this.parcheggio = parcheggio;
    }

    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            try {
                if (parcheggio.parcheggia()) {
//                    System.out.println(getName() + " parcheggia");
                    Thread.sleep(100);
                    parcheggio.esci();
                }
                Thread.sleep(200);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            }
        }
    }
}