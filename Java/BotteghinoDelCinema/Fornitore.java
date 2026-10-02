package Java.BotteghinoDelCinema;

public class Fornitore extends Thread {
    private final Botteghino botteghino;

    public Fornitore(Botteghino botteghino) {
        this.botteghino = botteghino;
    }

    @Override
    public void run() {
        try {
            botteghino.rifornisciBiglietti();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
