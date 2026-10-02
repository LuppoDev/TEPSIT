package Java.BotteghinoDelCinema;

public class Cliente extends Thread{
    private final Botteghino botteghino;

    public Cliente(Botteghino botteghino) {
        this.botteghino = botteghino;
    }

    @Override
    public void run() {
        try {
            botteghino.acquistaBiglietto();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
